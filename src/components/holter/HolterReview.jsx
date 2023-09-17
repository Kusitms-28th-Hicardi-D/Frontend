import Slider from "react-slick";
import {
  Description,
  HeaderTitle,
  SliderWrapper,
  Title,
  ViewContainer,
  WordBox,
} from "./HolterReview.style";
import { Words } from "../../styles/customComponents";
import { getSolution } from "../../apis/axiosInstance";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const review = [
  {
    writer: "이은섭",
    content: "홀터 테스트 리뷰",
  },
  {
    writer: "이은섭",
    content: "홀터 좋네요 !",
  },
  {
    writer: "이은섭",
    content: "홀터 좋네요 :):)::):):)",
  },
  {
    writer: "국준호",
    content: "홀터 최고",
  },
];

function HolterReview() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await getSolution("holter");
      setData(response.result.reviews);
      return true;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ViewContainer>
      <HeaderTitle>데모체험단 REVIEW</HeaderTitle>
      <SliderWrapper>
        {data && (
          <Slider {...settings}>
            <ReviewBox>
              <Box>
                <Title>{data[0].writer}</Title>
                <Description>{data[0].content}</Description>
              </Box>
            </ReviewBox>
            <ReviewBox>
              <Box>
                <Title>{data[1].writer}</Title>
                <Description>{data[1].content}</Description>
              </Box>
            </ReviewBox>
            <ReviewBox>
              <Box>
                <Title>{data[2].writer}</Title>
                <Description>{data[2].content}</Description>
              </Box>
            </ReviewBox>
          </Slider>
        )}
      </SliderWrapper>
    </ViewContainer>
  );
}

export default HolterReview;

const ReviewBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 40vh;
`;

const Box = styled.div`
  border-radius: 40px;
  width: 80%;
  margin: 2rem auto;
  align-self: center;
  border: 1px solid white;
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-left: 2rem;
  background-color: #dfdfdf90;
  justify-content: center;
`;
