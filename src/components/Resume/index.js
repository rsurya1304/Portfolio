import React from "react";
import "./index.css";

const Resume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1fDJtJkGIYZFk8WR3vlVLQZ2e9AwtqTCp/view?usp=sharing";

  const previewLink =
    "https://drive.google.com/file/d/1fDJtJkGIYZFk8WR3vlVLQZ2e9AwtqTCp/preview";

  return (
    <section className="resume-container">
      <h1 className="resume-title">My Resume</h1>

      <div className="resume-buttons">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          ⬇ Download Resume
        </a>

        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="view-btn"
        >
          👁 Open in Google Drive
        </a>
      </div>

      <iframe
        src={previewLink}
        title="Resume"
        className="resume-frame"
        allow="autoplay"
      />
    </section>
  );
};

export default Resume;