import express from "express";
const router = express.Router();

import { invoiceCheck } from "../controller/invoice.controller.js";
import { receiptCheck } from "../controller/receipt.controller.js";
import { documentOcr } from "../controller/document-ocr.controller.js";

router.post("/invoice", invoiceCheck);
router.post("/receipt", receiptCheck);
router.post("/ocr", documentOcr);

export default router