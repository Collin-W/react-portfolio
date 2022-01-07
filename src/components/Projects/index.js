import React from "react";
// might needs to create the project array before I make this component 
function DisplayProjects(project){

return (
    <section>
        <h1> {project.name} </h1>
        <a>
            {project.link}
        <img src={project.image}/>
        </a>
        <p> {project.description} </p>
    </section>
)}

export default DisplayProjects;