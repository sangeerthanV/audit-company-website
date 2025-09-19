const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  feedback: { type: String, required: true }
});

module.exports = mongoose.model('Client', ClientSchema);
