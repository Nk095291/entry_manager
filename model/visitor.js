const mongoose = require('mongoose');
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '/../.env') });

const DB = process.env.MONGODB;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const visitor = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOUT: {
        type: Date,
    },
    host_name:{
        type:String,
        required:true
    },
    host_address:{
        type:String,
        required:true
    },
    host_email:{
        type:String,
        required:true
    },
    host_phone:{
        type:Number,
        required:true
    }
});

const visitorModel = new mongoose.model('visitor', visitor);

module.exports = visitorModel;
