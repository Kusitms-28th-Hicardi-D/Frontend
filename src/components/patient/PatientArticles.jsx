import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { useRecoilValue } from "recoil";
import { productState } from "../../recoil/normal/atoms";
import PatientArticle from "./PatientArticle";
import { getSolution } from "../../apis/axiosInstance";
import { media } from "../../styles/media.style";

function PatientArticles() {
  const [holterInfo, setHolterInfo] = useState([]);
  async function fetchSolution() {
    const response = await getSolution("holter");
    setHolterInfo(response.result.tests);
  }

  useEffect(() => {
    fetchSolution();
  }, []);

  return (
    <EContainer>
      <Title>환자 모니터링 솔루션의 임상적 유효성을 증명했습니다</Title>
      <ArticleContainer>
        {holterInfo &&
          holterInfo.map((element) => {
            return <PatientArticle info={element} />;
          })}
      </ArticleContainer>
    </EContainer>
  );
}
export default PatientArticles;

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
  flex-flow: row wrap;
  box-sizing: border-box;
  justify-content: center;
  align-content: flex-start;
`;

const Title = styled(Words)`
  font-weight: bolder;
  font-weight: 800;
  letter-spacing: 0.1rem;
  font-size: 3rem;

  @media ${media.tablet} {
    font-size: 1.7rem;
  }

  @media ${media.mobile} {
    font-size: 1.3rem;
  }
`;
