const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://menscart:12345@cluster0.o4wqceo.mongodb.net/menscart?retryWrites=true&w=majority')

const Schema = mongoose.Schema

const SellerReg = new Schema ({
    Name : {type:String,required:true},
    Email :{type:String,required:true},
    Phone :{type:String,required:true},
    Password : {type:String,required:true}
})
var Input = mongoose.model('seller_data_tb', SellerReg)
module.exports=Input   