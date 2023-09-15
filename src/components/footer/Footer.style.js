import styled from "styled-components";
import { media } from "../../styles/media.style";
import { FlexBox, Words } from "../../styles/customComponents";

export const Container = styled.div`
  background: var(--ui-surface-03, #333);

  min-height: 10vh;
  max-width: 100%;
  margin-top: auto;
  display: flex;
  flex-flow: row wrap;
  flex-shrink: 0;

  justify-content: space-around;

  box-sizing: border-box;
  height: max-content;
  padding-top: 2%;
  padding-bottom: 2%;

  @media ${media.tablet} {
  }
`;

export const FooterItem = styled(FlexBox)`
  justify-content: center;
  @media ${media.tablet} {
  }
`;

export const FooterWord = styled(Words)`
  margin: 0;
  margin-bottom: 1.5%;
  padding: 0;
  border-bottom: ${(props) => (props.underline ? "1px solid #1aabde" : "0")};
`;
