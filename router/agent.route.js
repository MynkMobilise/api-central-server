import express from "express";
const router = express.Router();

import { agentChat } from "../controller/agent.controller.js";
import { agentTrain } from "../controller/trainAgent.controller.js";

router.get("/process", agentChat);
router.get("/train", agentTrain);

export default router