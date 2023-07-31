const mongoose = require("mongoose");

const employee2Schema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        unique : true,
        required : true,
    },
    mobile : {
        type : Number,
        unique : true,
        required : true,
    },
    message : {
        type : String,
    }
})

const Contact = new mongoose.model('Contact', employee2Schema);  
module.exports = Contact;


