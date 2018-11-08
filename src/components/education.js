import React from "react";
import "./education.css";
import educationList from "../data/education.json";

const Education = () => {
  return (
    <section id="education" className="section contact">
      <h2 className="text-center">CONTACT</h2>
      <div className="row text-center section-content">
        {educationList.map(education => (
          <div className="col-sm-2" key={education.url}>
            <a
              href={education.url}
              target="_blank"
              title={`External link to my ${education.name} account`}
              className="btn-social-icon"
              rel="noopener noreferrer"
            >
              <span
                className={`fa fa-${education.icon}`}
                alt={`External link to my ${education.name} account`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
