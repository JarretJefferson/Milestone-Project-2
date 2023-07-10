
const express = require('express');
const router = express.Router();
const adventureReview = require('../models/AdventureReview');

router.post('/submit', (req, res) => {
  const { location, rating, comment } = req.body;

  const newAdventureReview = new adventureReview({
    location,
    rating,
    comment,
  });

  newAdventureReview.save((err, result) => {
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