const express =require("express");
const Batch =require("../models/batch.models")

const app =express();

app.post("/",async(req,res)=>{
    try {
        const batch = Batch.create(req.body);
        res.status(200).send(batch);
    } catch (error) {
        res.send({message:error.message});
    }
});

module.exports=app;