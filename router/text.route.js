import express from "express";
const router = express.Router();
import { sentimentCheck } from "../controller/sentiment.controller.js"

router.post("/sentiment", sentimentCheck);

export default router