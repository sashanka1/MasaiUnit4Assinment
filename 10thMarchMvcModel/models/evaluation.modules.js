const mongoose =require("mongoose");


const evaluationSchima =mongoose.Schema(
    {
        evaluationName:{type:String,require:true},
        dataofevaluation :{type:Date,require:true},
        instructor:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
        batch_id:{type:mongoose.Schema.Types.ObjectId,ref:"batch"}
    }
);

module.exports=mongoose.model("evaluation",evaluationSchima);