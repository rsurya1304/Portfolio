/**
 * =========================================================
 * NAVBAR (PROFESSIONAL FINAL VERSION)
 * =========================================================
 */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";

import "./index.css";

class Navbar extends Component {
  static contextType = ThemeContext;

  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState(prev => ({
      isMenuOpen: !prev.isMenuOpen,
    }));
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { toggleTheme } = this.context;
    const { isMenuOpen } = this.state;

    return (
      <nav className="navbar">

        {/* LEFT: LOGO */}
        <div className="navbar__logo">
          
          <NavLink to="/" className="navbar__logo">
            <h1>RS</h1>
          </NavLink>
        </div>

        {/* RIGHT: MENU ICON (MOBILE) */}
        <div className="navbar__menu-icon" onClick={this.toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* RIGHT: NAV LINKS */}
        <ul className={`navbar__links ${isMenuOpen ? "active" : ""}`}>

          <li>
            <NavLink to="/" end onClick={this.closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={this.closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" onClick={this.closeMenu}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/resume" onClick={this.closeMenu}>
              Resume
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={this.closeMenu}>
              Contact
            </NavLink>
          </li>

          {/* TOGGLE */}
          <li>
            <div className="toggle-switch" onClick={toggleTheme}>
              <div className="switch-circle"></div>
            </div>
          </li>

        </ul>
      </nav>
    );
  }
}

export default Navbar;