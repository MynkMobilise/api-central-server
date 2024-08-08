import express from "express";
const router = express.Router();



import { getOrg,addOrg } from "../controller/org.controller.js";

router.get("/get_org", getOrg);
router.post("/add_org", addOrg);
router.get("/edit_org", addOrg);

export default router