// ===============================================================
// Admin Routes
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import express from "express";
import {
  getAllReports,
  updateReportStatus,
  deleteUserAccount,
  getAllUsersAdmin,
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// ===============================================================
// Protected Admin Routes
// ===============================================================

// @route   GET /api/admin/reports
// @desc    Get all user reports
// @access  Private/Admin
router.get("/reports", protect, adminOnly, getAllReports);

// @route   PUT /api/admin/reports/:id
// @desc    Update status of a specific report
// @access  Private/Admin
router.put("/reports/:id", protect, adminOnly, updateReportStatus);

// @route   DELETE /api/admin/users/:id
// @desc    Delete user account by Admin
// @access  Private/Admin
router.delete("/users/:id", protect, adminOnly, deleteUserAccount);

// @route   GET /api/admin/users
// @desc    Get list of all users
// @access  Private/Admin
router.get("/users", protect, adminOnly, getAllUsersAdmin);

// ===============================================================
// Export Router
// ===============================================================
export default router;
