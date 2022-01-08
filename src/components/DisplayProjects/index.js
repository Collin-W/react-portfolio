import React from "react";

function DisplayProjects({ projectsArray }) {
  return (
    <>
      {projectsArray.map((project) => {
        return (
          <section>
            <h1> {project.name} </h1>
            <a href={project.link}>
              <img src={project.image} key={project.name} alt={project.name} />
            </a>
            <p> {project.description} </p>
          </section>
        );
      })}
    </>
  );
}

export default DisplayProjects;
