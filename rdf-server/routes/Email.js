const express = require('express');
const emailRoute = express.Router();
const emailm = require('../RDFGraphCreator/mailer')

emailRoute.route('/sendemail').post((req, res, next) => {
    res.json("success")
    console.log(req.body.email,req.body)
    emailm.email(req.body.email,req.body.emailMessage)
});


module.exports = emailRoute;
