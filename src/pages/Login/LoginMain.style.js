import styled from "styled-components";
import { FlexBox } from "../../styles/customComponents";
import { media } from "../../styles/media.style";
export const ViewContainer = styled(FlexBox)`
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 80vh;
`;

export const LoginBox = styled(FlexBox)`
  align-items: center;
  width: 40%;
`;

export const LoginUtilList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
  margin-top: 2rem;

  padding: 0;
  li {
    font-size: 0.8rem;
    color: gray;
  }
  li:not(:last-child):after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 17px;
    margin: 0 8px 0 12px;
    vertical-align: top;
    background: #e0e0e0;
  }
  @media ${media.tablet} {
  }
`;

export const LoginTitleBox = styled(FlexBox)`
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 2rem;
`;

export const LoginBtnBox = styled(FlexBox)`
  flex-flow: column nowrap;
  width: 80%;
  margin-top: 3%;

  @media ${media.tablet} {
    width: 120%;
  }
`;

export const LoginInputBox = styled(FlexBox)`
  flex-flow: column nowrap;
  width: 80%;
  @media ${media.tablet} {
    width: 120%;
  }
`;
