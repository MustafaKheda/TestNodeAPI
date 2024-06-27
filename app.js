import express from "express";
import userRouter from "./routes/user.route.js";
const app = express();
import cors from "cors";

app.use(express.json());
app.use(cors());
app.use("/api/v1/users", userRouter);

export { app };
