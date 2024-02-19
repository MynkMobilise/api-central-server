import express from "express";
const router = express.Router();
import { sentimentCheck } from "../controller/sentiment.controller.js"

router.post("/face", sentimentCheck);

export default router