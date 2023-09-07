import mongoose, { Document } from 'mongoose';

interface IHistoricalReview extends Document {
  location: string;
  rating: number;
  comment: string;
}

const historicalReviewSchema = new mongoose.Schema<IHistoricalReview>({
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

const HistoricalReview = mongoose.model<IHistoricalReview>('Historical', historicalReviewSchema);

export default HistoricalReview;