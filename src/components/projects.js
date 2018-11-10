import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import Img from "gatsby-image";
import classNames from "classnames";
import "./projects.css";
import projectList from "../data/projects.json";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedType: "front-end"
    };
  }

  render() {
    const projectImgs = this.props.projectImgs;
    return (
      <section id="experience" className="section projects">
        <h2 className="text-center">Experience</h2>
        <div className="section-content">
          <div className="project-list">
            {projectList.map((project, index) => {
              const singleCardClass = classNames("single-card", {
                hide: false
              });
              const image = projectImgs.find(n => {
                return n.node.relativePath === `projects/${project.img}`;
              });
              const imageSizes = image.node.childImageSharp.sizes;
              return (
                <div className={singleCardClass} key={index}>
                  <div className="card-img">
                    <Img
                      title={project.name}
                      alt="Screenshot of Project"
                      sizes={imageSizes}
                      className="card-img_src center-block"
                    />
                  </div>
                  <div className="blue-divider" />
                  <div className="card-info">
                    <h4 className="card-name">{project.name}</h4>

                    <p>
                      <span>
                        <strong>{project.duration}</strong>
                      </span>
                      <br />
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
