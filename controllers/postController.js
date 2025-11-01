// ===============================================================
// Post Controller
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import asyncHandler from "express-async-handler";
import Post from "../models/Post.js";
import User from "../models/User.js";

// ===============================================================
// @desc    Create a new post
// @route   POST /api/posts
// @access  Private
// ===============================================================
export const createPost = asyncHandler(async (req, res) => {
  const { content } = req.body;

  if (!content) {
    res.status(400);
    throw new Error("Post content is required");
  }

  const post = await Post.create({
    user: req.user._id,
    content,
  });

  res.status(201).json(post);
});

// ===============================================================
// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
// ===============================================================
export const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  res.json(posts);
});

// ===============================================================
// @desc    Get post by ID
// @route   GET /api/posts/:id
// @access  Public
// ===============================================================
export const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id).populate("user", "name email");

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// ===============================================================
// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
// ===============================================================
export const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    if (post.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Not authorized to delete this post");
    }

    await post.deleteOne();
    res.json({ message: "Post removed successfully" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// ===============================================================
// @desc    Add a comment to a post
// @route   POST /api/posts/:id/comments
// @access  Private
// ===============================================================
export const addComment = asyncHandler(async (req, res) => {
  const { text } = req.body;
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  const comment = {
    user: req.user._id,
    text,
    createdAt: new Date(),
  };

  post.comments.push(comment);
  await post.save();

  res.status(201).json({ message: "Comment added successfully", post });
});
