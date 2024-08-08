//Database Connection With My SQL DataBase
import connection from "../config/database.js";

//Default Export
export const getOrg = async (req, res) => {

    //Get Org 
    connection.query('SELECT * FROM 0_org_master', (error, results, fields) => {
        if (error) throw error;
        if(results)
            {
                // console.log('The solution is: ', results);
                res.status(200).json({ status: true, msg: "Data Found", data: results});
            }
            else
            {
                res.status(200).json({ status: true, msg: "Data Not Found", data: results});
            }
        });
}
    
export const addOrg = async (req, res) => {

    const { org_name, address ,tax_id, buss_email} = req.body;
    //checking duplicate entry
    const sql1 = 'SELECT * FROM 0_org_master WHERE org_name = ?';
    const values1 = [org_name];
  
    connection.query(sql1, values1, (err, results) => {
        if (err) throw err;
        if (results.length > 0)
            {
                res.status(200).json({ status: true, msg: "This org name already exist"});
            }
            else
            {
                const sql = 'INSERT INTO 0_org_master (org_name,address,tax_id,buss_email) VALUES (?, ?, ?, ?)';
                const values = [org_name, address, tax_id, buss_email];
                console.log(values);
                connection.query(sql, values, (err, results, fields) => {
                if (err) {
                    console.error('Error inserting data:', err.stack);
                    return;
                }
                console.log('Data inserted, ID:', results.insertId);
                });

                res.status(200).json({ status: true, msg: "Data Inserted Successfully"});
            }
    });


    connection.end();


}

export const editOrg = async (req, res) => {

    console.log(req.body);
    const { org_name, address ,tax_id, buss_email} = req.body;
    const sql = 'INSERT INTO 0_org_master (org_name,address,tax_id,buss_email) VALUES (?, ?, ?, ?)';
    const values = [org_name, address, tax_id, buss_email];
    console.log(values);
    connection.query(sql, values, (err, results, fields) => {
    if (err) {
        console.error('Error inserting data:', err.stack);
        return;
    }
    console.log('Data inserted, ID:', results.insertId);
    });

    connection.end();

    res.status(200).json({ status: true, msg: "Data Inserted Successfully"});

}