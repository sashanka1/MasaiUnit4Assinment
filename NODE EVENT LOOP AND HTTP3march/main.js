const express=require("express");
const app=express();
app.listen(6000,()=>{
console.log("listening  port 6000");

});

app.get("/",function(req,res){
    res.send("hollo")
})

app.get("/books",function(req,res){
    const bookdata=require("./bookdata.json")
    res.send(bookdata)
    console.log(bookdata)
});