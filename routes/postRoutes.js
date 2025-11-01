// ===============================================================
// Post Routes
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  addComment,
} from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ===============================================================
// Public Routes
// ===============================================================

// @route   GET /api/posts
// @desc    Get all posts
// @access  Public
router.get("/", getAllPosts);

// @route   GET /api/posts/:id
// @desc    Get a single post by ID
// @access  Public
router.get("/:id", getPostById);

// ===============================================================
// Protected Routes
// ===============================================================

// @route   POST /api/posts
// @desc    Create a new post
// @access  Private
router.post("/", protect, createPost);

// @route   DELETE /api/posts/:id
// @desc    Delete post by ID
// @access  Private
router.delete("/:id", protect, deletePost);

// @route   POST /api/posts/:id/comments
// @desc    Add comment to a post
// @access  Private
router.post("/:id/comments", protect, addComment);

// ===============================================================
// Export Router
// ===============================================================
export default router;
