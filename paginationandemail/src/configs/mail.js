const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587 ,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "44c1b25399b57e",
    pass: "3caeac48668f12",
  },
});

//||25 || 465 || 587 ||2525 ||5501