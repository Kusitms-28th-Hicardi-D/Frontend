import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { media } from "../../styles/media.style";
export const ArticleCard = styled(FlexBox)`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 20%;
  margin: 2rem;
  border-radius: 3%;
  overflow: hidden;
  border-radius: 8px;
  background: var(--ui-surface, #fff);

  box-shadow: 0px 0px 5px 0px rgba(0, 51, 150, 0.25);
  padding-bottom: 1rem;

  @media ${media.tablet} {
    flex-basis: 40%;
  }

  @media ${media.mobile} {
    flex-basis: 80%;
  }
`;

export const ImageBox = styled(FlexBox)`
  width: 100%;
`;

export const ArticleContent = styled(CardContent)`
  display: flex;
  flex-flow: column nowrap;
  //min-height: 100%;
  background-color: red;
`;

export const CustomCard = styled(FlexBox)`
  height: 150px;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
`;

export const Title = styled(Words)`
  color: var(--text-text-03, #8b8b8b);
  /* mobile/body-1 */
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
`;

export const SubTitle = styled(Words)`
  overflow: hidden;
  color: var(--text-text-01, #242424);
  text-overflow: ellipsis;
  /* mobile/subheadline */
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
`;

export const ArticleViewBtn = styled(Button)`
  margin-top: auto;
  width: 80%;
  align-self: center;
  border-radius: 10%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
