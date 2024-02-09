import React from "react";
import Slider from "react-slick";
import "./Slider.scss";
import Image from "../Image";
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Image imageId="1" />
        <Image imageId="2" />
        <Image imageId="3" />
        <Image imageId="4" />
        <Image imageId="5" />
      </Slider>
    </div>
  );
}

export default SimpleSlider;
