 const express =require("express");
const { default: mongoose } = require("mongoose");

 const batchSchema =mongoose.Schema(
     {
         batehname:{type:String,require:true},

     },
     {
         timestamp:true,
         versionkey:false,

     }
 );

 module.exports=mongoose.model("batch",batchSchema);