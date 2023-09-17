import { useNavigate } from "react-router-dom";
import {
  BtnWrapper,
  ButtonContainer,
  CustomBtn,
  DownBtnBox,
  ImageContainer,
  IntroFlexBox,
  IntroWordBox,
  RightIcon,
  Title,
  ViewContainer,
  YesBtn,
} from "./patientStyle";
import PatientArticles from "../../../components/patient/PatientArticles";
import PatientReview from "../../../components/patient/PatientReview";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

function PatientPage() {
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
          <Title white>하이카디 플러스와 연동이 가능한</Title>
          <Title white>산소포화도 측정장비</Title>
          <BtnWrapper style={{ justifyContent: "flex-start" }}>
            <CustomBtn
              onClick={() => {
                navigate("/holterIntroduce/demo");
              }}
              style={{
                backgroundColor: "white",
                padding: "1rem",
                flex: "0 0 18rem",
                color: "black",
              }}
            >
              데모요청하기
              <RightIcon />
            </CustomBtn>
            <CustomBtn
              transparent
              onClick={() => {
                navigate("/pressCenter/news");
              }}
              style={{
                border: "1px solid white",
                backgroundColor: "transparent",
                padding: "1rem",
                flex: "0 0 18rem",
                color: "white",
              }}
            >
              하이카디 소식 보러가기
              <RightIcon />
            </CustomBtn>
          </BtnWrapper>
        </IntroWordBox>
        <DownBtnBox>
          <ExpandMoreTwoToneIcon style={{ fontSize: "5rem", color: "white" }} />
        </DownBtnBox>
      </IntroFlexBox>
      <ImageContainer>
        <img
          src={require("../../../assets/image/Patient/Patientimage.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageContainer>
      <PatientArticles />
      <PatientReview />
      <ButtonContainer>
        <YesBtn
          variant="outlined"
          style={{
            padding: "2rem 5rem 2rem 5rem",
            borderRadius: "30px",
            fontSize: "2rem",
          }}
          onClick={() => {
            navigate("/purchase/detail/1");
          }}
        >
          환자모니터링 솔루션 구매하기
        </YesBtn>
      </ButtonContainer>
    </ViewContainer>
  );
}
export default PatientPage;
