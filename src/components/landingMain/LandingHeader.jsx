import { useNavigate } from "react-router-dom";
import {
  BtnWrapper,
  CustomBtn,
  RightIcon,
  SubTitle,
  Title,
  ViewContainer,
  WordBox,
} from "./landingHeaderStyle";

function LandingHeader() {
  console.log("landing");
  const navigate = useNavigate();
  return (
    <ViewContainer>
      <WordBox>
        <Title white>HiCardi</Title>
        <SubTitle white>
          환자 Vital Sign을 실시간 모니터링할 수 있는 Wearable Device
        </SubTitle>
        <BtnWrapper>
          <CustomBtn
            onClick={() => {
              navigate("/holterIntroduce");
            }}
          >
            서비스 자세히보기
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
      </WordBox>
    </ViewContainer>
  );
}

export default LandingHeader;
