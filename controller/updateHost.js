
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '/../.env') });

function update({email,name,phone,address})
{
    process.env.HOST_NAME=name;
    process.env.HOST_EMAIL=email;
    process.env.HOST_PHONE=phone;
    process.env.HOST_ADDRESS=address;
}

function updateHost(req,res)
{
    update(req.body);
    res.render('entry');
}

module.exports = updateHost;