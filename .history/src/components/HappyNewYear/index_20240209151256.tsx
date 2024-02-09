import React from "react";
import "./HappyNewYear.scss";
const HappyNewYear = () => {
  return (
    <div className="new-year">
      <div className="animation">
        <span>Happy new year</span>
        <span className="new-year-number"> 2024</span>
      </div>
      <div className="new-year-message"></div>
    </div>
  );
};

export default HappyNewYear;
