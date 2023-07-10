// models/Food.js

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  // Define the fields and their types
  name: String,
  rating: Number,
  comment: String
  // Add more fields as needed
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;

