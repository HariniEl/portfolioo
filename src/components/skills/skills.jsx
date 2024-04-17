import React from "react";
import "./skills.css";
import HTML from "../../assets/images/html.png";
import CSS from "../../assets/images/css.png";
import JS from "../../assets/images/js.png";
import REACT from "../../assets/images/react.png";
import REDUX from "../../assets/images/redux.png";
import MONGO from "../../assets/images/mongodb.png";
import NODE from "../../assets/images/nodejs.png";
import EXPRESS from "../../assets/images/express.svg";
const skData = [
  {
    id: 1,
    image: HTML,
    title: "HTML",
  },
  {
    id: 2,
    image: CSS,
    title: "CSS",
  },
  {
    id: 3,
    image: JS,
    title: "Java Script",
  },
  
  {
    id: 4,
    image: REACT,
    title: "React Js",
  },
  {
    id: 5,
    image: REDUX,
    title: "Redux",
  },
  {
    id: 6,
    image: MONGO,
    title: "Mongo DB",
  },
  {
    id: 7,
    image: NODE,
    title: "Node JS",
  },
  {
    id: 8,
    image: EXPRESS,
    title: "Express",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <h5>Here comes my key</h5>
      <h2>Skills</h2>

      <div className="skills-container">
        {skData.map(({ image, title }) => {
          return (
            <div className="skills__card">
              <div className="skills__img">
                <img src={image} alt="Card Image 1" className="skills__image" />
              </div>
              <div className="skills__name">
                <p className="skills__title">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;