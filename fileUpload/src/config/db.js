

const { connect } = require("mongoose");

module.exports = () => {
  return connect("mongodb+srv://sss:Hacker1mon@cluster0.lhntb.mongodb.net/unit_4_project_Data?retryWrites=true&w=majority");
};