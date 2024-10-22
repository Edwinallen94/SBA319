//IMPORTS
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/conn.mjs";
import songRoutes from "./routes/animalRoutes.mjs";

//Setup
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3001;

//DB connection
connectDB();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/song", songRoutes);

//Routes

//Listener
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
