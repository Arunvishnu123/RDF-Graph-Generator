const express = require('express');
const RDFRoute = express.Router();


let RDFModel = require('../models/RDFData');

RDFRoute.route('/createfile').post((req, res, next) => {
    RDFModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


module.exports = RDFRoute;