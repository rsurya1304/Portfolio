import React, { Component } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";

import "./index.css";

class About extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;

    return (
      <section className={`about ${theme}-theme`}>

        <div className="about__container container">

          {/* ================= INTRO SECTION ================= */}
          <div className="about__top">

            {/* LEFT CONTENT */}
            <motion.div
              className="about__content"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="about__title">
                Know Who <span>I'M</span>
              </h2>

              {/* INTRO */}
              <p className="about__text">
                Hi, I'm <span>Suryanarayana</span> — a passionate 
                <span> Java Full Stack Developer</span> focused on building scalable, 
                high-performance web applications.
              </p>

              {/* HIGHLIGHTS */}
              <ul className="about__list">
                <li>
                  💻 Developed <span>3+ real-world projects</span> including 
                  E-commerce and Job Platforms.
                </li>
                <li>
                  ⚙️ Strong in <span>Java, Spring Boot, Hibernate, JPA </span> 
                  for backend development.
                </li>
                <li>
                  🎨 Skilled in <span>React.js, JavaScript, HTML5, CSS3 </span> 
                  for building responsive UI.
                </li>
                <li>
                  🔗 Experience in <span>RESTful APIs & full-stack architecture</span>.
                </li>
                <li>
                  🧠 Solved <span>100+ problems</span> on LeetCode & HackerRank.
                </li>
                <li>
                  🚀 Focus on <span>clean code, performance, and scalability</span>.
                </li>
              </ul>

              {/* CAREER GOAL */}
              <p className="about__text">
                I am actively seeking opportunities as a 
                <span> Fresher Java Full Stack Developer</span> to contribute 
                to impactful projects and grow into a highly skilled engineer.
              </p>

              {/* HOBBIES */}
              <div className="about__hobbies">
                <p className="about__text">
                  <span>Beyond Coding:</span>
                </p>

                <ul className="about__list">
                  <li>🏐 Playing Volleyball</li>
                  <li>🧘 Practicing Meditation for focus & discipline</li>
                  <li>💡 Problem solving on LeetCode & HackerRank</li>
                </ul>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="about__image"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-professional-web-developer-3d-illustration-png-image_13322701.png"
                alt="Suryanarayana"
              />
            </motion.div>

          </div>

          {/* ================= SKILLS ================= */}
          <div className="about__skills-section">

            <h2 className="about__section-title">
              Professional <span>Skillset</span>
            </h2>

            <div className="about__skills">

              <span>Java</span>
               <span>Python</span>
              <span>JavaScript</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>SQL</span>
              <span>Hibernate</span>
              <span>JPA</span>
              <span>REST APIs</span>
              <span>Git</span>

            </div>

          </div>

          {/* ================= TOOLS ================= */}
          <div className="about__tools-section">

            <h2 className="about__section-title">
              Tools <span>I Use</span>
            </h2>

            <div className="about__tools">

              <span>VS Code</span>
              <span>Postman</span>
              <span>GitHub</span>
              <span>Chrome DevTools</span>

            </div>

          </div>

        </div>
      </section>
    );
  }
}

export default About;