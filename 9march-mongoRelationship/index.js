const express =require("express")
const mongoose=require("mongoose")
const app =express();
app.use(express.json());

const connectDb=()=>{
    mongoose.connect("mongodb+srv://sss:Hacker1mon@cluster0.lhntb.mongodb.net/laibrary?retryWrites=true&w=majority")
};

const sectionschema=mongoose.Schema(
    {
        laibrarySection:{type:String,require:true},

    },
    {
        timestamps:true,
    },
);

const Section =mongoose.model("section",sectionschema);



const bookschema=mongoose.Schema(
    {
        bookName:{type:String,require:true},
        body:{type:String,require:true},
        otherId:{type:mongoose.Schema.Types.ObjectId,ref:"author"},
        otherId:{type:mongoose.Schema.Types.ObjectId,ref:"author"},
    }
);

const Books=mongoose.model("book",bookschema);

const authorScima=mongoose.Schema(
    {
        firstName:{type:String,require:true},
        lastName:{type:String,require:true},

    }
);
const Author=mongoose.model("author",authorScima);






app.listen(6001,async()=>{
    try {
       await connectDb() 
    } catch (error) {
        console.log(error);
    };
    console.log("running at port 6001")
})