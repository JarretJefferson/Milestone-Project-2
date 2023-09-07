import mongoose, { Document } from 'mongoose';

// Define an interface for the Food type
interface IFood extends Document {
  name: string;
  rating: number;
  comment: string;
  // If you need to add more fields, just define them here in the interface
}

const foodSchema = new mongoose.Schema<IFood>({
  name: String,
  rating: Number,
  comment: String
  // Similarly, you can add more fields here if needed
});

const Food = mongoose.model<IFood>('Food', foodSchema);

export default Food;

