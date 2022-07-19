import React from "react";
import "./Carousel.css";
import left from "../images/left-arrow.png";
import right from "../images/right-arrow.png";

const CarouselBtn = ({ moveSlide, direction }) => {
  // console.log(moveSlide, direction);

  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      <img src={direction === "next" ? right : left} />
    </button>
  );
};

export default CarouselBtn;
