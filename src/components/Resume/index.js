import React from "react";
import "./index.css";

const Resume = () => {
  const resume =
    "https://drive.google.com/file/d/1fDJtJkGIYZFk8WR3vlVLQZ2e9AwtqTCp/view?usp=sharing";

  return (
    <section className="resume">

      <h1>Resume</h1>

      <p>
        Download or View my latest Resume.
      </p>

      <div className="resume-buttons">

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Resume
        </a>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn download"
        >
          Download Resume
        </a>

      </div>

    </section>
  );
};

export default Resume;