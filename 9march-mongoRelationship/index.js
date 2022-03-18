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
        outhorId:{type:mongoose.Schema.Types.ObjectId,ref:"author"},
        outhor2Id:{type:mongoose.Schema.Types.ObjectId,ref:"author"},
        sectionId:{type:mongoose.Schema.Types.ObjectId,ref:"Section"},
        checkedin_Time:{type:String,default:null},
        checkedout_Time:{type:String,default:null},
    }
);
//6234d91a514d5eb7f12df392
//6234d9577bebcbdb90eb5849  author id

//bookid
//6234db76b5b17699e2b0f1d3
//6234dbfc14ed1bdfba2ed95d
//6234dc84bb002ed70e493cc7
const Books=mongoose.model("book",bookschema);

const authorScima=mongoose.Schema(
    {
        firstName:{type:String,require:true},
        lastName:{type:String,require:true},

    }
);
const Author=mongoose.model("author",authorScima);



app.post("/section",async(req,res)=>{
    try {
        const section=await Section.create(req.body)
        return res.status(200).send(section);
        
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

app.post("/author",async(req,res)=>{
    try {
        const author=await Author.create(req.body)
    return res.status(200).send(author); 
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
   
})


app.post("/book",async(req,res)=>{
    try {
        const book=await Books.create(req.body)
    return res.status(200).send(book); 
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
   
})

app.listen(6001,async()=>{
    try {
       await connectDb() 
    } catch (error) {
        console.log(error);
    };
    console.log("running at port 6001")
})