const express =require("express");

const Student =require("../models/student.models");

const app =express();

app.post("/",async(req,res)=>{
    try {
        const student =await Student.create(req.body);
        res.status(200).send(student);

    } catch (error) {
        res.send({message:error.message});
    }
});


app.get("/",async(req,res)=>{
    
    try {
        const students = await Student.find().lean().exec();  
        res.status(201).send(students);
    } catch (error) {
        res.send({message:error.message});
    }
})

module.exports=app;