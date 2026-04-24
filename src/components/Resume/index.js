import React from "react";
import "./index.css";

const Resume = () => {
  return (
    <section className="resume">

      {/* ✅ DOWNLOAD BUTTON (TOP) */}
      <div className="resume__download">
        <a
          href="https://drive.google.com/uc?export=download&id=1cZWdSIJznHkk2ieXkyqx08OLxadlsNZ3"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          ⬇ Download Resume
        </a>
      </div>

      {/* ✅ PDF PREVIEW */}
      <iframe
        src="https://drive.google.com/file/d/1cZWdSIJznHkk2ieXkyqx08OLxadlsNZ3/preview"
        title="Resume"
        className="resume__frame"
      ></iframe>

    </section>
  );
};

export default Resume;