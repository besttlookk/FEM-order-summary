import React from "react";
import musicIcon from "../images/icon-music.svg";

const Summary = () => {
  return (
    <div className="summary">
      <div className="summary__image-container">
        <img alt="albumb logo" src={musicIcon} className="summary__image" />
      </div>
      <div className="summary__main">
        <h4>Annual Plan</h4>
        <p>$59.99/year</p>
      </div>
      <div className="summary__link">
        <a href="/">Change</a>
      </div>
    </div>
  );
};

export default Summary;
