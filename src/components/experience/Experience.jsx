import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="experience" className="qualification section">
      <h5 className="section__subtitle">My Personel</h5>
      <h2 className="section__title">Experience</h2>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Web Developement (MERN)
                </h3>
                <span className="qualification__subtitle">Chennai - GUVI</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>
    
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">B.Tech Information Technology</h3>
                <span className="qualification__subtitle">
                  Arunai Enginerring College, Thiruvannamalai
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2016
                </div>
              </div>
            </div>

           
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className="qualification__subtitle">
                  John Dewey Matriculation hr Sec School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2010 - 2012
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Senior Customer Support Associate</h3>
                <span className="qualification__subtitle">
                  Chennai - First Source solutions.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;