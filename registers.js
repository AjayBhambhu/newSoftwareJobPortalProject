const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        unique : true,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true,
    },
    phone : {
        type : Number,
        unique : true,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    cpassword : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    }
})

const Register = new mongoose.model('Register', employeeSchema);  
module.exports = Register;


