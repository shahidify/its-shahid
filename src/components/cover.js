import React from "react";
import Scrollchor from "react-scrollchor";
import Img from "gatsby-image";
import logo from "../images/msk-avatar.jpg";
import "./cover.css";
import Social from "./social";

const Cover = ({ coverImg, avatarImg }) => (
  <div id="#top" className="cover animated">
    <Img
      title="Cover image"
      alt="Cover Image for Shahid"
      sizes={coverImg.sizes}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }}
    />

    <div className="center">
      <div>
        <a href="#" className="image avatar">
          <img src={logo} alt="" style={{ borderRadius: `50%` }} />
        </a>
      </div>
      <span className="greetings">I am</span>
      <h1 style={{ color: "#00bcd4" }}>
        Mohammed Shahid
        <strong> Khan</strong>
      </h1>
      <h4 className="greetings">
        Senior Software Engineer | Full stack | Front end Developer
      </h4>
      <br /> <br />
      <Social icon="fa fa-github fa-3x" to="https://github.com/shahidify/" />
      <Social
        icon="fa fa-linkedin fa-3x"
        to="https://www.linkedin.com/in/mohammed-shahid-khan/"
      />
      <Social icon="fa fa-codepen fa-3x" to="https://codepen.io/shahidify/" />
      <Social icon="fa fa-twitter fa-3x" to="https://twitter.com/shahidify/" />
    </div>
    <div className="arrow animated bounceInDown">
      <Scrollchor to="#about" className="btn" animate={{ duration: 500 }}>
        <i className="fa fa-chevron-down" />
      </Scrollchor>
    </div>
  </div>
);

export default Cover;
