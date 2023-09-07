import mongoose, { Document } from 'mongoose';

interface IReview extends Document {
  restaurant: string;
  rating: number;
  comment: string;
}

const reviewSchema = new mongoose.Schema<IReview>({
  restaurant: {
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

const Review = mongoose.model<IReview>('Review', reviewSchema);

export default Review;
