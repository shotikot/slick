import React from "react";
import { Navigation } from "../navigation/Navigation";
import { Intro } from "./parts/intro/Intro";
import { Element } from 'react-scroll';
import { Pricing } from "./parts/pricing/Pricing";
import { Contact } from "./parts/contact/Contact";
import { Team } from "./parts/team/Team";
import { Footer } from "./parts/footer/Footer";
import Overview from "./parts/overview/Overview";

const Main = () => {
  return (
    <div className="main-page-container">
      <Navigation />
      <Element name="Home">
        <Intro />
      </Element>
      <Element name="About">
        <Overview />
      </Element>
      <Element name="Pricing">
        <Pricing/>
      </Element>
      <Element name="Team">
        <Team/>
      </Element>
      <Element name="Contact">
        <Contact/>
      </Element>
      <Footer/>
    </div>
  );
};

export default Main;
