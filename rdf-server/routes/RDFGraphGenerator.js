const express = require('express');
const RDFGraphRoute = express.Router();

let RDFModel = require('../models/RDFData');
let RDFGraph = require('../models/RDFGraph');
let rdfconvert = require('../RDFGraphCreator/RDFGraphCreator')

RDFGraphRoute.route('/RDFGraph/:fileName').get((req, res, next) => {
    RDFModel.find({ fileName: req.params.fileName }, (error, datas) => {
        if (error) {
            return next(error)
        } else {
            for (let data of datas) {
                let convertedrdfgraph = rdfconvert.RDFGraphGenerator(data.node0, data.node1, data.node2)
                console.log(convertedrdfgraph)
                RDFGraph.create(convertedrdfgraph, (error, data) => {
                    if (error) {
                        return next(error)
                    }
                })
            }

            RDFGraph.find({fileName: req.params.fileName},(error,data) =>{
                if(error){
                    return next(error)
                }else{
                res.json(data)
                }
            })
        }
    })
});

module.exports = RDFGraphRoute;