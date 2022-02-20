const mongoose = require('mongoose');
const rSchema = mongoose.Schema;

let RDFSchema = new rSchema({
  fileName: {
    type: String
  },
  node0: {
    type: String
  },
  node1: {
    type: String
  },
  node2: {
    type: String
  },
  comment: {
    type: String
  },
}, {
  collection: 'RDFData'
})

module.exports = mongoose.model('RDFData', RDFSchema)