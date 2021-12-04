const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
  savedAlarms: {
    type: String,
    required: true
  },
  
  
});

const Alarm = mongoose.model('testDB', dbSchema);

module.exports = Alarm;