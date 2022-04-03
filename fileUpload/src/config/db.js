

const { connect } = require("mongoose");

module.exports = () => {
  return connect("mongodb+srv://sss:Hacker1mon@cluster0.lhntb.mongodb.net/fileupload?retryWrites=true&w=majority");
};