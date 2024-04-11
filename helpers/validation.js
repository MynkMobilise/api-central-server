const { check } = require('express-validator');

exports.signUpValidation = [
    check('f_name','Please enter first name').not().isEmpty(),
    check('l_name','Please enter last name').not().isEmpty(),
    check('email','Please enter email').isEmail().normalizeEmail({ gmail_remove_dots : true }),
    check('password','Password is required').isLength({ min:6 }),
]

exports.loginValidation = [
    check('email','Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots : true }),
    check('password','Password is required').isLength({ min:6 }),
]