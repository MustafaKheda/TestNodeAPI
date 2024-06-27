import express from "express";
import userRouter from "./routes/user.route.js";
const app = express();
import cors from "cors";

app.use(express.json());
app.use(cors());
app.use("/api/v1/users", userRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

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

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 4000;



// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });