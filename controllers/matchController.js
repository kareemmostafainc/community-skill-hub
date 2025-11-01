// ===============================================================
// Match Controller
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import asyncHandler from "express-async-handler";
import User from "../models/User.js";

// ===============================================================
// @desc    Find users that match your learning and teaching skills
// @route   GET /api/match
// @access  Private
// ===============================================================
export const findSkillMatches = asyncHandler(async (req, res) => {
  const currentUser = await User.findById(req.user._id);

  if (!currentUser) {
    res.status(404);
    throw new Error("User not found");
  }

  // ===============================================================
  // Algorithm Logic:
  // 1. Get users excluding the current user.
  // 2. Compare 'skills' and 'learningGoals' arrays.
  // 3. A match happens when:
  //    - The current user's skill is in another user's learningGoals
  //      AND
  //    - That user's skill is in the current user's learningGoals.
  // ===============================================================

  const allUsers = await User.find({ _id: { $ne: currentUser._id } });

  const matches = allUsers.filter((user) => {
    const teaches = user.skills || [];
    const learns = user.learningGoals || [];
    const mySkills = currentUser.skills || [];
    const myGoals = currentUser.learningGoals || [];

    const conditionA = mySkills.some((skill) =>
      learns.includes(skill.toLowerCase())
    );
    const conditionB = teaches.some((skill) =>
      myGoals.includes(skill.toLowerCase())
    );

    return conditionA && conditionB;
  });

  // ===============================================================
  // Return Matched Users
  // ===============================================================
  res.json({
    totalMatches: matches.length,
    matches: matches.map((u) => ({
      id: u._id,
      name: u.name,
      email: u.email,
      skills: u.skills,
      learningGoals: u.learningGoals,
    })),
  });
});
