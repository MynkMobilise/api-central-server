import express from "express";
const router = express.Router();

import { getAllIndexs,searchQueries } from "../controller/search.controller.js";

router.get("/all-indexes", getAllIndexs);
router.post("/queries", searchQueries);

export default router