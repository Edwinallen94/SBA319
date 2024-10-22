import express from "express";
import Animal from "../models/animalSchema.mjs";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  try {
    const newAnimal = new Song(req.body);

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
    const allAnimal = await Song.find({});

    res.json(allAnimal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    let updatedAnimal = await Song.findByIdandUpdate(req.params.id, req.body, {
      new: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    let deletedAnimal = await Song.findByIdandDelete(req.params.id);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
