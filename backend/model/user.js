const mongoose = require ('mongoose')
const crypto = require('crypto')
const uuidv1 = require("uuid");

const Schema = new mongoose.Schema({
    
          name: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
          },
          lastname: {
            type: String,
            maxlength: 32,
            trim: true
          },
          email: {
            type: String,
            trim: true,
            required: true,
            unique: true
          },
          userinfo: {
            type: String,
            trim: true
          },
          encry_password: {
            type: String,
            required: true
          },
          salt: String,
          role: {
            type: Number,
            default: 0
          },
          purchases: {
            type: Array,
            default: []
          }
        },
        { timestamps: true }
      );
const user = new mongoose.model('user',Schema);
module.exports= user;