import { styled } from "styled-components";
import Carousel from "../../components/carousel/Carousel";
import { FlexBox, Words } from "../../styles/customComponents";
import { Color } from "../../assets/color/Color";
import { useEffect, useState } from "react";
import React from "react";
import UsagePart from "./component/Usage";
import LandingDetail from "../../components/landingDetail/LandingDetail";
import RolllingView from "../../components/rolling/RollingView";
import LandingHeader from "../../components/landingMain/LandingHeader";
import { axiosInstance, getSolution } from "../../apis/axiosInstance";

const Images = [
  "https://ecimg.cafe24img.com/pg189b34772306057/hicardi/web/images/mainbanner6.png",
  "https://ecimg.cafe24img.com/pg189b34772306057/hicardi/web/images/mainbanner3.png",
  "https://ecimg.cafe24img.com/pg189b34772306057/hicardi/web/images/mainbanner1.png",
];

const instructions = [
  [`실시간 원격 환자\n모니터링 솔루션`, "Mobile Cardiac Telemetry"],
  ["보다 편한\n홀터 검사 솔루션", "Wearable Holter"],
  [
    "홀터 검사\n원격 판독 서비스",
    "임상병리사와 부정맥 전문의\n원격 판독 서비스를 사용해보세요",
  ],
];
function NewlineText({ text }) {
  const newText = text.split("\n").map((str) => (
    <React.Fragment key={str}>
      {str}
      <br />
    </React.Fragment>
  ));
  return <>{newText}</>;
}

function LandingMain() {
  const [currentInstruction, setCurrentInstruction] = useState(0);

  return (
    <ViewContainer>
      <LandingHeader />
      <UsagePart />
      <LandingDetail />
      <RolllingView />
    </ViewContainer>
  );
}

const ViewContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

const SlideContainer = styled.div`
  width: 95%;
  align-self: center;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  border-radius: 10px;
  background-color: aliceblue;

  box-sizing: border-box;

  padding: 5% 1% 2% 1%;

  margin-top: 3%;
  margin-bottom: 3%;
`;

export default LandingMain;
