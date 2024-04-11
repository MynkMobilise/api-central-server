const { validationResult } = require('express-validator');
const mysqlConnection = require('../config/dbConnection');
const bcrypt = require('bcryptjs');
// const randomstring = require('randomstring');
const sendMail = require('../helpers/sendMail');
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

//User Registeration
const register = (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array()})
    }
    mysqlConnection.query(
        `SELECT * FROM user_master WHERE LOWER(email) = LOWER(${mysqlConnection.escape(
            req.query.email
        )})`,
        (err, result)=> {
            if(result && result.length)
            {
                return res.status(409).send({
                    msg:'This user is already in use!'
                })
            }
            else
            {
                bcrypt.hash(req.query.password , 10 , (err,hash)=>{

                    if(err)
                    {
                        return res.status(400).send({
                            msg:err
                        })
                    }
                    else
                    {
                        mysqlConnection.query(
                            `INSERT INTO user_master (first_name,last_name,email,password,phone) VAlUES ('${req.query.f_name}','${req.query.l_name}',${mysqlConnection.escape(
                                req.query.email
                            )},${mysqlConnection.escape(hash)},12345678);`,
                            (err, result) => {
                                if(err)
                                {
                                    return res.status(500).send({
                                        msg:err
                                    });
                                }
                                return res.status(500).send({
                                    msg : 'The user Has been resgistered with us'
                                });
                            }
                        )
                    }

                })
            }
        }
    )
}

//User Login Process
const login = (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array()})
    }

    mysqlConnection.query(
        `SELECT * FROM user_master Where email = ${mysqlConnection.escape(req.query.email)};`,
        (err,result) => {
            if(err)
            {
               return res.status(400).send({
                    msg:err
               });
            }
            if(!result.length)
            {
                return res.status(401).send({
                    msg:"Email or Password is incorrect!"
                });
            }

            bcrypt.compare(
                req.query.password,
                result[0]['password'],
                (bErr, bResult) => {
                    if(bErr){
                        return res.status(400).send({
                            msg:bErr
                        });
                    }
                    if(bResult){
                      const token =   jwt.sign({ id: result[0]['id']}, JWT_SECRET, { expiresIn:'1h' });
                    //   db.query(
                    //     `UPDATE user_master SET last_login = now() WHERE id = '${result[0]['id']}'`
                    //   );
                      return res.status(200).send({
                        msg:'Logged In',
                        token,
                        user: result[0]
                      });
                    }

                    return res.status(401).send({
                        msg:"Email or Password is incorrect!"
                    });
                }
            )
        }
    )
}

module.exports = {
    register,
    login
}