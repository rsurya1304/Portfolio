/**
 * =========================================================
 * THEME CONTEXT (FINAL CLEAN VERSION)
 * =========================================================
 * - Controls Dark / Light mode
 * - Applies class to <body>
 * - No CSS here
 */

import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "dark",
    };
  }

  /**
   * Apply theme to BODY
   */
  applyTheme = (theme) => {
    const body = document.body;

    // Remove existing classes
    body.classList.remove("dark-theme");
    body.classList.remove("light-theme");

    // Add new class
    if (theme === "dark") {
      body.classList.add("dark-theme");
    } else {
      body.classList.add("light-theme");
    }
  };

  componentDidMount() {
    this.applyTheme(this.state.theme);
  }

  /**
   * Toggle theme
   */
  toggleTheme = () => {
    this.setState(
      (prevState) => ({
        theme: prevState.theme === "dark" ? "light" : "dark",
      }),
      () => {
        this.applyTheme(this.state.theme);
      }
    );
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeProvider };