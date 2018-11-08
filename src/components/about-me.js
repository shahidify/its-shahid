import React from "react";
import "./about-me.css";
import Img from "gatsby-image";

const AboutMe = ({ profileImg }) => {
  return (
    <article>
      <section id="about" className="section">
        <h2 className="text-center">ABOUT ME</h2>
        <div className="section-content">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-4 offset-md-0 col-lg-4 offset-lg-1 ">
              <Img
                title="Profile image"
                alt="Shahid Profile image"
                sizes={profileImg.sizes}
                className="img-responsive center-block"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <p>
                I am a Full Stack Senior Software Engineer from Austin, TX. I
                have over 12 years of total IT experience in enterprise web
                application and portal development. Adept in frontend and
                backend technologies that includes <u>JavaScript</u>, <u>ES6</u>
                ,<u>HTML5/CSS</u>,<u>Node.js</u>, <u>Ruby On Rails</u> and Java.
                Experience working with various JavaScript frameworks like
                React.js, Backbone, Google Polymer, Angular 1.x and Node.js;
                well versed with End to End Software development in an Agile
                environment
              </p>

              <p>
                <strong>When I am not working or learning </strong>, I &hearts;
                to spend time with my 8 years old daughter and my wife, playing
                football (Soccer) on my Xbox is my favorite night-out activity.
                My typical weekend includes watching Manchester United and
                Oklahoma Sooners play.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="section">
        <h2 className="text-center">Skills</h2>
        <div className="section-content">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="box">
                <h5>Front end Technologies</h5>
                <p>
                  <span className="skillset">Javascript</span>
                  <span className="skillset">HTML5</span>
                  <span className="skillset">CSS3</span> <br />
                  <span className="skillset">React.js</span>
                  <span className="skillset">Backbone</span>
                  <span className="skillset">Polymer</span>
                  <span className="skillset">Angular 1.x</span>
                  <span className="skillset">Bootstrap</span>
                  <br />
                  <span className="skillset">Material Design</span>
                  <span className="skillset">D3.js</span>
                  <br />
                  <span className="skillset">HighCharts</span>
                  <span className="skillset">GoogleCharts</span>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-6 ">
              <div className="box">
                <h5>Backend Technologies</h5>
                <p>
                  Node.js, Express, Ruby on Rails, Java <br />
                  MySQL, MongoDB, Firebase, PostGresql <br />
                  GraphQL, Next.js
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-6 ">
              <div className="box">
                <h5>Tooling</h5>
                <p>
                  Git, GitHub, Webpack, Grunt, Browserify <br />
                  TDD using Chai, Jasmine, Mocha <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AboutMe;
