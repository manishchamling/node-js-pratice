const { mailer } = require("./index");
mailer({
  to: "unknownms373@gmail.com",
  subject: "hello World",
  message: "<h2> HI ! how are you? </h2>",
});
