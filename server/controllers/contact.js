const nodemailer = require("nodemailer");
require("dotenv").config();

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass:process.env.MAIL_PASSWORD
    }  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Nodemailer Ready to Send");
    }
  });
  
  const contact = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const system = req.body.system; 
    const link = req.body.link; 

    const mail = {
      from: name,
      to: "963gal963@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>system: ${system}</p>,
             <p>link: ${link}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  };
  module.exports ={contact}