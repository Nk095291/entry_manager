
const path = require('path')
const informDev = require('../utility/mailToDev');

require('dotenv').config({ path: path.join(__dirname, '/../.env') });

function update({email,name,phone,address})
{
    try{
    process.env.HOST_NAME=name;
    process.env.HOST_EMAIL=email;
    process.env.HOST_PHONE=phone;
    process.env.HOST_ADDRESS=address;
    }catch(err)
    {
        throw err;
    }
}

function updateHost(req,res)
{
    try{
        update(req.body);
        res.render('message',{
            one:`DONE!!!!`,
            two:`Host information has been sucessfully updated`,
            three:`everyone form now one will and visit MR. ${process.env.HOST_NAME}`
        });
    
    }catch(err){
        informDev(err);
        res.render('message',{
            one:"OOPs!!!!",
            two:`Something wrong happen!! Please try again`,
            three:`Nitin Kumar will fix this porblem later`
        });
    }

}
module.exports = updateHost;