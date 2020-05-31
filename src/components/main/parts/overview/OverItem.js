import React from 'react';
import './Overview.css';

export const OverItem = ({ logo, title, desc, logoClass = "" }) => {
    return (
        <div className="overview-item">
            <div className={`overview-item-logo ${logoClass}`}>
                <img src={logo} alt={title} />
            </div>
            <h2>{title}</h2>
            <h4>{desc}</h4>
        </div>
    )
}