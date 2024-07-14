const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let test = nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ismael.ortiz57@ethereal.email",
      pass: "tA6H3aF86t41NATEFW",
    },
  });
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <rengkatalexander@gmail.com>', // sender address
    to: "alexrengkat@gmail.com, rengkatalexander06@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<h2>Hello world?</h2>", // html body
  });
  res.json(info);
};
module.exports = sendEmail;
