import React from "react";
import "./index.css";

const Resume = () => {
  return (
    <section className="resume">
      {/* DOWNLOAD BUTTON */}
      <div className="resume__download">
        <a href="/resume.pdf" download>
          ⬇ Download Resume
        </a>
      </div>

      {/* PDF PREVIEW */}
      <iframe
        src="/resume.pdf"
        title="Resume"
        className="resume__frame"
      ></iframe>
    </section>
  );
};

export default Resume;
