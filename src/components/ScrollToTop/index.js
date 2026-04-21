/**
 * =========================================================
 * SCROLL TO TOP BUTTON
 * =========================================================
 * Appears when user scrolls down
 */

import React, { Component } from "react";
import "./index.css";

class ScrollToTop extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.toggleVisibility);
  }

  toggleVisibility = () => {
    if (window.scrollY > 300) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  };

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div>
        {this.state.visible && (
          <button className="scroll-btn" onClick={this.scrollTop}>
            ↑
          </button>
        )}
      </div>
    );
  }
}

export default ScrollToTop;