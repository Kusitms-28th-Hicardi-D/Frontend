import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { useRecoilValue } from "recoil";
import { productState } from "../../recoil/normal/atoms";
import HolterArticle from "./HolterArticle";
import { getSolution } from "../../apis/axiosInstance";

function HolterArticles() {
  const [holterInfo, setHolterInfo] = useState([]);
  async function fetchSolution() {
    // 이름 변경
    const response = await getSolution("holter");
    setHolterInfo(response.result.reviews);
  }

  useEffect(() => {
    fetchSolution();
  }, []);

  return (
    <EContainer>
      <Words size5>환자 모니터링 솔루션의 임상적 유효성을 증명했습니다</Words>
      <ArticleContainer>
        {holterInfo &&
          holterInfo.map((element) => {
            return <HolterArticle info={element} />;
          })}
      </ArticleContainer>
    </EContainer>
  );
}
export default HolterArticles;

const EContainer = styled(FlexBox)`
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 5% 3% 5% 3%;
  box-sizing: border-box;
`;

const ArticleContainer = styled(FlexBox)`
  width: 100%;
  padding: 5% 5% 5% 5%;
  flex: row wrap;
  box-sizing: border-box;
  justify-content: flex-start;
  align-content: space-around;
`;

const Word = styled(Words)`
  font-weight: bolder;
`;
