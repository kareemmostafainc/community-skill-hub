// ===============================================================
// Community Skill Hub - Server Entry Point
// Developed by Kareem Mostafa
// ===============================================================

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";

// Route Imports
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// ===============================================================
// Environment Configuration
// ===============================================================
dotenv.config();

// ===============================================================
// Database Connection
// ===============================================================
connectDB();

// ===============================================================
// Express App Initialization
// ===============================================================
const app = express();

// ===============================================================
// Middleware Configuration
// ===============================================================
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ===============================================================
// API Routes
// ===============================================================
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/match", matchRoutes);
app.use("/api/admin", adminRoutes);

// ===============================================================
// Base Route
// ===============================================================
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Community Skill Hub API",
    status: "Running",
  });
});

// ===============================================================
// Server Listener
// ===============================================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
