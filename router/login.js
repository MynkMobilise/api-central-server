import express from "express";
const router = express.Router();
import { doLogin } from "../controller/login.controller.js";

router.post("/login", doLogin);

export default router;
