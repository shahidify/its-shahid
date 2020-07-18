import React from 'react';
import './about-me.css';
import Img from 'gatsby-image';

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
                have over 14 years of software development experience, mostly
                developing enterprise web application. I love working on
                Frontend technologies that includes <u>JavaScript</u>,
                <u>HTML5/CSS</u>, <u>React</u>, <u>Redux</u>, <u>Material UI</u>{' '}
                to name a few. I also have experience working with back-end
                technologies like Ruby on Rails, Node.js and Java. (Java is not
                my love but I have vast experience in Java in the past. 😀) well
                versed with End to End Software development in an Agile
                environment
              </p>

              <p>
                <strong>When I am not working or learning </strong>, I &hearts;
                spending time with my one year old baby girl and my 10 years
                "big" girl. Playing football (Soccer) on my Xbox is my favorite
                weekend night activity. My typical weekend includes watching
                Manchester United and Oklahoma Sooners play.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="section section-odd">
        <h2 className="text-center">Skills</h2>
        <div className="section-content">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="box">
                <h5>Front end Technologies</h5>
                <p>
                  <span className="skillset special">Javascript</span>
                  <span className="skillset">HTML5</span>
                  <span className="skillset">CSS3</span> <br />
                  <span className="skillset special">React.js</span>
                  <span className="skillset">Backbone</span>
                  <span className="skillset special">Polymer</span>
                  <span className="skillset">Angular 1.x</span>
                  <span className="skillset special">Bootstrap</span>
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
                <span className="skillset special">Node.js</span>
                <span className="skillset">Express</span>
                <span className="skillset special">Ruby on Rails</span> <br />
                <span className="skillset">Java</span>
                <span className="skillset special">MySQL</span>
                <span className="skillset special">MongoDB</span>
                <span className="skillset">Firebase</span>
                <span className="skillset">PostGresql</span> <br />
                <span className="skillset special">GraphQL</span>
                <span className="skillset">Next.js</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-6 ">
              <div className="box">
                <h5>Tooling</h5>
                <span className="skillset">Git/GitHub</span>
                <span className="skillset">Grunt</span>
                <span className="skillset">Browserify</span>
                <span className="skillset">Webpack</span> <br />
                <span className="skillset">TDD</span>
                <span className="skillset">Chai</span>
                <span className="skillset">Jasmine</span>
                <span className="skillset">Mocha</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AboutMe;
