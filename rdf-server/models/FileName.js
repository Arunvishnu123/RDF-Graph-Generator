const mongoose = require('mongoose');
const fSchema = mongoose.Schema;

let fileSchema = new fSchema({
  fileName: {
    type: String
  },
}, {
  collection: 'fileName'
})

module.exports = mongoose.model('fileName', fileSchema )