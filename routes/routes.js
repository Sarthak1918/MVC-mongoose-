const express = require('express')
const router = express.Router()
const productController =  require('../controller/product-controller')



router
    .post('/',productController.addProduct)  //CREATE
    .get('/', productController.getAllProducts) //READ
    .get('/:id', productController.getProduct)  //READ
    .put('/:id', productController.replaceProduct) //UPDATE(replace)
    .patch('/:id', productController.updateProduct) //UPDATE(update)
    .delete('/:id', productController.deleteProduct)  //DELETE

exports.router = router;
