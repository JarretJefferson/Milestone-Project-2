const mongoose = require('mongoose');

const nightlifeReviewSchema = new mongoose.Schema({
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

const nightlifeReview = mongoose.model('nightlife', nightlifeReviewSchema);

module.exports = nightlifeReview;