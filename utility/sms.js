const Nexmo = require('nexmo');

const path = require("path")

require('dotenv').config({ path: path.join(__dirname, '/../.env') });


const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_KEY,
  apiSecret: process.env.NEXMO_SERECT,
});

const from = 'Nitin kumar';

function sendSms(to, text) {
  nexmo.message.sendSms(form, to, text);
}

module.exports = sendSms;