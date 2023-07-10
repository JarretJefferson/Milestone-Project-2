const mongoose = require('mongoose');

const adventureReviewSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const adventureReview = mongoose.model('Adventure Review', adventureReviewSchema);

module.exports = adventureReview;