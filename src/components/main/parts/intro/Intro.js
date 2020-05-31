import React from "react";
import { Link } from "react-scroll";
import "./Intro.css";

export const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-bg"></div>
      <div className="intro-text">
        <h1>Hire us and gain profit to your business</h1>
        <p>
          After 2017, almost 250 companies started using
          our service.
        </p>
        <div className="intro-buttons">
          <button className="primary-button">GET STARTED</button>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="secondary-button">CONTACT US</button>
          </Link>
        </div>
      </div>
      <div className="intro-img">
        <img src={require("./Icons/intro.png")} alt="intro" />
      </div>
    </div>
  );
};
