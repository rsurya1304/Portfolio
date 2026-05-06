import React from "react";
import "./index.css";

const Resume = () => {
  return (
    <section className="resume">

      {/* DOWNLOAD BUTTON */}
      <div className="resume__download">
        <a
          href="https://drive.google.com/uc?export=download&id=1cZWdSIJznHkk2ieXkyqx08OLxadlsNZ3"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⬇ Download Resume
        </a>
      </div>

      {/* PDF PREVIEW */}
      <iframe
        src="https://drive.google.com/file/d/156C7pDcbe3KyYervmR5TFiPQmvzIJkjx/preview"
        title="Resume"
        className="resume__frame"
      ></iframe>

    </section>
  );
};

export default Resume;