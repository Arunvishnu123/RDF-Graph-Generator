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

RDFRoute.route('/RDFData/:fileName').get((req, res, next) => {
    RDFModel.find({fileName:req.params.fileName}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

RDFRoute.route('/RDFfileName').get((req, res, next) => {
    RDFModel.find({},{"fileName":1,"_id":0},(error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

RDFRoute.route('/RDFfileName/:fileName').get((req, res, next) => {
    RDFModel.find({fileName:req.params.fileName}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


module.exports = RDFRoute;