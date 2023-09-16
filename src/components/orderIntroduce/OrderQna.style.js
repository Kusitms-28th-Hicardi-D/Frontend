import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { Button } from "@mui/material";

export const ViewContainer = styled(FlexBox)`
  padding: 5rem 3rem 5rem 3rem;
  flex-flow: column nowrap;
  width: 80vw;
`;

export const TitleBox = styled(FlexBox)`
  padding-bottom: 1rem;
  border-bottom: 2px solid black;
`;

export const Title = styled(Words)`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const ContentBox = styled(FlexBox)`
  flex-flow: column wrap;
  align-items: flex-end;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Content = styled(Words)`
  font-size: 1.2rem;
  color: #757575;
`;
export const BtnBox = styled(FlexBox)`
  flex-flow: row wrap;
  justify-content: flex-end;
  margin-top: 2rem;
`;
export const Btn = styled(Button)``;
