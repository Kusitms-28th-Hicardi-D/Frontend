import styled from "styled-components";
import { FlexBox, Words } from "../../../styles/customComponents";

export const ViewContainer = styled.div`
  min-height: 100%;
  width: 100%;
`;

export const IntroFlexBox = styled(FlexBox)`
  width: 100%;
  position: relative;
`;

export const IntroWordBox = styled(FlexBox)`
  position: absolute;
  width: 100%;
  margin-top: 3%;
  z-index: 1;
  padding-left: 10%;
`;

export const Word = styled(Words)`
  margin: 0;
  padding: 0%;
`;

export const IntroBtnBox = styled(FlexBox)`
  margin-top: 2%;
  width: 80%;
  gap: calc(2%);
  justify-content: flex-start;
  align-items: center;
`;

export const IntroBtn = styled(FlexBox)`
  background-color: ${(props) => (props.transparent ? "transparent" : "white")};
  padding: 10px;
  align-items: center;
  flex-wrap: nowrap;
  border: ${(props) => (props.transparent ? "1px solid white" : "")};

  &.demo {
    min-width: 20%;
    justify-content: space-between;
    ${Word} {
      word-break: break-all;
      font-size: 1.2rem;
      white-space: nowrap;
    }
  }

  &.news {
    min-width: 20%;
    justify-content: space-between;
    ${Word} {
      word-break: break-all;
      font-size: 1.2rem;
      white-space: nowrap;
    }
  }
`;

export const DownBtnBox = styled(FlexBox)`
  position: absolute;
  bottom: 0px;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
`;
