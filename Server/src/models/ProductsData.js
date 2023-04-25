const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://menscart:12345@cluster0.o4wqceo.mongodb.net/menscart?retryWrites=true&w=majority")

const Schema = mongoose.Schema

const productUpload = new Schema({
    Login_Id: {type:String,required:true},
    Product:{type:String,required:true},
    Price: {type:String,required:true},
    Category: {type:String,required:true},
    Discription: {type:String,required:true},
    Image: {type:String,required:true}
     
})

var InputItems = mongoose.model('seller_upload_product_tb', productUpload)
module.exports=InputItems