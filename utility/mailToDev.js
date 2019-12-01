const sendMail = require('./mail');
  function sendMailToDev(err)
  {
    let info = {
        from: '"Time to wake up" <nitinkumar.test@gmail.com>', // sender address
        to: "nk095291@gmail.com", // list of receivers
        subject: "Something Went Wrong ❌", // Subject line
        text: `some error occured : ${err}`, // plain text body
        html: `<b>some error occured : ${err}</b>` // html body
      };
    sendMail(info);
  }
  module.exports = sendMailToDev;