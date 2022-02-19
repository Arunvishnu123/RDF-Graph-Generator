const express = require('express');
const userRoute = express.Router();

// model
let userModel = require('../models/UserRegistration');

userRoute.route('/createusers').post((req, res, next) => {
    userModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


userRoute.route('/email').get((req, res, next) => {
    userModel.findById(req.params.id, (error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 
module.exports = userRoute;