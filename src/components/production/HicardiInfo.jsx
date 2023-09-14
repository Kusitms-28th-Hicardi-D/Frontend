import styled from "styled-components";
import React from "react";

export default function () {
  const tableData = [
    [
      "환자 모니터링 솔루션\n홀터 솔루션",
      "환자 모니터링 솔루션\n홀터 솔루션",
      "홀터 솔루션",
    ],
    [
      "가벼운 무게(4g~18g)\n배터리 용량 24시간",
      "가벼운 무게(4g~18g)\n방수, 방진 가능\n배터리 용량 72시간\n호흡 수 측정 가능",
      "-",
    ],
    [
      "휴대폰을 통한 홀터 검사",
      "휴대폰을 통한 홀터 검사",
      "휴대폰을 없이 홀터 검사",
    ],
  ];

  const NewlineText = (text) =>
    text.split("\n").map((str) => (
      <React.Fragment key={str}>
        {str}
        <br />
      </React.Fragment>
    ));

  return (
    <ViewContainer>
      <Title>HiCardi, HiCardi+, HiCardi+ H100 이런 차이가 있습니다</Title>
      <ContentTable>
        <thead>
          <tr>
            <ContentHeader style={{ borderTopLeftRadius: "20px" }}>
              HiCardi
            </ContentHeader>
            <ContentHeader>HiCardi+</ContentHeader>
            <ContentHeader style={{ borderTopRightRadius: "20px" }}>
              HiCardi+ H100
            </ContentHeader>
          </tr>
        </thead>
        <tbody>
          {tableData.map((el) => (
            <tr>
              {el.map((element) => (
                <TableCell>{NewlineText(element)}</TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </ContentTable>
    </ViewContainer>
  );
}

const ViewContainer = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 1200px;
  margin-bottom: 6rem;
`;

const Title = styled.div`
  color: var(--text-text-01, #242424);

  font-family: Noto Sans CJK KR;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

// 표
const ContentTable = styled.table`
  width: 100%;
  border-radius: 20px;
  background: var(--ui-surface, #fff);
  box-shadow: 0px 0px 5px 0px rgba(0, 51, 150, 0.25);
`;

const ContentHeader = styled.th`
  text-align: center;
  padding: 1.5rem 0;

  background: var(--ui-surface-04, #e8f7fc);
  color: var(--ui-primary, #19afdd);
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
`;

const TableCell = styled.td`
  height: 12rem;
  color: var(--text-text-01, #242424);
  text-align: center;
  border: 1px solid var(--blue-blue-50, #e8f7fc);

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.8rem;
`;
