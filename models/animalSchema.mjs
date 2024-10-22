// Bring in mongoose to define the schema for our "Animal" model
import mongoose from "mongoose";

// Define the schema (or structure) for the animal data in MongoDB
const animalSchema = new mongoose.Schema({
  // "animal" field will hold the type/name of the animal, and it’s required
  animal: {
    type: String,
    required: true,
  },
  // "gender" field for the animal, also required
  gender: {
    type: String,
    required: true,
  },
  // "age" field for the animal, this one’s optional (so it's not required)
  age: {
    type: Number,
  },
});

// Add an index to make searches by "name" faster
animalSchema.index({ name: 1 });

// Export the model so we can use it to interact with our Animal data in MongoDB
export default mongoose.model("Animal", animalSchema);
