const express=require('express');
//const fs=require('fs')
const homeRoute=express.Router();

const homeModel=require('../models/home.model');

homeRoute.post("/create",async(req,res)=>{
    
    let {name,email,number,password}=req.body

    if(name=="" || password=="" || number=="" || email==""){
        res.send("wrong")
    }else{
        const homemodel=new homeModel({...req.body});
        await homemodel.save();
        console.log("registred")
        res.send(JSON.stringify("Jwdjhdh"))
    }

    
})
homeRoute.post("/login",async(req,res)=>{
    let {email,password}=req.body
    if(password==""  || email==""){
      res.send("please fill above boxes")
    }else{
        const isvalid=await homeModel.find({$and:[{email:email},{password:password}]});
        if(isvalid){
          res.end(JSON.stringify("login Succcess"))
           console.log(isvalid)
        }else{
           res.send("login failed")
        }
    }
})
homeRoute.get("/see",async(req,res)=>{
     const data = await homeModel.find()
    res.send(data)
})

module.exports=homeRoute;
