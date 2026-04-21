import React, { Component } from "react";
import projectsData from "../../data/projectsData";
import ProjectCard from "../ProjectCard";

import "./index.css";

class Projects extends Component {
  state = {
    activeFilter: "all",
  };

  setFilter = (type) => {
    this.setState({ activeFilter: type });
  };

  render() {
    const { activeFilter } = this.state;

    const filteredProjects =
      activeFilter === "all"
        ? projectsData
        : projectsData.filter(
            project => project.category === activeFilter
          );

    return (
      <section className="projects">

        <div className="projects__container">

          {/* TITLE */}
          <h2 className="projects__title">
            MY <span>PROJECTS</span>
          </h2>

          {/* FILTER BUTTONS */}
          <div className="projects__filters">

            {["ALL", "FRONTEND", "BACKEND", "FULLSTACK"].map(type => (
              <button
                key={type}
                className={
                  activeFilter === type.toLowerCase()
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => this.setFilter(type.toLowerCase())}
              >
                {type}
              </button>
            ))}

          </div>

          {/* GRID */}
          <div className="projects__grid">

            {filteredProjects.map(project => (
              <ProjectCard key={project.id} data={project} />
            ))}

          </div>

        </div>
      </section>
    );
  }
}

export default Projects;