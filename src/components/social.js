import PropTypes from "prop-types";
import React from "react";
import "./social.css";

const Social = ({ icon, to }) => (
  <a className="Social" href={to} target="_blank" rel="noopener noreferrer">
    <i className={icon} />
  </a>
);

Social.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default Social;
