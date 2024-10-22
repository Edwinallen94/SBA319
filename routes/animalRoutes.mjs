// Bring in express to create routes and handle requests
import express from "express";
// Bring in the Animal model we defined in animalSchema.mjs
import Animal from "../models/animalSchema.mjs";

// Create a router to handle all animal-related requests
const router = express.Router();

// Create a new animal (POST request)
router.post("/", async (req, res) => {
  try {
    // Create a new animal document from the request body
    const newAnimal = new Animal(req.body);

    // Save the new animal to the database
    await newAnimal.save();

    // Respond with the new animal data in JSON format
    res.json(newAnimal);
  } catch (err) {
    // If something goes wrong, log the error and send a server error response
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Get all animals (GET request)
router.get("/", async (req, res) => {
  try {
    // Fetch all animals from the database
    const allAnimal = await Animal.find({});

    // Respond with the list of animals in JSON format
    res.json(allAnimal);
  } catch (err) {
    // If something goes wrong, log the error and send a server error response
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Update an animal by its ID (PUT request)
router.put("/:id", async (req, res) => {
  try {
    // Find the animal by its ID and update it with new data from the request body
    let updatedAnimal = await Animal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated document
      }
    );

    // Respond with the updated animal data in JSON format
    res.json(updatedAnimal);
  } catch (err) {
    // If something goes wrong, log the error and send a server error response
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Delete an animal by its ID (DELETE request)
router.delete("/:id", async (req, res) => {
  try {
    // Find the animal by its ID and delete it from the database
    let deletedAnimal = await Animal.findByIdAndDelete(req.params.id);

    // Respond with the deleted animal's data in JSON format
    res.json(deletedAnimal);
  } catch (err) {
    // If something goes wrong, log the error and send a server error response
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Export the router so it can be used in other parts of the app
export default router;
