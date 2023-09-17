import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { Button } from "@mui/material";

export const ViewContainer = styled(FlexBox)`
  flex-flow: column wrap;
  align-self: center;
  align-items: center;
  margin-bottom: 7rem;
`;

export const ProductHeader = styled(FlexBox)`
  margin: auto;
  width: 90vw;
  max-width: 1200px;
  margin-bottom: 2rem;
`;

export const IndexContainer = styled(FlexBox)`
  background-color: black;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: center;
`;
export const DetailContainer = styled(FlexBox)`
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: auto;
  width: 90vw;
  max-width: 1200px;
`;

// ------[ Index Components] ------ //
export const IndexItem = styled(Words)`
  padding: 1.5rem 0.7rem 1.1rem 0.7rem;
  color: white;
  margin: 0rem 0.5rem 0rem 0.5rem;
  font-size: 1rem;
  border-bottom: ${(props) =>
    props.selected ? "5px solid #08b9de" : "5px solid black"};
  transition: border-bottom 0.5s ease;
  font-weight: 500;
  cursor: pointer;
`;

// ------[ Product Components ] ------ //
export const LeftBox = styled(FlexBox)`
  flex: 1 1 40%;
  justify-content: center;
  align-items: center;
`;

export const ImageBox = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const RightBox = styled(FlexBox)`
  padding-top: 2rem;
  padding-left: 2rem;
  flex: 1 1 60%;
  flex-flow: column nowrap;
  justify-content: center;
`;

export const WordBox = styled(FlexBox)`
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

export const OptionBox = styled(FlexBox)`
  flex-flow: row nowrap;
  background-color: white;
  border-radius: 1px solid gray;
  width: 80%;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 30px;
  margin-bottom: 2rem;
  border: 1px solid gray;
  position: relative;
`;

export const TotalPriceBox = styled(FlexBox)`
  margin-bottom: 2rem;
`;

export const OrderBtnBox = styled(FlexBox)``;

// ------[ OrderBtn ]------ //
export const OrderBtn = styled(Button)``;

// ------[ Option SubBox ]------ //
export const SubOptionBox = styled(FlexBox)`
  display: none;
  position: absolute;
`;

// ------[ WordBox Components]------ //
export const Title = styled(Words)`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1rem;
`;

export const SubTitle = styled(Words)`
  font-weight: 600;
  color: #75757580;
  margin-bottom: 1.8rem;
`;

export const Description = styled(Words)`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const Price = styled(Words)`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
`; 

export const TotalPrice = styled(Words)`
  font-size: 1rem;
  font-weight: 800;
`;

// Description View //
export const DetailImageView = styled(FlexBox)`
  flex-flow: column nowrap;
  max-width: 80%;
`;
