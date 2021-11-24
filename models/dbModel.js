const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

const dbModel = mongoose.model('testDB', dbSchema);

module.exports = dbModel;