import React from "react";
import "./education.css";
import educationList from "../data/education.json";

const Education = () => {
  return (
    <section id="education" className="section contact section-odd">
      <h2 className="text-center">EDUCATION</h2>
      <div className="row text-center  edu-card">
        {educationList.map((education, index) => (
          <div className="single-card" key={index}>
            <div className="card-img edu-card-top">
              <center>
                <span className="fa fa-graduation-cap fa-5x center-block" />
              </center>
            </div>
            <div className="blue-divider" />
            <div className="card-info">
              <h4 className="card-name">{education.course}</h4>
              <p>
                <span>
                  <strong>{education.institute}</strong>
                </span>
                <br />
                {education.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
