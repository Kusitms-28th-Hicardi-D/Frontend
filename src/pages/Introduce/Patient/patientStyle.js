import styled from "styled-components";
import { FlexBox, Words } from "../../../styles/customComponents";
import { Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { media } from "../../../styles/media.style";
export const ViewContainer = styled(FlexBox)`
  width: 100vw;
  margin: auto;
`;

export const ImageContainer = styled(FlexBox)`
  width: 100%;
`;

export const ButtonContainer = styled(FlexBox)`
  flex-flow: column wrap;
  width: 100%;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const YesBtn = styled(Button)``;

export const IntroFlexBox = styled(FlexBox)`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  & > video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
  }
`;

export const IntroWordBox = styled(FlexBox)`
  position: absolute;
  width: 90%;
  margin-top: 3%;
  z-index: 1;
  padding-left: 10%;
  padding-top: 3rem;
`;

export const Title = styled(Words)`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media ${media.tablet} {
    font-size: 2.5rem;
  }
  @media ${media.mobile} {
    font-size: 1.3rem;
  }
`;

export const BtnWrapper = styled(FlexBox)`
  flex-flow: row wrap;
  width: 100%;
  align-self: center;
  justify-content: center;

  gap: calc(3%);
  margin-top: 5rem;
`;
export const CustomBtn = styled(Button)`
  background-color: ${(props) => (props.transparent ? "transparent" : "white")};
  flex: 0 0 18rem;
  row-gap: 10px;
  padding: 1rem;
  justify-content: flex-start;
  border: ${(props) => (props.transparent ? "1px solid white" : "none")};
  color: ${(props) => (props.transparent ? "white" : "black")};
  justify-content: center;
  &:hover {
    background-color: gray;
  }

  @media ${media.tablet} {
    flex: 0 0 15rem;
    font-size: 1rem;
  }

  @media ${media.mobile} {
    flex: 0 0 10rem;
    font-size: 0.5rem;
  }
`;
export const RightIcon = styled(ChevronRightIcon)`
  margin-left: auto;
`;
export const DownBtnBox = styled(FlexBox)`
  position: absolute;
  bottom: 0px;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
`;
