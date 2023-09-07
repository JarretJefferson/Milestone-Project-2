import mongoose, { Document } from 'mongoose';

// Define an interface for the Adventure type
interface IAdventure extends Document {
  location: string;
  rating: number;
  description: string;
}

const adventureSchema = new mongoose.Schema<IAdventure>({
  location: String,
  rating: Number,
  description: String,
});

const Adventure = mongoose.model<IAdventure>('Adventure', adventureSchema);

export default Adventure;