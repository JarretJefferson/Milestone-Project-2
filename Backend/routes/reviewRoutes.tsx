import express, { Request, Response } from 'express';
import Review from '../models/Review';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find({}); // You can add filters like: {restaurant: req.query.restaurant}
    res.send({ reviews });
  } catch (e) {
    console.error("reviews", e);
    res.status(500).send("Failure");
  }
});

router.post('/submit', async (req: Request, res: Response) => {
  try {
    const { restaurant, rating, comment } = req.body;

    // Create a new review object
    await new Review({
      restaurant,
      rating,
      comment,
    }).save();

    res.send("Success");
  } catch (e) {
    console.error(e);
    res.status(500).send("Failure");
  }
});

export default router;

