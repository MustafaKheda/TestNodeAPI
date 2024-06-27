import { Router } from "express";
import { login, signupUser } from "../controller/user.controller.js";

const router = Router();
router.route("/signup").post(signupUser);
router.route("/login").get(login);

export default router;
