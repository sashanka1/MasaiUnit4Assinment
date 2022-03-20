 const mongoose = require("mongoose");

// module.exports = () => {
//   return mongoose.connect(
//     "mongodb+srv://sss:Hacker1mon@cluster0.lhntb.mongodb.net/validation?retryWrites=true&w=majority"
//   );
// };

module.exports=()=>{
    return mongoose.connect("mongodb+srv://sss:Hacker1mon@cluster0.lhntb.mongodb.net/school?retryWrites=true&w=majority")
}