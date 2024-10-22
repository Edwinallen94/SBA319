import express from "express";
import Animal from "../models/animalSchema.mjs";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  try {
    const newAnimal = new Animal(req.body);

    await newAnimal.save();

    res.json(newAnimal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//read
router.get("/", async (req, res) => {
  try {
    const allAnimal = await Animal.find({});

    res.json(allAnimal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    let updatedAnimal = await Animal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedAnimal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    let deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
    res.json(deletedAnimal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
