// ===============================================================
// Database Connection Configuration
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import mongoose from "mongoose";

// ===============================================================
// Database Connection Function
// ===============================================================
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Failed: ${error.message}`);
    process.exit(1); // Exit process if connection fails
  }
};

// ===============================================================
// Export Function
// ===============================================================
export default connectDB;
