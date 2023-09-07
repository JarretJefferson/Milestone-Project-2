import mongoose, { Document } from 'mongoose';

// Define an interface for the AdventureReview type
interface IAdventureReview extends Document {
  location: string;
  rating: number;
  comment: string;
}

const adventureReviewSchema = new mongoose.Schema<IAdventureReview>({
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

const AdventureReview = mongoose.model<IAdventureReview>('Adventure Review', adventureReviewSchema);

export default AdventureReview;
