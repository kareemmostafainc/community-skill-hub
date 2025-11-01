// ===============================================================
// Navbar Component
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import React from "react";
import { Link, useLocation } from "react-router-dom";

// ===============================================================
// Navigation Bar
// ===============================================================

function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Match", path: "/match" },
    { name: "Chat", path: "/chat" },
    { name: "Badges", path: "/badges" },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 tracking-tight"
        >
          Community Skill Hub
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ===============================================================
// Export Component
// ===============================================================
export default Navbar;
