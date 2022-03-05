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

userRoute.route('/signin').post((req, res, next) => {
    if (req.body.email == undefined || req.body.password == undefined) {
        res.send({ success: "Authentication Failed" })
    }
    let email = req.body.email
    console.log(email)
    let password = req.body.password
    console.log(password)
    let query = { email: email }
    userModel.findOne({ 'email': email, 'password': password }, (err, result) => {
        if (err || result === null) {
            res.send({ success: "Login Failed" })
        } else {
            res.json({ success: "Login Success",result},)
        }
    })
});

module.exports = userRoute;