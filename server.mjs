//IMPORTS
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/conn.mjs";
import animalRoutes from "./routes/animalRoutes.mjs";

// Setup dotenv to access environment variables
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3001;

// DB connection
connectDB();

// Middleware for parsing form data and JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Route for handling requests related to animals
app.use("/animal", animalRoutes);

// Additional Routes (if needed, like a homepage route)
app.get("/", (req, res) => {
  res.send("Welcome to the Animal API!"); // Simple homepage route
});
//Middleware (catches unhandled errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Listener to start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
