import styled, { keyframes } from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { media } from "../../styles/media.style";
import { Button } from "@mui/material";

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
    font-size: 1.1rem;
    margin: 1rem;
  }
`;

export const MenuItem = styled(Words)`
  margin-left: 1%;
  flex-wrap: nowrap;
  font-weight: bolder;
  font-size: 1.3rem;
  padding-bottom: 4px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #08b9de;
    padding-bottom: 4px;
  }

  @media ${media.tablet} {
    font-size: 1rem;
  }

  &:hover ${SubMenu} {
    opacity: 1;
    visibility: visible;
    & ${Words}:hover {
      border-bottom: 2px solid #08b9de;
    }
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

export const UserBtnBox = styled(FlexBox)`
  flex-flow: row nowrap;
  align-items: center;
`;

export const UserBtn = styled(Button)``;

export const UserBox = styled(FlexBox)``;

export const UserText = styled(Words)`
  font-size: 0.8rem;
  border: 1px solid black;
  padding: 0.7rem;
  border-radius: 30px;
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const SearchBar = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 5%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${(props) => (props.visible ? slideDown : slideUp)} 0.3s forwards;
`;

export const MenuBtn = styled.div`
  cursor: pointer;

  @media (min-width: 715px) {
    display: none;
  }
`;

export const MenuBar = styled.div`
  width: 100%;
  max-width: 1200px;
  position: absolute;
  top: 45px;
  z-index: 10;
  display: flex;
  flex-direction: column;

  @media (min-width: 715px) {
    display: none;
  }
`;

export const MenuBarItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1.5rem;
  background-color: #fff;
  height: 50px;
  cursor: pointer;

  &:hover {
    color: #01b0ef;
  }
`;

export const MenuBarTxt = styled.div`
  /* color: var(--text-text-01, #242424); */
  font-size: 1rem;
  font-weight: 700;
`;

export const MenuBarSubItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 1px solid #01b0ef;
  border-bottom: 1px solid #01b0ef;
`;

export const MenuBarSubItem = styled.div``;

export const MenuBarSubItemTxt = styled.div``;
