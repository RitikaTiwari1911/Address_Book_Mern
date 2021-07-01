/**
 * @module       app
 * @file         routes.js
 * @description  it contains the http methods 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        01/07/2021  
-----------------------------------------------------------------------------------------------*/
const addressBook = require('../controllers/controller.js');
module.exports  = (app) =>{
    
    //Register a new user
    app.post('/addBook/registerUser', addressBook.registerUser);
}