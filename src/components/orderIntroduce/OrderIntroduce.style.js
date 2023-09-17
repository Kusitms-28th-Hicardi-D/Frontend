import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";

export const ViewContainer = styled(FlexBox)`
  width: 100%;
  flex-flow: column wrap;
  padding: 5rem 3rem 5rem 3rem;
`;
export const TitleBox = styled(FlexBox)`
  border-bottom: 3px solid black;
  padding-bottom: 1rem;
`;

export const Title = styled(Words)`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const Box = styled(FlexBox)`
  flex-flow: row wrap;
  align-items: flex-start;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid gray;
`;

export const TitleWrapper = styled(FlexBox)`
  flex: 0 1 20%;
`;

export const DescriptionWrapper = styled(FlexBox)`
  flex-flow: column wrap;
  flex-grow: 1;
`;

export const ContentTitle = styled(Words)`
  font-size: 1rem;
  font-weight: 700;
`;

export const ContentDescription = styled(Words)`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;
