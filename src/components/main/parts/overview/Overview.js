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
          <h1>Created to gain you enormous profits.</h1>
          <p>
            Slick was founded in 2017, by Johan Mathers.
            This startup gained popularity in Los Angeles and
            then spreaded in whole United State of America.
            Despite, our service is also available in France,
            Germany and Norway.
          </p>
          <button className="primary-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
