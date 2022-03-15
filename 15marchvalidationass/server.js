const app = require("./index");
const connect = require("./configs/db");

app.listen(5500, async function () {
  try {
    await connect();
    console.log("port of SSS ---listening---- on--- port--- NO--- 5500");
  } catch (err) {
    console.error(err.message);
  }
});
