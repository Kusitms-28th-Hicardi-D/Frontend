import styled from "styled-components";
import bannerBg from "../../../assets/img/BannerBg.png";

export const ViewContainer = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 1200px;
`;

export const Banner = styled.div`
  height: auto;
  border-radius: 20px;
  margin-bottom: 2rem;
`;

export const BannerContents = styled.div`
  padding: 3rem;
  padding-top: 5%;
  padding-bottom: 10%;

  background: url(${bannerBg}), lightgray 50% / cover no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

export const BannerTxt = styled.div`
  color: var(--ui-surface-05, #c8ecf7);
  font-family: Noto Sans CJK KR;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const BannerTitle = styled.div`
  color: var(--text-text-06, #fff);
  font-family: Noto Sans CJK KR;
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.8rem;
  margin-bottom: 2rem;
`;

export const BannerBtn = styled.div`
  display: flex;
  width: 250px;
  height: 10%;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
`;

export const BannerBtnTxt = styled.div`
  color: var(--Black, #000);
  font-family: Noto Sans CJK KR;
  font-size: 0.8rem;
  font-weight: 700;
`;

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
  width: 40%;
  max-width: 450px;
  height: 2rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 51, 150, 0.25);
  border-radius: 5px;
`;

export const FilterCategoryBox = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  border-right: 2px solid var(--gray-gray-70, #dfdfdf);
  background: var(--ui-surface, #fff);
  padding-left: 0.5rem;
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

export const FilterInputBox = styled.div`
  width: 75%;
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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ListItem = styled.div`
  display: flex;
  background-color: antiquewhite;
  border-radius: 8px;
  background: var(--ui-surface-01, #f6f6f6);
  cursor: pointer;
`;

export const ListTxt = styled.div`
  width: 80%;
  background: var(--ui-surface-01, #f6f6f6);
  padding: 1.5rem 1.2rem;
`;

export const ListTitle = styled.div`
  overflow: hidden;
  color: var(--text-text-01, #242424);
  text-overflow: ellipsis;
  margin-bottom: 0.5rem;

  font-family: Noto Sans CJK KR;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const ListInfoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ListWriter = styled.div`
  color: var(--text-text-03, #8b8b8b);
  font-family: Noto Sans CJK KR;
  font-size: 0.7rem;
  font-weight: 700;
`;

export const ListCreatedAt = styled(ListWriter)`
  color: var(--text-text-04, #c1c1c1);
`;

export const ListImg = styled.img`
  width: 20%;
  background: var(--ui-surface-04, #e8f7fc);
`;

// 페이지네이션
export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
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
