import React, { Component } from "react";
import "./index.css";

class ProjectCard extends Component {
  render() {
    const { name, description, image, github, live, islive } = this.props.data;

    return (
      <div className="project-card">

        {/* IMAGE */}
        <div className="project-card__image">
          <img src={image} alt={name} />
        </div>

        {/* CONTENT */}
        <div className="project-card__content">

          <h3 className="project-card__title">
            {name}
          </h3>

          <p className="project-card__desc">
            {description}
          </p>

          {/* BUTTONS */}
          <div className="project-card__buttons">

            {/* GITHUB BUTTON */}
            <a
              href={github || "#"}
              target="_blank"
              rel="noreferrer"
              className="btn github"
            >
              GitHub
            </a>

            {/* LIVE BUTTON (CONDITIONAL) */}
            {islive && live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="btn live"
              >
                Live
              </a>
            )}

          </div>

        </div>

      </div>
    );
  }
}

export default ProjectCard;