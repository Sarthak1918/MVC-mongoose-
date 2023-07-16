
const mongoose = require('mongoose')
const {Schema} = mongoose


const productSchema = new Schema({  //configuration of a doument
  title: {type:String,required:true,unique:true}, //validation checking
  price: {type:Number,min:[0,'Cant be less than 0'],required:true},
  discountPercentage: {type:Number,min:[0,'Cant be less than 0'],max:[50,'max discount exceeded']},
  rating:  {type:Number,min:[0,'Cant be less than 0'],max:[5,'max rating exceeded'],default:0},
  thumbnail:{type:String,required:true,unique:true},
  images:[String]
});


exports.Product = mongoose.model("Product", productSchema); //here we save the configuration/schema and telling that to create "Product" collection that has cofiguration like the schema we stored
