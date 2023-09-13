import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export default function TopContainer(props) {
  const [title, setTitle] = useState("ddd");

  useEffect(() => {
    if (props.selectedMenu === "hicardi") setTitle("ddd");
    if (props.selectedMenu === "nonin") setTitle("sss");
    if (props.selectedMenu === "additional") setTitle("aaa");
  }, [props.selectedMenu]);

  return (
    <Background>
      <TxtContainer>
        <Title>{title}</Title>
        <BuyBtn
          onClick={() => {
            console.log(title);
          }}
        >
          <BtnTxt>구매하기</BtnTxt>
          <KeyboardArrowRight style={{ color: "#19afdd" }} />
        </BuyBtn>
      </TxtContainer>
      <Carousel />
    </Background>
  );
}

const Background = styled.div`
  padding: 3rem 2rem;
  background: var(
    --gradiant,
    linear-gradient(
      142deg,
      rgba(200, 236, 247, 0.83) 5.19%,
      rgba(200, 236, 247, 0) 91.09%
    ),
    #fff
  );
  margin-bottom: 4rem;
`;

const TxtContainer = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 1200px;
`;

const Title = styled.div`
  color: var(--text-text-01, #242424);

  font-family: Noto Sans CJK KR;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const BuyBtn = styled.div`
  width: 25%;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.6rem 0.8rem 1rem;
  border: 2px solid var(--ui-primary, #19afdd);
  cursor: pointer;
`;

const BtnTxt = styled.div`
  color: var(--ui-primary, #19afdd);

  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-weight: 700;
`;
