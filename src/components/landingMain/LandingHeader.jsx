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
      <video autoPlay loop className="background-video">
        <source
          src="https://marapdftestbucket.s3.ap-northeast-2.amazonaws.com/product_video/a70cf7c582cd4dafae4ad38a5782976a-%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5.mp4"
          type="video/mp4"
        />
      </video>
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
