import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import "./Carousel.scss";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Carousel(props) {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const carouselRef = useRef(null).current;
  const videoRef = useRef([]);

  // useEffect(() => {
  //   const currentVideo = videoRef.current[0];
  //   if (currentVideo) {
  //     currentVideo.play();
  //   }
  // }, []);

  useEffect(() => {
    // 슬라이드가 변경될 때 호출되는 이벤트 핸들러
    const videoElements = videoRef.current;

    // 모든 비디오 요소를 정지
    videoElements.forEach((video) => {
      video.pause();
    });

    // 현재 슬라이드의 비디오를 재생
    const currentVideo = videoElements[props.currentIndex];
    if (currentVideo) {
      currentVideo.play();
    }
  }, [props.currentIndex]);

  const onClickDot = (event) => {
    props.setCurrentIndex(event.target.id);
    console.log(event.target.id);
  };

  const onClickPrev = () => {
    if (props.currentIndex > 0) props.setCurrentIndex((prev) => prev - 1);
  };

  const onClickNext = () => {
    if (props.currentIndex < props.urlList?.length - 1)
      props.setCurrentIndex((prev) => prev + 1);
  };

  const offset = -props.currentIndex * 100;
  // 0 번째 0, 1번째 100, 2번째 200....

  return (
    <CarouselContainer>
      <CarouselSlides style={{ transform: `translateX(${offset}%)` }}>
        {props.urlList?.map((el, idx) => (
          <CarouselVideo
            ref={(ref) => (videoRef.current[idx] = ref)}
            autoPlay={idx === 0}
            key={el}
            controls
          >
            <source src={el} />
          </CarouselVideo>
        ))}
      </CarouselSlides>
      <CarouselArrow onClick={onClickPrev} style={{ left: "1rem" }}>
        <ArrowBackIosNewIcon style={{ color: "#19afdd" }} />
      </CarouselArrow>
      <CarouselArrow onClick={onClickNext} style={{ right: "1rem" }}>
        <ArrowForwardIosIcon style={{ color: "#19afdd" }} />
      </CarouselArrow>
      <Dots>
        {props.urlList?.map((el, idx) => (
          <Dot
            id={idx}
            onClick={onClickDot}
            selected={props.currentIndex == idx}
          />
        ))}
      </Dots>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  margin: auto;
  position: relative;
  margin-top: 3rem;

  width: 90vw;
  max-width: 1200px;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
`;

const CarouselSlides = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  align-items: center;
`;

const CarouselVideo = styled.video`
  border-radius: 20px;
  flex: 0 0 100%;
  width: 100%;
  object-fit: cover;
`;

const CarouselArrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  top: calc(50% - 50px);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid var(--ui-primary, #19afdd);
  background: rgba(255, 255, 255, 0.85);
`;

const Dots = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Dot = styled.div`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected ? " #19afdd" : " #d1d1d1"}; // 기본 컬러
  transition: background-color 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
`;
