import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navigation.css";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (document.documentElement.scrollTop >= 100) {
        if (!scrolled) {
          setScrolled(true);
        }
      } else {
        if (scrolled) {
          setScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [scrolled]);
  const [out, setOut] = useState(false);
  const items = ["Home", "About", "Pricing", "Team", "Contact"];
  return (
    <div className={`nav-container ${scrolled ? "scrolled-nav" : ""}`}>
      <div className="nav-bg"></div>
      <div
        className="nav-img-container"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <img src={require("./Icons/logo.png")} alt="slick" />
      </div>
      <div className="nav-ul-button" onClick={() => setOut(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`nav-ul-container ${out ? "nav-out" : ""}`}>
        <img
          src={require("./Icons/x.svg")}
          alt="x"
          className="exit"
          onClick={() => setOut(false)}
        />
        <ul>
          {items.map((item, i) => (
            <Link
              to={item}
              onClick={() => setOut(false)}
              activeClass="active-li"
              spy={true}
              smooth={true}
              duration={500}
              offset={item !== "Contact" ? -50 : -50}
              key={i}
            >
              <li>{item}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
