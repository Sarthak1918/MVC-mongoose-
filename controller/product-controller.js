const fs = require('fs');
const model = require('../model/product-model.js');
const { error } = require('console');
const Product = model.Product;
const mongoose = require('mongoose')


//CREATE POST
exports.addProduct = (req, res) => {
   const product = new Product(req.body);
   product.save().then(()=>{
    res.json({"success":1})
   }).catch((error=>{
    res.json(error)
   }));
   
}


//READ   /products
exports.getAllProducts = async(req, res) => {
    Product.find().then(products=>res.json(products)).catch((err)=>{res.json(err)})
    // res.json(products)
}

//READ   /products/id:
exports.getProduct = (req, res) => {
    let id = req.params.id
    Product.findById(id).then(product=>res.json(product)).catch((err)=>{res.json(err)})
}


//UPDATE(replace)  PUT-->override
exports.replaceProduct = (req, res) => {
    let id = req.params.id
    Product.findOneAndReplace({_id:id},  req.body,   {new:true}).then(product=>{res.json(product)}).catch((err)=>{res.json(err)})
                             //filter  //replacement  //for getting the updated product(otherwise it will return the product before updated)
}

//UPDATE(update)  PATCH
exports.updateProduct = (req, res) => {
    let id = req.params.id
    Product.findOneAndUpdate({_id:id},  req.body,   {new:true}).then(product=>{res.json(product)}).catch((err)=>{res.json(err)})
}


//Delete delete     
exports.deleteProduct = (req, res) => {
    let id = req.params.id
    Product.findOneAndDelete({_id:id}).then(product=>{res.json(product)}).catch((err)=>{res.json(err)})
    
}

