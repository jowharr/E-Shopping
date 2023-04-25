const express = require('express')
const bcrypt = require('bcrypt');
const LoginRouter = express.Router()
const jwt = require('jsonwebtoken')

const SellerLoginData = require('../models/SellerLoginData')
const RegisteredUser = require('../models/SellerRegisterData')

LoginRouter.post('/', async(req, res) => {

    var loginInput = {
        username: req.body.username,
        password: req.body.password
    }
    try {
        RegisteredUser.findOne({ Email: loginInput.username }).then((value) => {
            console.log("===>>", value);

            if (!value) {
              return  res.status(400).json({
                    error: true,
                    success: false,
                    message: "Enter a valid Username/Email"
                })
            }
             bcrypt.compare(loginInput.password, value.Password, function (err, result) {
                if (result) {
                    var token = jwt.sign({name:value.Name,email:value.Email,id:value._id}, 'secretkey', { expiresIn: '3h' })
                    console.log(result);
                    res.status(200).json({
                        success: true,
                        error: false,
                        messeage: result,
                        login_id:value._id,
                        tok : token

                    })
                } else {
                    res.status(400).json({
                        success: false,
                        error: true,
                        message: result
                    })
                }
            })
        })
    } catch(err){
        res.status(400).json({
            message : "somthing went wrong"
        })
    }
})


module.exports = LoginRouter