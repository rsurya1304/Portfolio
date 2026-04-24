import React, { Component } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import "./index.css";

class Home extends Component {
  state = {
    roleText: "",
    roles: [
      "Java Full Stack Developer",
      "Spring Boot Developer",
      "React Developer",
      "Frontend Developer",
      "Python Developer",
      "Backend Engineer"
    ],
    roleIndex: 0,
    charIndex: 0,
    isDeleting: false,
  };

  componentDidMount() {
    this.handleTyping();
  }

  /**
   * Typing + Deleting animation for ROLE
   */
  handleTyping = () => {
    const { roles, roleIndex, charIndex, isDeleting } = this.state;

    const currentRole = roles[roleIndex];

    if (!isDeleting && charIndex < currentRole.length) {
      // Typing
      this.setState(prev => ({
        roleText: currentRole.substring(0, prev.charIndex + 1),
        charIndex: prev.charIndex + 1,
      }));

      setTimeout(this.handleTyping, 80);

    } else if (isDeleting && charIndex > 0) {
      // Deleting
      this.setState(prev => ({
        roleText: currentRole.substring(0, prev.charIndex - 1),
        charIndex: prev.charIndex - 1,
      }));

      setTimeout(this.handleTyping, 40);

    } else {
      // Switch role
      this.setState(prev => ({
        isDeleting: !prev.isDeleting,
        roleIndex: !prev.isDeleting
          ? prev.roleIndex
          : (prev.roleIndex + 1) % roles.length,
      }));

      setTimeout(this.handleTyping, 1000);
    }
  };

  render() {
    const { roleText } = this.state;

    return (
      <div className="home">

        {/* ================= HERO ================= */}
        <div className="home__hero">

          {/* LEFT */}
          <motion.div
            className="home__left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="home__hello">
              Hi There! <span className="wave">👋</span>
            </h2>

            {/* STATIC NAME */}
            <h1 className="home__name">
              I'M{" "}
              <span className="highlight">
                Rasapothula Veera Venkata Suryanarayana
              </span>
            </h1>

            {/* ANIMATED ROLE */}
            <h3 className="home__role">
              {roleText}
              <span className="cursor">|</span>
            </h3>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="home__right"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <div className="profile">
              <img
                
                src="https://res.cloudinary.com/dxrmojtj4/image/upload/fl_preserve_transparency/v1776783291/Surya_Photo_rghabh.jpg?_s=public-apps"
                alt="profile"
                className="profile__img"
              />
            </div> 
            

          </motion.div>

        </div>

        {/* ================= ABOUT ================= */}
        <div className="home__about">

          <div className="home__about-left">

            <h2 className="home__about-title">
              ABOUT <span className="highlight">ME</span>
            </h2>

            <p className="home__about-text">
              I am a passionate and detail-oriented 
              <span className="highlight"> Java Full Stack Developer </span> 
              with hands-on experience in building scalable applications.
            </p>

            <p className="home__about-text">
              I specialize in 
              <span className="highlight"> Spring Boot, REST APIs, Hibernate, JPA </span> 
              and frontend technologies like 
              <span className="highlight"> React.js, JavaScript, HTML5, CSS3</span>.
            </p>

            <p className="home__about-text">
              I focus on writing clean, efficient, and maintainable code 
              while improving my problem-solving and system design skills.
            </p>

          </div>

          <div className="home__about-right">
            <img
              src="https://miro.medium.com/v2/resize:fit:720/1*hrb7JS8oL6yL-PLhP0U6tg.jpeg"
              alt="coding"
              className="home__hero-img"
            />
          </div>

        </div>

        {/* ================= SOCIAL ================= */}
        <div className="home__social">

          <h2>Connect With Me</h2>
          <p>Open to opportunities and collaborations</p>

          <div className="home__icons">

            <a href="https://github.com/rsurya1304" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
      
            <a href="https://linkedin.com/in/veera-venkata-suryanarayana-rasapothula-b77923383/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://instagram.com/surya_single_forever/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>
    );
  }
}

export default Home;