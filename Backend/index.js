import express from "express";
const app = express();
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
const port = 4000;

app.use(express.json()); // all requests received via express will be passed through json
app.use(cors()); // to connect rect.js file to our local host port

// Database connection with MongoDB
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.cnb19.mongodb.net/ecommerce-clothing"
);

// api creation

app.get("/", (req, res) => {
  res.send("Express app is running 🏃🏼‍♂️");
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`server running on port ${port}`);
  } else {
    console.log(`Error occured: ${error}`);
  }
});
