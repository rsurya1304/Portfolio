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

              {/* ================= PROFESSIONAL INTRO ================= */}
              <p className="about__text">
                Hi everyone! I'm <span>Suryanarayana</span>, a passionate 
                <span> Java Full Stack Developer</span> from India with a strong 
                foundation in building scalable, efficient, and real-world web applications.
              </p>

              <p className="about__text">
                I specialize in backend development using 
                <span> Spring Boot, REST APIs, Hibernate, and JPA</span>, along with 
                creating dynamic and responsive user interfaces using 
                <span> React.js, JavaScript, HTML5, and CSS3</span>.
              </p>

              <p className="about__text">
                I have hands-on experience in 
                <span> API-driven development, database interaction (SQL), 
                and full-stack application architecture</span>, ensuring smooth 
                integration between frontend and backend systems.
              </p>

              <p className="about__text">
                My approach focuses on writing 
                <span> clean, maintainable, and optimized code</span> while 
                continuously improving my problem-solving abilities, debugging skills, 
                and system design knowledge.
              </p>

              <p className="about__text">
                I am actively seeking opportunities as a 
                <span> Fresher Java Full Stack Developer</span> where I can 
                contribute to impactful projects and grow into a highly skilled 
                software engineer.
              </p>

              {/* ================= INTERESTS (NEW SECTION) ================= */}
              <div className="about__hobbies">

                <p className="about__text">
                  Outside of coding, I enjoy engaging in activities that keep me 
                  creative, focused, and inspired. I like playing sports such as 
                  volleyball, traveling to new places, exploring different cultures, 
                  writing, and practicing meditation to maintain a balanced and 
                  productive lifestyle.
                </p>

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
                src="/profile.jpg"
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
              <span>IntelliJ IDEA</span>
              <span>Chrome DevTools</span>

            </div>

          </div>

        </div>
      </section>
    );
  }
}

export default About;