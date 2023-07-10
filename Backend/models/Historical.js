const mongoose = require('mongoose');

const historicalReviewSchema = new mongoose.Schema({
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

const historicalReview = mongoose.model('historical', historicalReviewSchema);

module.exports = historicalReview;