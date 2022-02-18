const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let registerSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  DOB: {
    type: String
  },
}, {
  collection: 'registerUsers'
})

module.exports = mongoose.model('registerUsers', registerSchema)