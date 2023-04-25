const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const SellerRegister = require('./src/routes/SellerRegisterRoute')
const SellerLogin = require('./src/routes/SellerLoginRoute')
const UploadProductSeller = require('./src/routes/ProductsRoute')
const Cart = require('./src/routes/CartRoute')

app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('./public'))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  app.use('/register-seller', SellerRegister)
  app.use('/login-seller', SellerLogin)
  app.use('/product', UploadProductSeller)
  app.use('/cart', Cart)

app.listen(8000,() => {
    console.log("server started at http://localhost:8000")
})