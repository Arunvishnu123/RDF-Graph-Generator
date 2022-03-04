const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let graphSchema = new Schema({
  node0: {
    type: String
  },
  node1: {
    type: String
  },
  node2: {
    type: String
  },
  node3: {
    type: String
  },
  fileName: {
    type: String
  },
  comment: {
    type: String
  },

}, {
  collection: 'rdfGraph'
})

module.exports = mongoose.model('rdfGraph', graphSchema)