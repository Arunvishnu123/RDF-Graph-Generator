const express = require('express');
const fileNameRoute = express.Router();

let fileModel = require('../models/FileName');

fileNameRoute.route('/file').post((req, res, next) => {
    fileModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            fileModel.find((error,data) =>{
                res.json(data)
            })
           
        }
    })
});

fileNameRoute.route('/deleteFileName/:fileName').delete((req, res, next) => {
    fileModel.findOneAndRemove(req.params.fileName, (error, data) => {
        
        if (error) {
            return next(error)
        } else {
          res.json("succ")
           
        }
    })
});

fileNameRoute.route('/totalfilename').get((req, res, next) => {
    fileModel.find({},(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })



module.exports = fileNameRoute;

