// ===============================================================
// Admin Controller
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import Report from "../models/Report.js";

// ===============================================================
// @desc    Get all reports
// @route   GET /api/admin/reports
// @access  Private/Admin
// ===============================================================
export const getAllReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({})
    .populate("reporter", "name email")
    .populate("reportedUser", "name email")
    .populate("reportedPost", "content");

  res.json(reports);
});

// ===============================================================
// @desc    Update report status
// @route   PUT /api/admin/reports/:id
// @access  Private/Admin
// ===============================================================
export const updateReportStatus = asyncHandler(async (req, res) => {
  const report = await Report.findById(req.params.id);

  if (!report) {
    res.status(404);
    throw new Error("Report not found");
  }

  report.status = req.body.status || report.status;
  await report.save();

  res.json({ message: "Report status updated successfully", report });
});

// ===============================================================
// @desc    Delete user account by Admin
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
// ===============================================================
export const deleteUserAccount = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.deleteOne();
  res.json({ message: "User account deleted successfully" });
});

// ===============================================================
// @desc    Get all users (Admin overview)
// @route   GET /api/admin/users
// @access  Private/Admin
// ===============================================================
export const getAllUsersAdmin = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password");
  res.json({ totalUsers: users.length, users });
});
