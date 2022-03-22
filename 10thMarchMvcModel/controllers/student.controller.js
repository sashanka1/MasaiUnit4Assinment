const express =require("express");

const Student =require("../models/student.models");

const app =express();

app.post("/",async(req,res)=>{
    try {
        const student =await Student.create(req.body);
        res.status(200).send(user);

    } catch (error) {
        res.send({message:error.message});
    }
})

module.exports=app;