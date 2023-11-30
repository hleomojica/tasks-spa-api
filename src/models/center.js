const mongoose = require('mongoose');

const CenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  services: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Center', CenterSchema);