import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  animal: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

animalSchema.index({ name: 1 });

export default mongoose.model("Animal", animalSchema);
