const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://menscart:12345@cluster0.o4wqceo.mongodb.net/menscart?retryWrites=true&w=majority')

const Schema = mongoose.Schema

const sellerLogin = new Schema ({
    username : {type:String,required:true},
    password: {type:String,required:true}
})

var login = mongoose.model('seller_login_tb', sellerLogin)
module.exports = login;