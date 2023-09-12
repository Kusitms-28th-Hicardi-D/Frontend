import {
  IntroBtnBox,
  IntroFlexBox,
  IntroWordBox,
  ViewContainer,
  Word,
  IntroBtn,
  DownBtnBox,
} from "./holterStyle";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
function HolterPage() {
  return (
    <ViewContainer>
      <IntroFlexBox>
        <img
          src={require("../../../assets/image/HolterIntro.png")}
          style={{ width: "100%", objectFit: "cover" }}
        />
        <IntroWordBox column>
          <Word white size5>
            하이카디 플러스와 연동이 가능한
          </Word>
          <Word white size5>
            산소포화도 측정장비
          </Word>
          <IntroBtnBox>
            <IntroBtn className="demo">
              <Word>데모 요청하기&nbsp;&nbsp;&nbsp;&nbsp;</Word>
              <NavigateNextOutlinedIcon style={{ fontSize: "2rem" }} />
            </IntroBtn>
            <IntroBtn className="news" transparent>
              <Word white>하이카디 소식보기&nbsp;&nbsp;&nbsp;&nbsp;</Word>
              <NavigateNextOutlinedIcon
                style={{ fontSize: "2rem", color: "white" }}
              />
            </IntroBtn>
          </IntroBtnBox>
        </IntroWordBox>
        <DownBtnBox>
          <ExpandMoreTwoToneIcon style={{ fontSize: "3rem", color: "white" }} />
        </DownBtnBox>
      </IntroFlexBox>
    </ViewContainer>
  );
}

export default HolterPage;
