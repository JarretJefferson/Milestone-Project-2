import express, { Request, Response } from 'express';
import Review from '../models/Review';

const router = express.Router();

router.post('/submit', (req: Request, res: Response) => {
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

export default router;