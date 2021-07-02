/**
 * @module       AddBookController
 * @file         controller.js
 * @description  AddBookController holds the API 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        02/07/2021  
-----------------------------------------------------------------------------------------------*/

const service = require('../services/service');

/**
 * @description Create and save new employee
 * @param {*} req, request sent from the http
 * @param {*} res, respond given to the http
 * @returns res
 */

class AddBookController{
    registerUser = (req,res) => {
       try{
            const contactDetails = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                phone: req.body.phone,
                emailId: req.body.emailId,
                password: req.body.password
            }

            
            service.createAddress(contactDetails, (error, data) => {
                return ((error) ?
                    res.status(400).send({
                        success: false,
                        message: "Email already exists!"
                    }) :
                
                res.send({
                    success: true,
                    message: "New address added!!",
                    data: data
                }));
            });
        }catch(error){
            return res.status(500).send({
                success: false,
                message: error.message
            });
        };
    }
}


module.exports = new AddBookController();
