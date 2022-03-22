const mongoose =require("mongoose");

const studentSchima =mongoose.Schema(
    {
       rooid:{type:String,require:true},
       currentbranch:{type:String,require:true},

    },{
        timestemp:true,
        versionkey:false,
    }
);

module.exports=mongoose.model("strdent",studentSchima)