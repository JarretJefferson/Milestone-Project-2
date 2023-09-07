import express, { Request, Response } from 'express';
import HistoricalReview from '../models/Historical';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const reviews = await HistoricalReview.find({}); // You can add filters like: {location: req.query.location}
    res.send({ reviews });
  } catch (e) {
    console.error("reviews", e);
    res.status(500).send("Failure");
  }
});

router.post('/submit', async (req: Request, res: Response) => {
  try {
    const { location, rating, comment } = req.body;

    // Create a new review object
    await new HistoricalReview({
      location,
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

