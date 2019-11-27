const Visitor = require('../model/visitor');
const sendMail = require('../utility/mail');
const sendSms = require('../utility/sms')
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '/../.env') });



async function entry_fun({ name, email, phone }) {
    try {
        const msg = `
            Visitor Details:
        Name - ${name}
        Email - ${email}
        Phone - ${phone}
        `;
        console.log(process.env.HOST_EMAIL);
        let mailOptions = {
            from: "my_testing_email_id",
            to: process.env.HOST_EMAIL,
            subject: 'Somebody Come To Visit You',
            text: msg
        }
        sendMail(mailOptions);

        // works only between 9 am to 9 pm as i am not a registered user in nexmo

        // sendSms({process.env.HOST_PHONE},msg);
        let visitor = await Visitor.create(
            {
                name,
                email,
                phone,
                checkIn: new Date()
            }
        );
        if (!visitor) throw "error related to DataBase";


    } catch (er) {
        throw er;
    }

}


const entry = (req, res) => {
    try {
        entry_fun(req.body);
        res.render('entry');
    } catch (err) {
        res.render('error');
    }
}

module.exports = entry;