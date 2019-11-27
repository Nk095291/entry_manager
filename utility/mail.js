
const nodemailer = require("nodemailer");
const path = require("path")

require('dotenv').config({ path: path.join(__dirname, '/../.env') });

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
};

let transporter = nodemailer.createTransport(smtpConfig);

function sendMail(opt) {
    transporter.sendMail(opt, err => {
        if (err)
            throw err;
    })
}

module.exports = sendMail;
console.log(" mail fine");
