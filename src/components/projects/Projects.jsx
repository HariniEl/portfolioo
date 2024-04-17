import React from "react";
import "./projects.css";

const data = [
  {
    title: "Ticketing system for query resolving",
    github: "https://github.com.HariniEl/",
    demo: "https://ticketing-system-for-query.netlify.app/",
    description:
      "Zen Class Query Resolving Platform for mentor and student. A real time status update on query and real time chat feature.",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent</h5>
      <h2>Projects</h2>
      <div className="container">
        <div className=" project__container">
          {data.map(({ ticket, title, description }) => {
            return (
              <div className="project__ticket">
                
                <div className="project__description">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;