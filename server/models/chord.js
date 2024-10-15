const mongoose = require('mongoose');

const ChordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  notes: {
    type: [String],  // Array of notes in the chord (e.g., ["C", "E", "G"] for C Major)
    required: true,
  },
  type: {
    type: String,  // Type of chord (e.g., "Major", "Minor", "Diminished")
    required: true,
  },
  description: {
    type: String,  // Optional description or additional information about the chord
    default: '',
  },
});

module.exports = mongoose.model('Chord', ChordSchema);
