import { styled } from "styled-components";
import Carousel from "../../components/carousel/Carousel";
import { FlexBox, Words } from "../../styles/customComponents";
import { Color } from "../../assets/color/Color";
import { useEffect, useState } from "react";
import React from "react";
import UsagePart from "./component/Usage";

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
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInstruction((prev) => (prev + 1) % instructions.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ViewContainer>
      <SlideContainer>
        <FlexBox
          style={{
            flex: "1 1 40%",
            justifyContent: "flex-start",
            paddingLeft: "5%",
          }}
          column
        >
          <img
            src="https://ecimg.cafe24img.com/pg189b34772306057/hicardi/web/upload/category/logo/v2_553d95808a53a44ef370162e31b118ac_E0tVNw8TE5_top.jpg"
            style={{ width: "20%" }}
            alt="logo"
          />
          <Words
            style={{
              fontSize: "2.5rem",
              marginBottom: 0,
              fontWeight: "bolder",
            }}
            bold
          >
            <NewlineText text={instructions[currentInstruction][0]} />
          </Words>
          <Words size3>
            <NewlineText text={instructions[currentInstruction][1]} />
          </Words>
          <Words size2 bold>
            자세히보기
          </Words>
        </FlexBox>
        <FlexBox style={{ flex: "1 1 40%" }}>
          <Carousel images={Images} />
        </FlexBox>
      </SlideContainer>
      <FlexBox column style={{ alignItems: "center" }}>
        <div
          style={{
            width: "5%",
            alignSelf: "center",
            backgroundColor: Color.componentColor.ButtonBlue,
            height: "3px",
          }}
        />
        <Words size5 bold>
          <b>하이카디 플러스</b>는 이렇게 활용될 수 있습니다
        </Words>
      </FlexBox>
      <UsagePart />
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
