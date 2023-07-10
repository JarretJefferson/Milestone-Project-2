const mongoose = require('mongoose');

const shoppingReviewSchema = new mongoose.Schema({
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

const shoppingReview = mongoose.model('shopping', shoppingReviewSchema);

module.exports = shoppingReview;