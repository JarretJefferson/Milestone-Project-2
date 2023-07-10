// models/Historical.js

const mongoose = require('mongoose');

const historicalSchema = new mongoose.Schema({
  // Define the fields and their types specific to adventures
  landmark: String,
  rating: Number,
  description: String,
  // Add more fields as needed
});

const Historical = mongoose.model('Historical', historicalSchemaSchema);

module.exports = Historical;