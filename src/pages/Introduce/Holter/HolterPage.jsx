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
        <IntroWordBox column>
          <Title white>하이카디 플러스와 연동이 가능한</Title>
          <Title white>산소포화도 측정장비</Title>
          <BtnWrapper style={{ justifyContent: "flex-start" }}>
            <CustomBtn
              onClick={() => {
                navigate("/holterIntroduce/demo");
              }}
            >
              데모요청하기
              <RightIcon />
            </CustomBtn>
            <CustomBtn transparent>
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
    </ViewContainer>
  );
}

export default HolterPage;
