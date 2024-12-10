const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MP,
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@gmail.com.com>', // sender address
    to: data.to, // list of receivers
    subject: data.suject, // Subject line
    text: data.text, // plain text body
    html: data.htm, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

module.exports = sendEmail;
