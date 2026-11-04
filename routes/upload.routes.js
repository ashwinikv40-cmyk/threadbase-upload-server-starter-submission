
import express from "express";
import { verifyToken } from "../middleware/auth.js";
import upload from "../config/upload.js";

const router = express.Router();

router.post(
  "/upload",
  verifyToken,
  upload.single("avatar"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded"
      });
    }

    res.status(201).json({
      url: `/uploads/${req.file.filename}`
    });
  }
);

export default router;
