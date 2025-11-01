// ===============================================================
// Post Model
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import mongoose from "mongoose";

// ===============================================================
// Comment Sub-Schema
// ===============================================================
const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: [true, "Comment text is required"],
      trim: true,
      maxlength: 300,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: false,
  }
);

// ===============================================================
// Post Schema Definition
// ===============================================================
const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: [true, "Post title is required"],
      trim: true,
      maxlength: 100,
    },

    content: {
      type: String,
      required: [true, "Post content is required"],
      trim: true,
      maxlength: 2000,
    },

    comments: [commentSchema],

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    tags: {
      type: [String],
      default: [],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// ===============================================================
// Model Export
// ===============================================================
const Post = mongoose.model("Post", postSchema);
export default Post;
