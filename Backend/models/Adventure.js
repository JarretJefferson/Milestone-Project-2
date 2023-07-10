// models/Adventure.js

const mongoose = require('mongoose');

const adventureSchema = new mongoose.Schema({
  // Define the fields and their types specific to adventures
  location: String,
  rating: Number,
  description: String,
  
});

const Adventure = mongoose.model('Adventure', adventureSchema);

module.exports = Adventure;