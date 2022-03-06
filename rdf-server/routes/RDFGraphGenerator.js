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
            let g =""
            for (let data of datas) {
                let convertedrdfgraph = rdfconvert.RDFGraphGenerator(data.node0, data.node1, data.node2,data.propertyName)
                console.log(convertedrdfgraph)
                 g = g + convertedrdfgraph  
                         
            }
            let final = t + g
            res.json(final)
        }
    })
});

module.exports = RDFGraphRoute;