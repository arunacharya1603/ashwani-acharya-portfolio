import express from 'express';
import cors from 'cors';
import path from 'path';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' }); // Specify the path to your.env file

const PORT = process.env.PORT || 3008;

const app = express();
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"})
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: { rejectUnauthorized: false } // Add this option
  });

contactEmail.verify((error) =>{
    if(error){
        console.log(error);
    } else {
        console.log("Ready to send");
    }
})

app.post("/api/contact", bodyParser.urlencoded({extended: false}), (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: `${name} <${email}>`,
        to: [process.env.EMAIL_ADDRESS, 'home.shriman.narayan1008@gmail.com'],
        subject: "New message from contact form",
        text: message,
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        `
      };
      contactEmail.sendMail(mail, (error) => {
        if(error) {
            res.json({status: "fail" })
            } else {
                res.json({status: "success" })
                }
                })
})


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/dist', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is online on port: ${PORT}`);
})
