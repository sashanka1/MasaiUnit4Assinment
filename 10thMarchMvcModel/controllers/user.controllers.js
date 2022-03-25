const express =require("express");
const User = require("../models/user.models")

const app =express();


app.post("/",async(req,res)=>{

    try {
        const user =await User.create(req.body);
        res.status(200).send(user);
    } catch (error) {
        res.send({message:error.message});
    }
   


});

app.get("/",async(req,res)=>{
    try {
        const students =await User.find().lean().exec()

        res.status(200).send(students);
    } catch (error) {
        res.send({message:error.message});
    }
})
module.exports=app;