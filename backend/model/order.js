const { isNumber } = require('lodash');
const mongoose =require('mongoose');
const {objectId} = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    product:{
        type:ObjectId,
        ref:"Product"
    },
    name:String,
    count:Number,
    price:Number

});

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

const OrderSchema =new mongoose.Schema({
    products:[ProductCartSchema],
    transaction_id:{},
    amount:{type:Number},
    address:String,
    status:{
        type:String,
        default:"Recieved",
    enum:["Cancelled","Delivered","Shipped","Processing","Received"]
    },
    updated:Date,
    user:{
        type:ObjectId,
        ref:"user"
    }
},
{timestamps:true});

const Order =mongoose.model("Order",OrderSchema);

module.exports={Order,ProductCart}; 