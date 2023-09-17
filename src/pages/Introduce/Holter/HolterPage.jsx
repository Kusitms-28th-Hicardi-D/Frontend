import {
  IntroFlexBox,
  IntroWordBox,
  ViewContainer,
  DownBtnBox,
  Title,
  RightIcon,
} from "./holterStyle";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import { HolterIntroBox } from "../../../components/header/Header.style";
import HolterArticles from "../../../components/holter/HolterArticles";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CustomBtn,
  BtnWrapper,
} from "../../../components/landingMain/landingHeaderStyle";
import HolterReview from "../../../components/holter/HolterReview";

const holterImageLink = {
  holter360: require("../../../assets/image/Holter/Holter360.jpg"),
  holter768: require("../../../assets/image/Holter/Holter768.jpg"),
  holter1024: require("../../../assets/image/Holter/Holter1024.jpg"),
  holter1440: require("../../../assets/image/Holter/Holter1440.jpg"),
  holter1920: require("../../../assets/image/Holter/Holter1920.jpg"),
};

function HolterPage() {
  const navigate = useNavigate();

  return (
    <ViewContainer>
      <IntroFlexBox>
        <video autoPlay muted loop>
          <source
            src="https://marapdftestbucket.s3.ap-northeast-2.amazonaws.com/product_video/dc75c0144e8d41cc9bf7d3f2d4995d2d-%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2.mp4"
            type="video/mp4"
          />
        </video>
        <IntroWordBox column>
          
          <Title white>이제는 하이카디로</Title>
          <Title white>부정맥 의심환자를 간단하게 검사하세요!</Title>
          <BtnWrapper style={{ justifyContent: "flex-start" }}>
            <CustomBtn
              onClick={() => {
                navigate("/holterIntroduce/demo");
              }}
            >
              데모요청하기
              <RightIcon />
            </CustomBtn>
            <CustomBtn
              transparent
              onClick={() => {
                navigate("/production");
              }}
            >
              제품 보러가기
              <RightIcon />
            </CustomBtn>
          </BtnWrapper>
        </IntroWordBox>
        <DownBtnBox>
          <ExpandMoreTwoToneIcon style={{ fontSize: "5rem", color: "white" }} />
        </DownBtnBox>
      </IntroFlexBox>
      <HolterIntroBox>
        <img
          src={holterImageLink.holter1920}
          alt="holterIntro"
          style={{ width: "100%" }}
        />
      </HolterIntroBox>
      <HolterArticles />
      <HolterReview />
    </ViewContainer>
  );
}

export default HolterPage;
