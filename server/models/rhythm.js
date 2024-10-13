const mongoose = require('mongoose');

const RhythmSchema = new mongoose.Schema({
  pattern: {
    type: [String], // Array representing rhythmic pattern (e.g., ["1", "0", "1", "1"])
    required: true,
  },
  timeSignature: {
    type: String, // e.g., "4/4", "6/8"
    required: true,
  },
  tempo: {
    type: Number, // BPM
    required: true,
  },
});

module.exports = mongoose.model('Rhythm', RhythmSchema);
