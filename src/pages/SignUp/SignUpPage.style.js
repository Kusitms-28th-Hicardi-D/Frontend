import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { Box } from "@mui/material";

export const ViewContainer = styled(FlexBox)`
  background-color: gray;
  width: 100%;
  flex-flow: column wrap;
  align-items: center;
  padding-top: 3rem;
`;

export const HeaderBox = styled(FlexBox)``;

// ------[ Header Components ]------ //
export const HeaderTitle = styled(Words)`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
`;

export const StairBox = styled(FlexBox)``;
