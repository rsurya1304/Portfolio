/**
 * =========================================================
 * CONTACT COMPONENT (PREMIUM VERSION)
 * =========================================================
 * Features:
 * - Centered layout
 * - Email (mailto)
 * - Phone (tel)
 * - WhatsApp direct chat
 * - Social links
 */

import React, { Component } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

import "./index.css";

class Contact extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;

    return (
      <section className={`contact ${theme}-theme`}>

        <div className="contact__container container">

          {/* ================= TITLE ================= */}
          <h2 className="contact__heading">
            Contact <span>Me</span>
          </h2>

          {/* ================= CONTACT CARDS ================= */}
          <div className="contact__cards">

            {/* EMAIL */}
            <a
              href="mailto:rasapothulasurya@gmail.com"
              className="contact__card"
            >
              <FaEnvelope />
              <p>Email</p>
              <span>rasapothulasurya@gmail.com</span>
            </a>

            {/* PHONE */}
            <a
              href="tel:9391959490"
              className="contact__card"
            >
              <FaPhone />
              <p>Call</p>
              <span>+91 9391959490</span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919391959490"
              target="_blank"
              rel="noreferrer"
              className="contact__card"
            >
              <FaWhatsapp />
              <p>WhatsApp</p>
              <span>Chat Now</span>
            </a>

          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="contact__socials">

            <a href="https://github.com/rsurya1304/" target="_blank" rel="noreferrer">
              <FaGithub size="30" />
            </a>

            <a href="https://linkedin.com/in/veera-venkata-suryanarayana-rasapothula-b77923383/" target="_blank" rel="noreferrer">
              <FaLinkedin size="30" />
            </a>

            <a href="https://instagram.com/surya_single_forever/" target="_blank" rel="noreferrer">
              <FaInstagram size="30" />
            </a>

          </div>

        </div>
      </section>
    );
  }
}

export default Contact;