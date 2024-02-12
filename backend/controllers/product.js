const Product=require("../model/product");
const formidable = require("formidable");
const_=require("lodash");
const fs = require("fs");

exports.getProductById =(req,res,next,id)=>{
    Product.findById(id)
    .populate("category")
    .exec(( err,product)=> {
    if(err){
            return res.status(400).json({
                error:"Product not found"
            });
        }
        req.product=product;
        next();
    })

};

exports.createProduct=(req,res)=>{
    let form = new formidable.IncomingForm();
    form.keepExtensions=true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error:"problem with image"
            });
        }
         

    })
}