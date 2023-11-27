import express from "express";
const router = express.Router();

import { invoiceCheck } from "../controller/invoice.controller.js";

router.post("/check", invoiceCheck);

export default router