import express, { Request, Response } from 'express';
import AdventureReview from '../models/AdventureReview';

const router = express.Router();

router.post('/submit', (req: Request, res: Response) => {
  const { location, rating, comment } = req.body;

  const newAdventureReview = new AdventureReview({
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

export default router;