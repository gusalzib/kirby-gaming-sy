const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  activities: [String]
});

const memberSchema = new mongoose.Schema({
  name: String,
  title: String,
  fieldOfStudy: String,
  phoneOrEmail: String,
  visitHistory: [visitSchema]
});

module.exports = mongoose.model('Member', memberSchema);
