const express = require("express");
const Evaluation =require("../models/evaluation.modules");

const app =express();

app.post("/",async(req,res)=>{
    try {
        const eva =await Evaluation.create(req.body);
        res.status(200).send(eva);
    } catch (error) {
        ressend({message:error.message})
    }
});

app.get("/",async(req,res)=>{
    try {
        const evaluation =await Evaluation.find().lean().exec();
        res.status(201).send(evaluation);
    } catch (error) {
        res.send({message:error.message});
    }
})

module.exports=app