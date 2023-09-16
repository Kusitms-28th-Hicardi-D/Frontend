import styled from "@emotion/styled";
import { FlexBox, Words } from "../../styles/customComponents";
import { Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const sizes = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1440px",
};

const media = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

export const ViewContainer = styled(FlexBox)`
  height: auto;
  background-image: url(${require("../../assets/image/Landing/LandingMain.png")});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
`;

export const WordBox = styled(FlexBox)`
  flex-flow: column;
  width: 100%;
  align-items: center;
  margin-top: 3rem;
  padding-top: 2rem;
`;

export const Title = styled(Words)`
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: 0.3rem;
  margin-bottom: 0.5rem;

  @media ${media.tablet} {
    font-size: 4rem;
  }

  @media ${media.mobile} {
    font-size: 2rem;
  }
`;

export const SubTitle = styled(Words)`
  font-size: 2.2rem;
  color: var(--text-text-03, #8b8b8b);

  @media ${media.tablet} {
    font-size: 1.5rem;
  }

  @media ${media.mobile} {
    font-size: 1rem;
  }
`;

export const BtnWrapper = styled(FlexBox)`
  flex-flow: row wrap;
  width: 100%;
  align-self: center;
  justify-content: center;
  gap: calc(3%);
  margin-top: 5rem;
`;
export const CustomBtn = styled(Button)`
  background-color: ${(props) => (props.transparent ? "transparent" : "white")};
  flex: 0 0 18rem;
  row-gap: 10px;
  padding: 1rem;
  justify-content: flex-start;
  border: ${(props) => (props.transparent ? "1px solid white" : "none")};
  color: ${(props) => (props.transparent ? "white" : "black")};
  justify-content: center;
  &:hover {
    background-color: gray;
  }

  @media ${media.tablet} {
    flex: 0 0 15rem;
    font-size: 1rem;
  }

  @media ${media.mobile} {
    flex: 0 0 10rem;
    font-size: 0.5rem;
  }
`;

export const RightIcon = styled(ChevronRightIcon)`
  margin-left: auto;
`;
