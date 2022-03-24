const express =require("express");
const Batch =require("../models/batch.models")

const app =express();



app.get("/",async(req,res)=>{
    try {
        const batch = await Batch.find().lean().exec();
        res.send(batch)
    } catch (error) {
        console.log(error);
    }
});

app.post("/",async(req,res)=>{
    try {
        const batch = await Batch.create(req.body);
        res.status(200).send(batch);
    } catch (error) {
        res.send({message:error.message});
    }
});

module.exports=app;