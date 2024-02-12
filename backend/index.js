const express= require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const dbconfig = require('./config/db.config')
const userRoutes = require('./routes/user');
const cors = require('cors')
require("dotenv").config();
// console.log(process.env)   


app.use(bodyParser.json());
app.use(cors());

mongoose.promise=global.promise
mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser:true
}).then(()=>{
    console.log("Database Connected");
})

// app.get('/',userRoutes)

// app.post('/',function(req,res){
//     res.send("done")
// })

app.listen(7000,()=>{

})