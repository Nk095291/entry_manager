const Visitor = require('../model/visitor');
const sendMail = require('../utility/mail');
const sendSms = require('../utility/sms')
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '/../.env') });



async function entry_fun({ name, email, phone }) {
    try {

        let ispresend = await Visitor.findOne({ email });
        
        if(ispresend)
        {
            return 'already present'
        }
        ispresend = await Visitor.findOne({ phone });
        
        if(ispresend)
        {
            return 'already present'
        }

        const msg = `
            Visitor Details:
        Name - ${name}
        Email - ${email}
        Phone - ${phone}
        `;
        const html = `
        <h1>
        Visitor Details:      
    </h1>
    <ul>
      <li><h3>
        Name - ${name}
      </h3></li>
      <li><h3>
          Email - ${email}
      </h3></li>
      <li><h3>
          Phone - ${phone}
      </h3></li>
    </ul>
    `
        console.log(process.env.HOST_EMAIL);
        let mailOptions = {
            from: "my_testing_email_id",
            to: process.env.HOST_EMAIL,
            subject: 'Somebody Come To Visit You',
            text: msg,
            html
        }
        sendMail(mailOptions);

        // works only between 9 am to 9 pm as i am not a registered user in nexmo

        sendSms(process.env.HOST_PHONE,msg);
        let visitor = await Visitor.create(
            {
                name,
                email,
                phone,
                checkIn: new Date(),
                host_name:process.env.HOST_NAME,
                host_address:process.env.HOST_ADDRESS,
                host_email:process.env.HOST_EMAIL,
                host_phone:process.env.HOST_PHONE
            }
        );
        if (!visitor) throw "error related to DataBase";


    } catch (er) {
        throw er;
    }

}


const entry = async (req, res) => {
    try {
        let result =await entry_fun(req.body);
    
        if(result==="already present") 
            res.render('message',{
                one:`Sorry sir!!`,
                two:`But you have to checkOut first to checkIn again`
            });
        else
            res.render('message',{
                one:"Thanks for your Time",
                two:`We are sending your information to MR.${process.env.HOST_NAME}`
            });
    } catch (err) {
        res.render('message',{
            one:"OOPs!!!!",
            two:`Something wrong happen!! Please try again`,
            three:`Nitin Kumar will fix this porblem later`
        });
    }
}

module.exports = entry;