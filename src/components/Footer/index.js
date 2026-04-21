/**
 * =========================================================
 * FOOTER (TOP 1% PROFESSIONAL VERSION)
 * =========================================================
 * Features:
 * - Fixed bottom footer
 * - Social icons
 * - Clean layout (left + right sections)
 * - Theme support
 */

import React, { Component } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import "./index.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">

        {/* MAIN CONTAINER */}
        <div className="footer__container">

          {/* LEFT SIDE */}
          <div className="footer__left">
            <h2 className="footer__logo">RS</h2>
            <p className="footer__text">
              Java Full Stack Developer
            </p>
          </div>
          <p className="footer__copy">
              © 2026 Suryanarayana. All Rights Reserved.
            </p>
          {/* RIGHT SIDE */}
          <div className="footer__right">

            {/* SOCIAL ICONS */}
            <div className="footer__socials">

              <a
                href="https://github.com/rsurya1304"
                target="_blank"
                rel="noreferrer"
                className="footer__icon"
              >
                <FaGithub size="30" />
              </a>

              <a
                href="https://www.linkedin.com/in/veera-venkata-suryanarayana-rasapothula-b77923383/"
                target="_blank"
                rel="noreferrer"
                className="footer__icon"
              >
                <FaLinkedin size="30" />
              </a>

              <a
                href="https://www.instagram.com/surya_single_forever/"
                target="_blank"
                rel="noreferrer"
                className="footer__icon"
              >
                <FaInstagram size="30" />
              </a>

            </div>

            {/* COPYRIGHT */}
            

          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;