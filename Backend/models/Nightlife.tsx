import mongoose, { Document } from 'mongoose';

interface INightlifeReview extends Document {
  location: string;
  rating: number;
  comment: string;
}

const nightlifeReviewSchema = new mongoose.Schema<INightlifeReview>({
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

const NightlifeReview = mongoose.model<INightlifeReview>('Nightlife', nightlifeReviewSchema);

export default NightlifeReview;