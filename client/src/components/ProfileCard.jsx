// ===============================================================
// Profile Card Component
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import React, { useEffect, useState } from "react";
import axios from "axios";

// ===============================================================
// Profile Card UI
// ===============================================================

function ProfileCard() {
  const [user, setUser] = useState(null);

  // ---------------------------------------------------------------
  // Fetch User Data
  // ---------------------------------------------------------------
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/users/profile", {
          headers: { Authorization: "Bearer token-placeholder" },
        });
        setUser(data);
      } catch (error) {
        console.error("Failed to load profile:", error.message);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[70vh] text-gray-500">
        Loading profile...
      </div>
    );
  }

  // ---------------------------------------------------------------
  // Render User Profile Card
  // ---------------------------------------------------------------
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-8 border border-gray-200">
      <div className="flex items-center space-x-6">
        {/* Profile Image */}
        <img
          src={user.avatar || "https://via.placeholder.com/120"}
          alt="Profile"
          className="w-28 h-28 rounded-full border-2 border-indigo-500 object-cover"
        />

        {/* User Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            {user.name}
          </h2>
          <p className="text-gray-600 text-sm">{user.email}</p>

          <div className="mt-4">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mr-2">
              {user.role === "admin" ? "Administrator" : "Member"}
            </span>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Skills You Can Teach
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {user.skillsTeach.length > 0 ? (
              user.skillsTeach.map((skill, i) => <li key={i}>{skill}</li>)
            ) : (
              <li className="text-gray-400">No skills listed</li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Skills You Want to Learn
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {user.skillsLearn.length > 0 ? (
              user.skillsLearn.map((skill, i) => <li key={i}>{skill}</li>)
            ) : (
              <li className="text-gray-400">No skills listed</li>
            )}
          </ul>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          About
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {user.bio || "No bio provided yet."}
        </p>
      </div>
    </div>
  );
}

// ===============================================================
// Export Component
// ===============================================================
export default ProfileCard;
