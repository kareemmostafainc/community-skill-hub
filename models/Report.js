// ===============================================================
// Report Model
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import mongoose from "mongoose";

// ===============================================================
// Report Schema Definition
// ===============================================================
const reportSchema = new mongoose.Schema(
  {
    reporter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    reportedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    reportedPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },

    reason: {
      type: String,
      required: [true, "Report reason is required"],
      enum: [
        "Spam",
        "Inappropriate Content",
        "Harassment",
        "Fake Information",
        "Other",
      ],
    },

    details: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Action Taken"],
      default: "Pending",
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
const Report = mongoose.model("Report", reportSchema);
export default Report;
