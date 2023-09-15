import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { media } from "../../styles/media.style";

export const HeaderWrapper = styled(FlexBox)`
  padding: 0.5% 1% 0.5% 1%;
  max-width: 100%;
  box-sizing: border-box;
  padding-top: 2%;
  padding-bottom: 2%;
  @media (max-width: 715px) {
  }
`;

export const MenuWrapper = styled(FlexBox)`
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap !important;
  margin-left: 5%;
  width: 50%;
  box-sizing: border-box;

  @media (max-width: 715px) {
    display: none;
  }
`;

export const SubMenu = styled.div`
  transition: opacity 0.5s ease, visibility 1s ease;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  border-radius: 3%;
  padding: 1rem 0.5rem 1rem 0.5rem;

  & ${Words} {
    font-size: 1.3rem;
    margin: 1rem;
  }
`;

export const MenuItem = styled(Words)`
  margin-left: 1%;
  flex-wrap: nowrap;
  font-weight: bolder;
  font-size: 1.5rem;

  @media ${media.tablet} {
    font-size: 1rem;
  }

  &:hover ${SubMenu} {
    opacity: 1;
    visibility: visible;
  }

  &:hover::after {
    content: "";
    width: 100px;
    height: 100px;
    background-color: blue;
  }
`;

export const MenuEndItemBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: auto;
  align-self: center;

  .normal {
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 715px) {
      display: none;
    }
  }
  .mobile {
    display: none;
    @media ${media.mobile} {
      display: flex;
    }
  }
`;

export const HolterIntroBox = styled(FlexBox)`
  width: 100%;
  overflow: hidden;
`;
