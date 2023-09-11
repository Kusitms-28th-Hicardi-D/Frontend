import { Pagination } from "@mui/material";
import * as S from "./NewsMain.style";
import { useState } from "react";
import searchIcon from "../../../assets/icon/search.svg";
import menuDown from "../../../assets/icon/menu-down.svg";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function NewsMain() {
  const [listItem, setListItem] = useState([
    {
      content: "내용",
      createdDate: "날짜",
      image: "url",
      title: "제목",
      writer: "작성자",
    },
    {
      content: "내용",
      createdDate: "날짜",
      image: "url",
      title: "제목",
      writer: "작성자",
    },
    {
      content: "내용",
      createdDate: "날짜",
      image: "url",
      title: "제목",
      writer: "작성자",
    },
    {
      content: "내용",
      createdDate: "날짜",
      image: "url",
      title: "제목",
      writer: "작성자",
    },
    {
      content: "내용",
      createdDate: "날짜",
      image: "url",
      title: "제목",
      writer: "작성자",
    },
  ]);

  return (
    <S.ViewContainer>
      <S.Banner>
        <S.BannerTxt>하이카디 소식</S.BannerTxt>
        <S.BannerTitle>
          하이카디의 새로운 소식을
          <br />
          확인해보세요
        </S.BannerTitle>
        <S.BannerBtn>
          <S.BannerBtnTxt>하이카디 소식 구독하기</S.BannerBtnTxt>
          <KeyboardArrowRightIcon />
        </S.BannerBtn>
      </S.Banner>
      <S.ListTop>
        <S.ListCnt>
          게시글 총 <S.ListCntNum>134</S.ListCntNum>건
        </S.ListCnt>
        <S.ListFilter>
          <S.FilterCategoryBox>
            <S.FilterCategory>제목</S.FilterCategory>
            <S.FilterCategoryArrow src={menuDown} />
          </S.FilterCategoryBox>
          <S.FilterInputBox>
            <S.FilterInput placeholder="검색어를 입력해주세요." />
            <S.FilterSearch src={searchIcon} />
          </S.FilterInputBox>
        </S.ListFilter>
      </S.ListTop>
      <S.List>
        {listItem.map((el, idx) => (
          <S.ListItem>
            <S.ListTxt>
              <S.ListTitle>하이카디 소식의 제목이 들어가요</S.ListTitle>
              <S.ListInfoWrapper>
                <S.ListWriter>작성자</S.ListWriter>
                <S.ListCreatedAt>작성일자</S.ListCreatedAt>
              </S.ListInfoWrapper>
            </S.ListTxt>
            <S.ListImg />
          </S.ListItem>
        ))}
      </S.List>
      <S.Pagination>
        <KeyboardArrowLeftIcon />
        <S.PageNums>
          <S.PageNum selected>1</S.PageNum>
          <S.PageNum>2</S.PageNum>
          <S.PageNum>3</S.PageNum>
          <S.PageNum>4</S.PageNum>
          <S.PageNum>5</S.PageNum>
        </S.PageNums>
        <KeyboardArrowRightIcon />
      </S.Pagination>
    </S.ViewContainer>
  );
}

export default NewsMain;
