import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./slick.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function VideoCarousel(props) {
  const sliderRef = useRef();
  const videoRef = useRef([]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    dotsClass: "dots_custom",
    nextArrow: (
      <NextBtn>
        <ArrowBackIosIcon />
      </NextBtn>
    ),
    prevArrow: (
      <PrevBtn>
        <KeyboardArrowLeftIcon />
      </PrevBtn>
    ),
    afterChange: (currentSlide) => {
      // 슬라이드가 변경될 때 호출되는 이벤트 핸들러
      const videoElements = videoRef.current;
      console.log(sliderRef.current);
      console.log(videoElements, currentSlide);

      // 모든 비디오 요소를 정지
      videoElements.forEach((video) => {
        video.pause();
      });

      // 현재 슬라이드의 비디오를 재생
      const currentVideo = videoElements[currentSlide];
      if (currentVideo) {
        currentVideo.play();
      }
    },
  };

  return (
    <Container>
      <StyledSlider {...settings} ref={sliderRef}>
        {props.urlList.map((el, idx) => (
          <video ref={(ref) => (videoRef.current[idx] = ref)} key={el} controls>
            <source src={el} />
          </video>
        ))}
      </StyledSlider>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 1200px;
  margin-top: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  /* border-radius: 20px;
  overflow: hidden; */
`;

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
`;

// 앞뒤 버튼 커스텀
const PrevBtn = styled.div`
  width: 50px;
  height: 50px;
  left: 3%;
  z-index: 3;
  position: absolute;
  background-color: blueviolet;
`;

const NextBtn = styled.div`
  width: 30px;
  height: 30px;
  right: 3%;
  z-index: 3;
  position: absolute;
  background-color: blueviolet;
`;
