const express = require('express');
const RDFGraphRoute = express.Router();

let RDFModel = require('../models/RDFData');
let RDFGraph = require('../models/RDFGraph');
let rdfconvert = require('../RDFGraphCreator/RDFGraphCreator')
let rdfintro = require('../RDFGraphCreator/RDFGraphCreator1')

RDFGraphRoute.route('/RDFGraph/:fileName').get((req, res, next) => {
  RDFModel.find({ fileName: req.params.fileName }, (error, datas) => {
    if (error) {
      return next(error)
    } else {
      let t = rdfintro.RDFGraphGeneratorf()
      let g = ""
      let test = 1
    
      for (let data of datas) {
        console.log(data.approve)
        if (data.approve == true){
          let convertedrdfgraph = rdfconvert.RDFGraphGenerator(data.node0, data.node1, data.node2, data.propertyName, data.comment, test, test + 1)
          console.log(convertedrdfgraph)
          g = g + convertedrdfgraph
          test = test + 2
        }
        
      }
      let final = t + g
      res.json(final)
    }
  })
});
RDFGraphRoute.route('/RDFGraph/:_id').put((req, res, next) => {
  RDFModel.findByIdAndUpdate(req.params._id, { $set: req.body }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log("Datasuccesfully updated")
    }
  })
})

RDFGraphRoute.route('/deleteRDFData/:_id').delete((req, res, next) => {
  RDFModel.findByIdAndRemove(req.params._id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})


RDFGraphRoute.route('/approve/:_id').put((req, res, next) => {
  RDFModel.findByIdAndUpdate(req.params._id, { $set: req.body }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log("Datasuccesfully updated")
    }
  })
})
RDFGraphRoute.route('/likes/:_id').put((req, res, next) => {
  RDFModel.findByIdAndUpdate(req.params._id, { $set: req.body }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log("Datasuccesfully updated")
    }
  })
})


module.exports = RDFGraphRoute;