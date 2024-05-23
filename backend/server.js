import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// Load environment variables from .env file
dotenv.config();







// Connect to the database
connectDB();

const app = express();


















app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on port ${PORT}`);
});
