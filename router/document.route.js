import express from "express";
const router = express.Router();

import { invoiceCheck } from "../controller/invoice.controller.js";
import { receiptCheck } from "../controller/receipt.controller.js";

router.post("/invoice", invoiceCheck);
router.post("/receipt", receiptCheck);

export default router