import styled from "styled-components";
import { FlexBox } from "../../../styles/customComponents";
import { Button } from "@mui/material";

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
