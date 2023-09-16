import styled from "@emotion/styled";
import { FlexBox, Words } from "../../styles/customComponents";

export const ViewContainer = styled(FlexBox)`
  align-self: center;
  flex-flow: column wrap;
  max-width: 90%;
`;

export const ViewHeader = styled(FlexBox)`
  display: flex;
  width: 100%;
  height: 30vh;
  border-radius: 30px;
  overflow: hidden;
  background-image: url(${require("../../assets/image/Purchase/1.png")});
  background-size: cover;
  background-position: center;
  flex-flow: column wrap;
  justify-content: flex-end;
  padding-left: 5%;
  padding-bottom: 3%;
`;

export const IndexContainer = styled(FlexBox)`
  align-self: center;
  width: 80%;
  flex-flow: row wrap;
  margin-top: 2rem;
  padding-right: 2rem;
  padding-left: 3rem;
`;

export const ProductContainer = styled(FlexBox)`
  width: 85%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: space-evenly;
  align-self: center;
  gap: 3rem 4rem;
  padding-top: 4rem;
`;

export const ProductWrapper = styled(FlexBox)`
  width: 40%;
  min-height: 500px;
  background-color: #75757510;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 5px 3px 40px 3px rgba(151, 151, 151, 0.51);
  -webkit-box-shadow: 5px 3px 40px 3px rgba(151, 151, 151, 0.51);
  -moz-box-shadow: 5px 3px 40px 3px rgba(151, 151, 151, 0.51);
`;

// ------[ Item Components ]------- //
export const ImageWrapper = styled(FlexBox)`
  height: 40%;
  overflow: hidden;
`;

export const TextWrapper = styled(FlexBox)`
  flex-flow: column nowrap;
  padding: 3rem;
`;

export const OrderBtnWrapper = styled(FlexBox)`
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;
`;

export const OrderBtnBox = styled(FlexBox)`
  flex-flow: row wrap;
  column-gap: 1rem;
`;
export const BtnWrapper = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 5px;
  background-color: white;
  border: 1px solid gray;
`;

export const ItemTitle = styled(Words)`
  font-size: 1.5rem;
  font-weight: 500;
`;
export const ItemSubTitle = styled(Words)`
  font-size: 0.9rem;
`;

export const ItemPrice = styled(Words)`
  font-size: 2rem;
  font-weight: 800;
`;
// ------[ Header Components ]------- //
export const HeaderTextBox = styled(FlexBox)`
  flex-flow: column nowrap;
`;

export const HeaderTitle = styled(Words)`
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 0.8rem;
`;

export const HeaderSubTitle = styled(Words)`
  font-weight: 500;
  font-size: 1.7rem;
`;

// ------[ Index Components ]------- //

export const IndexBtnWrapper = styled(FlexBox)`
  flex-flow: row wrap;
  column-gap: 1rem;
`;
export const IndexBtn = styled(FlexBox)`
  background-color: ${(props) => (props.selected ? "#01b0ef" : "#75757520")};
  flex-flow: column;
  padding: 1rem;
  border-radius: 40px;
  color: ${(props) => (props.selected ? "white" : "black")};
  &.content {
    word-wrap: break-word;
  }
`;

export const Dropdown = styled(FlexBox)`
  padding: 1rem;
  border-radius: 10px;
  background-color: gray;
  margin-left: auto;
`;
