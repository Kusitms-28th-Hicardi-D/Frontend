import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { Button } from "@mui/material";

export const ViewContainer = styled(FlexBox)`
  flex-flow: column wrap;
  min-height: 100vh;
  padding-top: 3rem;
`;

export const SearchHeader = styled(FlexBox)`
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 3rem;
  width: 90%;
  align-self: center;
  padding: 2rem;
  border-bottom: 2px solid #757575aa;
`;

export const ItemContainer = styled(FlexBox)`
  width: 80%;
  align-self: center;
  border-radius: 30px;
  flex-flow: row wrap;
  min-height: 30vh;
  overflow: hidden;
  background-color: aliceblue;
  margin-bottom: 3rem;
  -webkit-box-shadow: 6px 4px 24px -12px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 6px 4px 24px -12px rgba(0, 0, 0, 0.56);
  box-shadow: 6px 4px 24px -12px rgba(0, 0, 0, 0.56);
`;

export const LeftBox = styled(FlexBox)`
  flex: 1 1 20%;
`;
export const RightBox = styled(FlexBox)`
  flex: 1 1 70%;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: center;
  padding-left: 2rem;
`;
//
export const SearchTitle = styled(Words)`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
`;
//
export const Title = styled(Words)`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1rem;
`;

export const SubTitle = styled(Words)`
  font-weight: 600;
  color: #75757580;
  margin-bottom: 2rem;
`;

export const Description = styled(Words)`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #757575ff;
`;

export const Price = styled(Words)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;
