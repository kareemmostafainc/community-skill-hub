// ===============================================================
// User Model
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// ===============================================================
// User Schema Definition
// ===============================================================
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },

    bio: {
      type: String,
      trim: true,
      maxlength: 200,
      default: "",
    },

    skills: {
      type: [String],
      default: [],
    },

    learningInterests: {
      type: [String],
      default: [],
    },

    badges: {
      type: [String],
      default: [],
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
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
// Password Hash Middleware
// ===============================================================
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ===============================================================
// Password Verification Method
// ===============================================================
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ===============================================================
// Model Export
// ===============================================================
const User = mongoose.model("User", userSchema);
export default User;
