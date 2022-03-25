const express =require("express");
const app =express();
const Submission =require("../models/submissin.models")

app.post("/",async(req,res)=>{
    try {
       const submission =await Submission.create(req.body);
       res.status(200).send(submission);
    } catch (error) {
        res.send({message:error.message})
    }
});

app.get("/",async(req,res)=>{
    try {
       const submission =await Submission.find().lean().exec();
       res.status(201).send(submission);
    } catch (error) {
        res.send({message:error.message})
    }
});

module.exports=app;