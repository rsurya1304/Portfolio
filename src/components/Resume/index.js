import React from "react";
import "./index.css";

const Resume = () => {

  const viewResume =
    "https://drive.google.com/file/d/1fDJtJkGIYZFk8WR3vlVLQZ2e9AwtqTCp/view?usp=sharing";

  const previewResume =
    "https://drive.google.com/file/d/1fDJtJkGIYZFk8WR3vlVLQZ2e9AwtqTCp/preview";

  return (
    <section className="resume">

      <div className="resume__download">

        <a
          href={viewResume}
          target="_blank"
          rel="noopener noreferrer"
        >
          ⬇ Download Resume
        </a>

        <a
          href={viewResume}
          target="_blank"
          rel="noopener noreferrer"
        >
          👁 Open in Google Drive
        </a>

      </div>

      <iframe
        src={previewResume}
        title="Resume"
        className="resume__frame"
      />

    </section>
  );
};

export default Resume;