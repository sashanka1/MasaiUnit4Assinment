const express = require("express");
const connect = require("./config/db");
const userController = require("./controllers/userCon");
const galleryController = require("./controllers/galleryCon");

const app = express();
app.use(express.json());

app.use("/user", userController);
app.use("/gallery", galleryController);

module.exports = app;





app.listen(5502, async () => {
  try {
    await connect();
    console.log("Listening on port 6500");
  } catch (err) {
    console.log(err);
  }
});