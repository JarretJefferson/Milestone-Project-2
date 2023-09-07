import express, { Request, Response } from 'express';
import AdventureReview from '../models/AdventureReview';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    let reviews = await AdventureReview.find({});
    res.send({ reviews });
  } catch (e) {
    console.log('reviews', e);
    res.status(500).send('Failure');
  }
});

router.post('/submit', async (req: Request, res: Response) => {
  try {
    const { location, rating, comment } = req.body;

    // Create a new review object
    await new AdventureReview({
      location,
      rating,
      comment,
    }).save();
    res.send('Success');
  } catch (e) {
    console.log(e);
    res.status(500).send('Failure');
  }
});

export default router;
