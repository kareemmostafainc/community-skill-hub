// ===============================================================
// Main Application Component
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import ChatUI from "./components/ChatUI";
import BadgeSystem from "./components/BadgeSystem";
import SkillMatch from "./components/SkillMatch";
import PostFeed from "./components/PostFeed";

// ===============================================================
// Application Layout
// ===============================================================

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Inter]">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<PostFeed />} />
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/match" element={<SkillMatch />} />
          <Route path="/chat" element={<ChatUI />} />
          <Route path="/badges" element={<BadgeSystem />} />
        </Routes>
      </div>
    </div>
  );
}

// ===============================================================
// Export Component
// ===============================================================
export default App;
