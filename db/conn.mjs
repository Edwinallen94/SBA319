// Bring in mongoose to work with MongoDB
import mongoose from "mongoose";
// Load environment variables (like your database URI)
import dotenv from "dotenv";

// Initialize dotenv so we can access variables from .env file
dotenv.config();

// Pull the connection string for MongoDB from your environment variables
const connectionString = process.env.mongoURI;

// This is the function that will connect to your MongoDB
export default async function connectDB() {
  try {
    // Try connecting to the MongoDB database with the connection string
    await mongoose.connect(connectionString);
    console.log(`MongoDB Connected...`); // If successful, log that you're connected
  } catch (err) {
    // If it fails, log the error and shut down the app
    console.error(err);
    process.exit(1); // Exit the process with a failure code
  }
}
