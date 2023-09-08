import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import "./Carousel.scss";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null).current;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  const offset = -currentIndex * 100;
  // 0 번째 0, 1번째 100, 2번째 200....

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(${offset}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel- ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
      <div className="index">
        <div className={`index-item ${currentIndex === 0 ? "active" : ""}`} />
        <div className={`index-item ${currentIndex === 1 ? "active" : ""}`} />
        <div className={`index-item ${currentIndex === 2 ? "active" : ""}`} />
      </div>
    </div>
  );
}

export default Carousel;
