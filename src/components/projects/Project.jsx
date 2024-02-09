import React from "react";
import "./project.css";
import ProjectCart from "../projectCart/ProjectCart";
import project1 from "../../images/projet1.png";
function Project() {
  return (
    <div className="project">
      <h1>Read about how we worked with these companies on their projects.</h1>
      <div>
        <ProjectCart title="The Mentoring Club" image={project1} />
        <ProjectCart title="The Mentoring Club" image={project1} />
        <ProjectCart title="The Mentoring Club" image={project1} />
        <ProjectCart title="The Mentoring Club" image={project1} />
        <ProjectCart title="The Mentoring Club" image={project1} />
        <ProjectCart title="The Mentoring Club" image={project1} />
      </div>
    </div>
  );
}

export default Project;
