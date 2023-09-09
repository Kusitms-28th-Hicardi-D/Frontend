import { styled } from "styled-components";

// ------ Container ------ //
export const EContainer = styled.div`
  min-height: "100vh";
`;
export const PContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

// ------ Box ------- //
export const FlexBox = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.column ? "column wrap" : "row wrap")};
`;

// ------ Texts ------ //
export const Words = styled.p`
  font-size: ${(props) =>
    props.size1
      ? "0.7rem"
      : props.size2
      ? "1rem"
      : props.size3
      ? "1.3rem"
      : props.size4
      ? "1.5rem"
      : "2rem"};

  color: ${(props) =>
    props.sub ? "#00000040" : props.white ? "white" : "black"};

  font-weight: ${(props) => (props.bold ? "500" : "0")};
`;

// ------ Animations ------ //
