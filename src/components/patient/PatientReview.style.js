import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import Slider from "react-slick";
import { media } from "../../styles/media.style";
export const ViewContainer = styled(FlexBox)`
  background-image: url(${require("../../assets/image/Landing/landingBackground.png")});
  background-size: cover;
  min-height: 50vh;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SliderWrapper = styled.div`
  width: 85%;
  align-self: center;
  height: 40vh;
`;

export const ReviewBox = styled(FlexBox)`
  background-color: blue;
  height: 40vh;
  flex-flow: column nowrap;
  align-items: center;
`;

// ------[ Components ]------ //
export const HeaderTitle = styled(Words)`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-weight: 800;
  color: #c8ecf7;
  @media ${media.tablet} {
  }

  @media ${media.mobile} {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Title = styled(Words)`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--gray-gray-70, #dfdfdf);
  width: 95%;
  padding-bottom: 1rem;
  @media ${media.tablet} {
  }

  @media ${media.mobile} {
    margin-top: 0.5rem;
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

export const Description = styled(Words)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
  margin-top: 1rem;
  width: 95%;
  margin-bottom: 1rem;
  @media ${media.tablet} {
  }

  @media ${media.mobile} {
    font-size: 0.7rem;
  }
`;
