import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { Button } from "@mui/material";
import { BtnWrapper, CustomBtn } from "../landingMain/landingHeaderStyle";
import { media } from "../../styles/media.style";
function LandingDetail() {
  return (
    <EContainer>
      <WordBox>
        <TitleWord white>하이카디에 대해 궁금한 내용이 있으신가요?</TitleWord>
        <SubWord white>
          궁금하신 내용을 남겨주시면 담당 부서에서 확인 후 답변 드리겠습니다
        </SubWord>
        <BtnWrapper>
          <CustomBtn transparent>FAQ</CustomBtn>
          <CustomBtn>문의하기</CustomBtn>
        </BtnWrapper>
      </WordBox>
    </EContainer>
  );
}

export default LandingDetail;

const EContainer = styled(FlexBox)`
  width: 100%;
  flex-flow: column wrap;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url(${require("../../assets/image/Landing/landingBackground.png")});
  background-size: cover;
  background-position: center;
  padding-top: 10%;
  padding-bottom: 10%;
`;
const WordBox = styled(FlexBox)`
  width: 80%;
  flex-flow: column nowrap;
  align-items: center;
  @media ${media.tablet} {
  }

  @media ${media.mobile} {
    width: 90%;
  }
`;

const TitleWord = styled(Words)`
  font-size: 3rem;
  margin: 0;
  margin-bottom: 1rem;
  @media ${media.tablet} {
    font-size: 2rem;
  }

  @media ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const SubWord = styled(Words)`
  font-size: 1.5rem;
  @media ${media.tablet} {
    font-size: 2rem;
  }

  @media ${media.mobile} {
    font-size: 0.8rem;
  }
`;
