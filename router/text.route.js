import express from "express";
const router = express.Router();
import { sentimentCheck } from "../controller/sentiment.controller.js"
import { translate } from "../controller/translator.controller.js"

router.post("/sentiment", sentimentCheck);
router.post("/translator", translate);

export default router