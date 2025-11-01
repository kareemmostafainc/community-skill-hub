// ===============================================================
// User Routes
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ===============================================================
// Public Routes
// ===============================================================

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public
router.post("/register", registerUser);

// @route   POST /api/users/login
// @desc    Login user and get token
// @access  Public
router.post("/login", loginUser);

// ===============================================================
// Protected Routes
// ===============================================================

// @route   GET /api/users/profile
// @desc    Get logged-in user profile
// @access  Private
router.get("/profile", protect, getUserProfile);

// @route   PUT /api/users/profile
// @desc    Update user profile information
// @access  Private
router.put("/profile", protect, updateUserProfile);

// @route   GET /api/users
// @desc    Get all users (Admin Access Only)
// @access  Private/Admin
router.get("/", protect, getAllUsers);

// ===============================================================
// Export Router
// ===============================================================
export default router;
