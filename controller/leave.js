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
            return "404"
        }
        

    const msg = `Visit Details:
     Name : ${visitor.name}
     Phone : ${visitor.host_phone}
     Check-in time : ${timeFormat(visitor.checkIn)}
     Check-out time : ${timeFormat(new Date())}
     Host name : ${visitor.host_name}
     Address visited : ${visitor.host_address}
     Host email : ${visitor.host_email}
    `;
    const html = `
    <h1>Visit Details : </h1>
    <ul>
      <li><h3>
     Name : ${visitor.name}
      </h3></li>
      <li><h3>
     Phone : ${visitor.host_phone}
      </h3></li>
      <li><h3>
     Check-in time : ${timeFormat(visitor.checkIn)}
      </h3></li>
      <li><h3>
     Check-out time : ${timeFormat(new Date())}
      </h3></li>
      <li><h3>
     Host name : ${visitor.host_name}
      </h3></li>
      <li><h3>
     Address visited : ${visitor.host_address}
      </h3></li>
      <li><h3>
     Host email : ${visitor.host_email}
      </h3></li>
    </ul>
    `;
        let mailOptions = {
            from: "my_testing_email_id",
            to: `${visitor.email}`,
            subject: 'Visit Summary',
            text: msg,
            html
        }
        sendMail(mailOptions);

        sendSms(visitor.phone,msg);
        let visitorName = visitor.name;
       
        await Visitor.findOneAndDelete({ email });
        return visitorName;
    } catch (err) {
  
        throw err;
    }
}


const leave = async (req, res) => {
    try {

        let result =await leave_fun(req.body);
        if(result === "404")
           return res.render('message',{
                one:`Sorry sir!!`,
                two:`But you have to checkIn first to  CheckOut`
            });
        
        res.render('message',{
            one:`Thanks for your Time, Mr.${result}`,
            two:`We will send you A Summary of this visit`
        });
    } catch (err) {
        res.render('message',{
            one:"OOPs!!!!",
            two:`Something wrong happen!! Please try again`,
            three:`Nitin Kumar will fix this porblem later`
        });
    }
};
module.exports = leave;
