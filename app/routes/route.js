/**
 * @module       app
 * @file         routes.js
 * @description  it contains the http methods 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        02/07/2021  
-----------------------------------------------------------------------------------------------*/

module.exports = (app) => {
    const addressBook = require('../controllers/controller.js');

    //registering a new user
    app.post('/registerUser', addressBook.registerUser);

    //login for existing user
    app.post('/userLogin', addressBook.userLogin);

    //get all users
    app.get('/readAll', addressBook.readAll);

    //get users by id
    app.get('/read/:userId', addressBook.readById);
}