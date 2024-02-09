import React from "react";
import "./HappyNewYear.scss";
import SimpleSlider from "../Slider";
const HappyNewYear = () => {
  return (
    <div className="new-year">
      <div className="animation">
        <span>Happy new year</span>
        <span className="new-year-number"> 2024</span>
      </div>
      <div className="new-year-message"></div>
      <SimpleSlider />
    </div>
  );
};

export default HappyNewYear;
