const Visitor = require('../model/visitor');
const timeFormat = require('../utility/date');
const sendMail = require('../utility/mail');
const sendSms = require('../utility/sms');
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '/../.env') });


async function leave_fun({ email }) {
    try {
        console.log(email);
        let visitor = await Visitor.findOne({ email });
        if (!visitor) {
            throw "not in database"
        }

        const msg = `Visit Details:
     Name : ${visitor.name}
     Phone : ${process.env.HOST_PHONE}
     Check-in time : ${timeFormat(visitor.checkIn)}
     Check-out time : ${timeFormat(new Date())}
     Host name : ${process.env.HOST_NAME}
     Address visited : ${process.env.HOST_ADDRESS}
     Host email : ${process.env.HOST_EMAIL}
    `;
        let mailOptions = {
            from: "my_testing_email_id",
            to: `${visitor.email}`,
            subject: 'Visit Summary',
            text: msg
        }
        sendMail(mailOptions);

        // sendSms(visitor.phone,msg);

        await Visitor.findOneAndDelete({ email });

    } catch (err) {
        console.log(err);
        throw err;
    }
}


const leave = (req, res) => {
    try {

        leave_fun(req.body);
        res.render('leave');
    } catch (err) {

        res.render('error');
    }
};
module.exports = leave;