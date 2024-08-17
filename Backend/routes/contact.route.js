import express from "express";
import { saveCon } from "../controller/contact.controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});
router.post("/data", saveCon);

export default router;
