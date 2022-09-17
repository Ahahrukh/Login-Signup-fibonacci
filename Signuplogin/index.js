const express=require('express');
const connection  = require('./config/connection');
const homeRoute=require('./routes/home.route')
const cors=require('cors')
const app=express();

app.use(express.json());
app.use(cors());
app.use("/",homeRoute);

app.listen(4000,async()=>{
    try{
        await connection
        console.log("connected to Data Base")
    }catch(err){
        console.log("error:",err)
    }
    console.log("we are working on 4000 port")
})