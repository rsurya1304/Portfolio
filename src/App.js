/**
 * =========================================================
 * MAIN APPLICATION FILE (FINAL CLEAN VERSION)
 * =========================================================
 * Responsibilities:
 * - Routing
 * - Layout structure
 * - Persistent Navbar + Footer
 * - Scroll handling
 */

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

// Styles
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        {/* Scroll to top when route changes */}
        <ScrollToTop />

        {/* Navbar (always visible) */}
        <Navbar />

        {/* Main Content */}
        <div className="app-container">
          <Routes>

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Projects */}
            <Route path="/projects" element={<Projects />} />

            {/* Resume */}
            <Route path="/resume" element={<Resume />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>

        {/* Footer (always visible) */}
        <Footer />

      </BrowserRouter>
    );
  }
}

export default App;