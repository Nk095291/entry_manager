
const path = require('path')

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
        res.render('hostUpdate');
    
    }catch(err){
        res.render(error);
    }

}
module.exports = updateHost;