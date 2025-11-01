// ===============================================================
// Match Routes
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import express from "express";
import { findSkillMatches } from "../controllers/matchController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ===============================================================
// Protected Routes
// ===============================================================

// @route   GET /api/match
// @desc    Find users that match your learning and teaching skills
// @access  Private
router.get("/", protect, findSkillMatches);

// ===============================================================
// Export Router
// ===============================================================
export default router;
