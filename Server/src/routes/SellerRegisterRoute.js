const express = require('express')
const bcrypt = require('bcrypt');
const SellerRegisterRoute = express.Router()

const SellerRegisterData = require('../models/SellerRegisterData')

SellerRegisterRoute.post('/seller-reg', async (req, res) => {

        var InputFields = {
            Name: req.body.name,
            Email: req.body.email,
            Phone: req.body.mobile
        }

    try {
        const oldUser = await SellerRegisterData.findOne({ Name: InputFields.Name })
        console.log("==?>", oldUser);
        if (oldUser) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "user name already exist"
            })
        }   

        const oldmail = await SellerRegisterData.findOne({ Email: InputFields.Email })
        if (oldmail) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "email id already exist"
            })
        }

        const oldPhone = await SellerRegisterData.findOne({ Phone : InputFields.Phone})
        if (oldPhone) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "mobile number is already registered"
            })
        }

        var hash = await bcrypt.hash(req.body.password, 10)
        var RegisterData = {
            Name: req.body.name,
            Email: req.body.email,
            Phone: req.body.mobile,
            Password: hash
           
        }
        console.log(RegisterData);
        
        const saveData = await SellerRegisterData(RegisterData).save()
        if (saveData) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "Register success"
            })
        }

    } catch (error) {
        res.status(400).json({
            message: "somthing went wrong"
        })
    }
})

module.exports = SellerRegisterRoute