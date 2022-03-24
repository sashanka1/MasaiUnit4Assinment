const mongoose =require("mongoose");

const submissionSchima =mongoose.Schema(
    {
        evaluatioId:{type:mongoose.Schema.Types.ObjectId,ref:"evaluation"},
        strdentId:{type:mongoose.Schema.Types.ObjectId,ref:"student"},
        mark:{type:Number,require:true},

    },
    {
    timeStamp:true,
    versionKey:false
    }

);
module.exports=mongoose.model("submission",submissionSchima);