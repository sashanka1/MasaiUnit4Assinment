const express =require("express");

const app =express();

const usersController = require("./controllers/user.controllers");
const studentController= require("./controllers/student.controller")
 const batchController =require("./controllers/batch.controllers")
 const evaluationcontroller =require("./controllers/evaluation.controllers");
const sumbissioncontrollers =require("./controllers/submission.controllers")

app.use(express.json());

const connect =require("./configs/db")

app.use("/user",usersController)

app.use("/student",studentController)

app.use ("/batch",batchController)

app.use("/evaluatin",evaluationcontroller);

app.use("/submission",sumbissioncontrollers);











app.listen(5400, async function () {
    try {
      await connect();
      console.log("port of SSS ---listening---- on--- port--- NO--- 5400");
    } catch (err) {
      console.error(err.message);
    }
  });