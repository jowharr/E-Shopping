const express = require('express')
const { default: mongoose } = require('mongoose')
const CartRoute = express.Router()
// const objectid = require('mongodb').Objectid  
 
const CartData = require('../models/CartData')

CartRoute.post('/', (req, res) => {
    var cartItem = {
        Product: req.body.Product,
        Price:  req.body.Price,
        Category:  req.body.Category,
        Discription:  req.body.Discription,
        Image: req.body.Image,
        Login_Id: req.body.Login_Id,
        Size: req.body.size
    }
    console.log(cartItem);
    try { 
        CartData(cartItem).save().then((dat)=> {
        res.status(200).json({
            success : true,
            error : false,
            messege : dat
        })
    })
    } catch (error) {
        res.status(400).json({
            messege: "something went wrong!" 
        })
    }
})

CartRoute.get('/products', async (req,res) => {
    try{
        
    CartData.find().then((out) => {
            res.status(200).json ({
            success : true,
            error: false,
            data : out
        })
        
    })
} catch (error) {
    res.status(400).json({
        messege: "something went wrong!" 
    })
}
}) 

// CartRoute.delete('/delete', (req, res) => {
//     CartData.deleteOne(id:_id)
// })

module.exports = CartRoute