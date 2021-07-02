/**
 * @module       service
 * @file         service.js
 * @description  service class holds the callback method for controller 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        02/07/2021  
-----------------------------------------------------------------------------------------------*/
const model = require('../models/model');

class service{
    createAddress = (contactDetails, callback) => {
        try{
            model.create(contactDetails, (error, data) => {
                return error? callback(error, null): callback(null, data)    
            })
        }catch(error){
            return callback(error,null);
        }
    }
}

module.exports = new service();