const mongoose = require('mongoose');
const dSchema = mongoose.Schema;

let discussionSchema = new dSchema({
  user: {
    type: String
  },
  message: {
    type: String
  },
}, {
  collection: 'discussionMessage'
})

module.exports = mongoose.model('discussionMessage', discussionSchema )