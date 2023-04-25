const express = require('express')
const multer = require('multer')
const Products = express.Router()

const uploadPoductData = require('../models/ProductsData')


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '../client/public/images/upload/')
    },
    filename: function (req, file, callback) {
        callback(null, req.body.name)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3
    }
})

Products.post('/image', upload.single("file"), (req, res) => {
    return res.json("file uploaded")
})

Products.post('/file', (req, res) => {
    // console.log(req);
    const input = {
        Product: req.body.product,
        Price: req.body.price,
        Category: req.body.category,
        Discription: req.body.discription,
        Image: req.body.filename,
        Login_Id: req.body.loginid
    }
    console.log(input)
    uploadPoductData(input).save().then((feild) => {
        return res.status(200).json({
            success: true,
            error: false,
            message: "Item uploaded"
        })
    })
})

Products.get("/products-view", (req, res) => {
    uploadPoductData.find().then((out) => {
        return res.status(200).json({
            success: true,
            error: false,
            data: out
        })

    })
})

Products.get("/single-product/:value", (req, res) => {
    var data = req.params.value
    uploadPoductData.findOne({ _id: data }).then((info) => {
        return res.status(200).json({
            success: true,
            error: false,
            info: info
        })
    })
})


module.exports = Products