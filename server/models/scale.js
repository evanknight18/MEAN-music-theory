const mongoose = require('mongoose');

const ScaleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  notes: {
    type: [String], // Array of notes in the scale
    required: true,
  },
});

module.exports = mongoose.model('Scale', ScaleSchema);
