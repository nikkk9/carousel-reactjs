import React, { useState } from "react";
import { Images } from "../CarouselData";
import CarouselBtn from "./CarouselBtn";
import "./Carousel.css";

const Carousel = () => {
  const [slideIdx, setSlideIdx] = useState(1);

  const nextSlide = () => {
    if (slideIdx !== Images.length) {
      setSlideIdx(slideIdx + 1);
    } else if (slideIdx === Images.length) {
      setSlideIdx(1);
    }
  };
  const prevSlide = () => {
    if (slideIdx !== 1) {
      setSlideIdx(slideIdx - 1);
    } else if (slideIdx === 1) {
      setSlideIdx(Images.length);
    }
  };
  return (
    <div className="container-slider">
      {Images.map((i, idx) => {
        return (
          <>
            <div
              key={i.id}
              className={slideIdx === idx + 1 ? "slide active-anim" : "slide"}
            >
              <img src={i.img} />
              <div className="img-details">
                <span style={{ fontWeight: "bold" }}>Image : &nbsp;</span>
                <span>
                  {idx + 1}/{Images.length}
                </span>
                {console.log(Images.length)}
              </div>
            </div>
          </>
        );
      })}
      <CarouselBtn moveSlide={nextSlide} direction="next" />
      <CarouselBtn moveSlide={prevSlide} direction="prev" />
    </div>
  );
};

export default Carousel;
