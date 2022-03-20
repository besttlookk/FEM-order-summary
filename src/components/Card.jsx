import React from "react";
import Button from "./Button";
import Summary from "./Summary";
import heroImg from "../images/illustration-hero.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img alt="card illustration" src={heroImg} className="card__image" />
      </div>
      <div className="card__main">
        <h2>Order Summary </h2>
        <p>
          {" "}
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div>
          <Summary />
        </div>

        <div>
          <Button />
        </div>

        <div className="card__link">
          <a href="/">Cancel Order</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
