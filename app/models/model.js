/**
 * @module       Models
 * @file         models.js
 * @description  AddBookSchema holds the database Schema 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        01/07/2021  
-----------------------------------------------------------------------------------------------*/
//connecting to the mongoDB through mongoose
const mongoose = require('mongoose');

//schema for addressbook
const addBookSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        validate: /^[a-zA-Z ]{3,30}$/
    },
    lastName: {
        type: String,
        required: true,
        validate: /^[a-zA-Z ]{3,30}$/
    },
    addresss: {
        type: String,
        required: true,
        validate: /[a-zA-Z0-9\s\,\''\-]*$/
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    emailId:{
        type: String,
        required: true
    },
    phoneNo:{
        type:Number,
        required: true,
        validate: /^\d{10}$/
    },
},{
    //Applying time stamp
    timestamps: true
});

//exporting model module
module.exports = mongoose.model('addressBook',addBookSchema);


    
