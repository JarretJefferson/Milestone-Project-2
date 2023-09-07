import mongoose, { Document } from 'mongoose';

interface IShoppingReview extends Document {
  location: string;
  rating: number;
  comment: string;
}

const shoppingReviewSchema = new mongoose.Schema<IShoppingReview>({
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

const ShoppingReview = mongoose.model<IShoppingReview>('Shopping', shoppingReviewSchema);

export default ShoppingReview;