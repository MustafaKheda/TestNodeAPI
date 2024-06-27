import express from "express";
import userRouter from "./routes/user.route.js";
const app = express();
import cors from "cors";

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use("/api/v1/users", userRouter);

export { app };
