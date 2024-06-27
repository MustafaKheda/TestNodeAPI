import { app } from "./app.js";
import connectDB from "./db/index.js";

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
// connectDB()
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log(err, "MongoDB connection failed");
//   });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});