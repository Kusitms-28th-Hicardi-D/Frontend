import styled from "styled-components";
import { media } from "../../styles/media.style";
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

  @media ${media.tablet} {
  }

  @media ${media.mobile} {
    font-size: 2rem;
    line-height: 3rem;
  }
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

  @media ${media.tablet} {
  }

  @media ${media.mobile} {
    margin-bottom: 0.5rem;
  }
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
  position: relative;
  height: 2rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 51, 150, 0.25);
  border-radius: 5px;
`;

export const FilterCategoryBox = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  border-right: 2px solid var(--gray-gray-70, #dfdfdf);
  background: var(--ui-surface, #fff);
  padding-left: 0.5rem;
  cursor: pointer;
`;

export const FilterCategory = styled.div`
  color: var(--text-text-01, #242424);
  font-family: Noto Sans CJK KR;
  font-size: 0.7rem;
  font-weight: 500;
`;

export const FilterCategoryArrow = styled.img`
  cursor: pointer;
`;

export const FilterInputBox = styled.form`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 5px 5px 0px;
  background: var(--ui-surface, #fff);
  padding: 0 0.5rem;
  @media ${media.tablet} {
  }

  @media ${media.mobile} {
    width: auto;
  }
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
  @media ${media.tablet} {
  }

  @media ${media.mobile} {
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterCmbBox = styled.div`
  position: absolute;
  width: 100px;
  top: calc(2rem + 10px);
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 51, 150, 0.25);
  background-color: #fff;
`;

export const FilterCmbItem = styled.div`
  color: var(--text-text-01, #242424);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 1rem 0.5rem;
  cursor: pointer;

  &:hover {
    color: #19afdd;
  }
`;

// 표
export const ContentTable = styled.table`
  width: 100%;

  color: var(--text-text-02, #555);
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  margin-bottom: ${(props) => (props.selectedMenu === "notice" ? "2rem" : "0")};
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
  margin-bottom: 2rem;
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
