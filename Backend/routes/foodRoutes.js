const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.post('/submit', (req, res) => {
  const { restaurant, rating, comment } = req.body;

  const newReview = new Review({
    restaurant,
    rating,
    comment,
  });

  newReview.save((err, result) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Error adding review');
    } else {
      console.log('Review added successfully:', result);
      res.status(200).send('Review added successfully');
    }
  });
});

module.exports = router;

