import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import bg from "../../../images/bg1.jpg";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import BackgroundSlider from "react-background-slider";

const bg1 = bg;
const slideImages = [bg1, bg1, bg1];

const Banner = () => {
  return (
    <div className="justify-content-start">
      <div>
        <h1>This is Slider Sample</h1>
      </div>
      <BackgroundSlider images={[bg1, bg1, bg1]} duration={8} transition={2} />
    </div>
  );
};

export default Banner;
