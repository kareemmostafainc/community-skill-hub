// ===============================================================
// Entry Point - React Frontend
// Community Skill Hub
// Developed by Kareem Mostafa
// ===============================================================

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ===============================================================
// Render Application
// ===============================================================
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// ===============================================================
// End of File
// ===============================================================
