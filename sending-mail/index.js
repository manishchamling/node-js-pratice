require("dotenv").config();
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

//Verify connection configuration
transport.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our message");
  }
});

const mailer = async ({ to, subject, message }) => {
  const result = transport.sendMail({
    from: `"Manish Rai" <${process.env.SMTP_USER}`,
    to,
    subject,
    html: message,
  });
  return result;
};

module.exports= {mailer}