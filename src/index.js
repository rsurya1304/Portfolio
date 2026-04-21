/**
 * ============================================
 * ROOT ENTRY FILE (PRODUCTION LEVEL)
 * ============================================
 * Responsibilities:
 * 1. Connect React App to DOM
 * 2. Wrap App with Context Providers
 * 3. Apply Global Styles
 */

import React from "react";
import ReactDOM from "react-dom/client";

// Import main App component
import App from "./App";

// Import global styles
import "./index.css";

// Import Theme Context Provider
import { ThemeProvider } from "./context/ThemeContext";

// Create root (React 18 standard)
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Render Application
 * - ThemeProvider wraps entire app
 * - Enables global theme control
 */
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);