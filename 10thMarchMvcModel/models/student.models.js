const mongoose =require("mongoose");


const studentSchima =mongoose.Schema(
    {
       rooid:{type:String,require:true},
       batch_id:{type:mongoose.Schema.Types.ObjectId,ref:"batch"}

    },{
        timestemp:true,
        versionkey:false,
    }
);

module.exports=mongoose.model("strdent",studentSchima)