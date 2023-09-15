import styled from "styled-components";

export const ViewContainer = styled.div`
  margin: auto; 
  width: 90vw;
  max-width: 1200px;
`;

export const Title = styled.div`
  margin: 7rem 0;
  color: var(--text-text-01, #242424);
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.6rem;
`;

export const MenuBar = styled.div`
  display: flex;
  border-bottom: 2px solid var(--gray-gray-70, #dfdfdf);
  margin-bottom: 3rem;
`;

export const Menu = styled.div`
  padding: 1rem 2.5rem;

  color: ${(props) => (props.selected ? "#242424" : "#C1C1C1")};
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  border-bottom: ${(props) => (props.selected ? "2px solid #242424" : "none")};
  cursor: pointer;
`;

// 표 상단
export const ListTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ListCnt = styled.div`
  color: var(--text-text-02, #555);
  font-family: Noto Sans CJK KR;
  font-size: 0.7rem;
  font-weight: 500;
`;

export const ListCntNum = styled.span`
  color: var(--ui-primary, #19afdd);
`;

export const ListFilter = styled.div`
  display: flex;
  max-width: 450px;
  height: 2rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 51, 150, 0.25);
  border-radius: 5px;
`;

export const TitleFilterCategoryBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  border-right: 2px solid var(--gray-gray-70, #dfdfdf);
  background: var(--ui-surface, #fff);
  padding-left: 0.5rem;
`;

export const DateFilterCategoryBox = styled(TitleFilterCategoryBox)``;

export const FilterCategory = styled.div`
  color: var(--text-text-01, #242424);
  font-family: Noto Sans CJK KR;
  font-size: 0.7rem;
  font-weight: 500;
`;

export const FilterCategoryArrow = styled.img`
  cursor: pointer;
`;

export const FilterInputBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 5px 5px 0px;
  background: var(--ui-surface, #fff);
  padding-left: 0.5rem;
`;

export const FilterInput = styled.input`
  color: var(--text-text-03, #8b8b8b);
  font-family: Noto Sans CJK KR;
  font-size: 0.7rem;
  font-weight: 500;
  width: 80%;
  height: 70%;
  border: none;
  outline: none;
`;

export const FilterSearch = styled.img`
  cursor: pointer;
`;

// 표
export const ContentTable = styled.table`
  width: 100%;

  color: var(--text-text-02, #555);
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
`;

export const ContentHeader = styled.th`
  padding: 0.8rem 0;

  border-bottom: 2px solid var(--gray-gray-70, #dfdfdf);
  background: var(--ui-surface-01, #f6f6f6);
  font-weight: 700;
`;

export const TableCell = styled.td`
  padding: 1.2rem 0;
  color: var(--text-text-01, #242424);
  border-bottom: 2px solid var(--gray-gray-70, #dfdfdf);
`;

// 글쓰기 버튼
export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const WriteBtn = styled.button`
  border-radius: 8px;
  background: var(--ui-surface-06, #42bde3);
  padding: 0.8rem 3rem;

  color: var(--text-text-06, #fff);
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
`;

// 페이지네이션
export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

export const PageNums = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PageNum = styled.div`
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
