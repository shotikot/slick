import React from "react";
import "./Pricing.css";

export const Price = ({ title, price, subItems, buttonClass = "" }) => {
  return (
    <div className="price-item">
      <h2>{title}</h2>
      <h1 className="price-h2">${price}</h1>
      <div className="price-sub-items">
        {subItems.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
      <button className={`price-button ${buttonClass}`}>Purchase</button>
    </div>
  );
};
