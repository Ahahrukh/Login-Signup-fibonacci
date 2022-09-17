const mongoose=require('mongoose')

const homeSchema=mongoose.Schema({
   name:{type:String,require:true},
   email:{type:String,require:true},
   number:{type:String,require:true},
   password:{type:String,require:true}
})

const homeModel=mongoose.model("homequestions",homeSchema)

module.exports=homeModel;