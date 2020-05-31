import React from "react";
import { OverItem } from "./OverItem";
import "./Overview.css";

const Overview = () => {
  const items = [
    {
      logo: require("./Icons/blockchain.svg"),
      title: "Fastest exchange rate of bitcoin",
      desc: `Slick provides you with lots of flexible services
        including fastest exchange.`,
    },
    {
      logo: require("./Icons/chart.svg"),
      title: "Huge growth on the stock market",
      desc: `Our company gained huge growth on stock
        market. 54% in first half of 2020.`,
    },
    {
      logo: require("./Icons/heart.svg"),
      title: "We are with you 24/7",
      desc: `You can contact out support any time you need. 
        We will be glad to hear from you.`,
    },
  ];
  return (
    <div className="overview-container">
      <div className="overview">
        {items.map((item, i) => {
          return (
            <OverItem
              key={i}
              title={item.title}
              desc={item.desc}
              logo={item.logo}
            />
          );
        })}
      </div>
      <div className="overview-bottom">
        <div className="overview-img">
          <img src={require("./Icons/bussiness.png")} alt="overview logo" />
        </div>
        <div className="overview-info">
          <h1>Crafted For Business, Startup and Agency Websites</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button className="primary-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
