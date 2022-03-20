const express =require("express");

const app =express();

const usersController = require("./controllers/user.controllers");

app.use(express.json());

const connect =require("./configs/db")

app.use("/user",usersController)













app.listen(5400, async function () {
    try {
      await connect();
      console.log("port of SSS ---listening---- on--- port--- NO--- 5400");
    } catch (err) {
      console.error(err.message);
    }
  });