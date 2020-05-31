import React from "react";
import "./Pricing.css";
import { Price } from "./Price";

export const Pricing = () => {
  const items = [
    {
      title: "Micro",
      price: 800,
      subItems: [
        "Free Instalation",
        "Bitcoin Wallet",
        "Single Device",
        "Minimal Power",
      ],
      buttonClass: "",
    },
    {
      title: "Standard",
      price: 1500,
      subItems: [
        "Free Instalation",
        "Bitcoin Wallet",
        "Three Devices",
        "Standard Power",
        "Dashboard",
        "Free support",
      ],
      buttonClass: "with-bg",
    },
    {
      title: "Business",
      price: 3500,
      subItems: [
        "Free Instalation",
        "Any cryptocurrency wallet",
        "Eight devices",
        "Maximal Power",
        "Free Support",
        "Dashboard",
        "Free consultations",
      ],
      buttonClass: "",
    },
  ];
  return (
    <div className="pricing-container">
      <h1>Pricing Plans</h1>
      <p>
        Choose your plan and contact us,<br/> it takes
        only one week to get started and finish your 
        business with us.
      </p>
      <div className="pricing">
        {items.map((item, i) => {
          return (
            <Price
              key={i}
              title={item.title}
              price={item.price}
              buttonClass={item.buttonClass}
              subItems={item.subItems}
            />
          );
        })}
      </div>
    </div>
  );
};
