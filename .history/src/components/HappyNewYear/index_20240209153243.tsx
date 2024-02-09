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
      {/* <div className="slider">
        <SimpleSlider />
      </div> */}
    </div>
  );
};

export default HappyNewYear;
