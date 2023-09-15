import { useState } from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Pagination(props) {
  const [currentPageSection, setCurrentPageSection] = useState(1);
  const itemsPerPage = 5;

  // 현재 페이지 범위 계산
  const startItem = (currentPageSection - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPageSection * itemsPerPage, props.totalPage);

  const pageButtons = [];
  for (let i = startItem; i <= endItem; i++) {
    pageButtons.push(i);
  }

  const goToPreviousPage = () => {
    setCurrentPageSection(Math.max(currentPageSection - 5, 1));
  };

  const goToNextPage = () => {
    setCurrentPageSection(
      Math.min(
        currentPageSection + 5,
        Math.ceil(props.totalPage / itemsPerPage)
      )
    );
  };

  return (
    <PaginationContainer>
      <KeyboardArrowLeftIcon
        style={{
          cursor: "pointer",
          visibility: props.totalPage > 5 ? "visible" : "hidden",
        }}
        onClick={goToPreviousPage}
      />
      <PageNums>
        {pageButtons.map((el) => (
          <PageNum
            onClick={() => props.setCurrentPage(el)}
            selected={el === props.currentPage}
          >
            {el}
          </PageNum>
        ))}
      </PageNums>
      <KeyboardArrowRightIcon
        style={{
          cursor: "pointer",
          visibility: props.totalPage > 5 ? "visible" : "hidden",
        }}
        onClick={goToNextPage}
      />
    </PaginationContainer>
  );
}

// 페이지네이션
const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const PageNums = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PageNum = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding-bottom: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${(props) => (props.selected ? "#19AFDD" : "#FFF")};
  box-shadow: 0px 0px 5px 0px rgba(0, 51, 150, 0.25);

  color: ${(props) => (props.selected ? "#FFF" : "#242424")};
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;
