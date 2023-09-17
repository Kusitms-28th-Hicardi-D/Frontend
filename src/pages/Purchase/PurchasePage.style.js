import styled from "@emotion/styled";
import { FlexBox, Words } from "../../styles/customComponents";
import { media } from "../../styles/media.style";

export const ViewContainer = styled(FlexBox)`
  margin: auto;
  width: 90vw;
  max-width: 1200px;
`;

export const ViewHeader = styled(FlexBox)`
  display: flex;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  background-image: url(${require("../../assets/image/Purchase/1.png")});
  background-size: cover;
  background-position: center;
  flex-flow: column wrap;
  justify-content: flex-end;
  padding: 15% 5% 5% 5%;
`;

// ------[ Header Components ]------- //
export const HeaderTextBox = styled(FlexBox)`
  flex-flow: column nowrap;
`;

export const HeaderTitle = styled(Words)`
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const HeaderSubTitle = styled(Words)`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
`;

// ------[ Index Components ]------- //

export const IndexContainer = styled(FlexBox)`
  align-self: center;
  width: 100%;
  flex-flow: row wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const IndexBtnWrapper = styled(FlexBox)`
  flex-flow: row wrap;
  column-gap: 1rem;
`;

export const IndexBtn = styled(FlexBox)`
  transition: background-color 1s ease;
  background-color: ${(props) => (props.selected ? "#01b0ef" : "#75757520")};
  flex-flow: column;
  padding: 1rem;
  border-radius: 40px;
  cursor: pointer;
  color: ${(props) => (props.selected ? "white" : "black")};
  &.content {
    word-wrap: break-word;
  }
  margin-bottom: 1rem;
`;

// ------[ Product Components ]------- //

export const ProductContainer = styled(FlexBox)`
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 7rem;
  gap: 2rem;
`;

export const ProductWrapper = styled(FlexBox)`
  width: calc(33.33% - (2 * 0.7rem));
  margin-bottom: 3rem;
  cursor: pointer;
  background-color: #75757510;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 5px 3px 40px 3px rgba(151, 151, 151, 0.51);
  -webkit-box-shadow: 5px 3px 40px 3px rgba(151, 151, 151, 0.51);
  -moz-box-shadow: 5px 3px 40px 3px rgba(151, 151, 151, 0.51);

  @media (max-width: 1000px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 715px) {
    width: 100%;
  }
`;

// ------[ Item Components ]------- //
export const ImageWrapper = styled(FlexBox)`
  width: 100%;
  height: 15rem;
  overflow: hidden;

  @media (max-width: 715px) {
    height: 20rem;
  }
`;

export const TextWrapper = styled(FlexBox)`
  width: 90%;
  height: 15rem;
  margin: auto;
  padding-top: 2rem;

  @media (max-width: 715px) {
    height: 10rem;
  }
`;

export const ItemTitle = styled(Words)`
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.8rem;
  line-height: 2rem;
`;
export const ItemSubTitle = styled(Words)`
  font-size: 1rem;
  line-height: 1.5rem;
`;
export const OrderBtnWrapper = styled(FlexBox)`
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-bottom: 2rem;
`;

export const ItemPrice = styled(Words)`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const OrderBtnBox = styled(FlexBox)`
  flex-flow: row wrap;
  gap: 1rem;
`;
export const BtnWrapper = styled(FlexBox)`
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid gray;
`;

export const Dropdown = styled(FlexBox)`
  padding: 1rem;
  border-radius: 10px;
  background-color: gray;
  margin-left: auto;
`;
