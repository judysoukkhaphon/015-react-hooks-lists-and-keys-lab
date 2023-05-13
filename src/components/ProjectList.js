import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const proj  = projects.map((prop) =>{
    return <ProjectItem 
              key={prop.id} 
              name={prop.name} 
              about={prop.about} 
              technologies={prop.technologies} 
            />
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{proj}</div>
    </div>
  );
}

export default ProjectList;
