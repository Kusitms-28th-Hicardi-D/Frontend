import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as S from "./NewsMain.style";
import { useState } from "react";
import searchIcon from "../../../assets/icon/search.svg";
import menuDown from "../../../assets/icon/menu-down.svg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";

function NewsMain() {
  const navigate = useNavigate();
  const [listItem, setListItem] = useState([
    {
      id: "1",
      content: "내용",
      createdDate: "날짜",
      image: "url",
      title: "하이카디 소식의 제목",
      writer: "작성자",
    },
    {
      id: "2",
      content: "내용",
      createdDate: "날짜",
      image: "url",
      title: "하이카디 소식의 제목",
      writer: "작성자",
    },
    {
      id: "3",
      content: "내용",
      createdDate: "날짜",
      image: "url",
      title: "하이카디 소식의 제목",
      writer: "작성자",
    },
    {
      id: "4",
      content: "내용",
      createdDate: "날짜",
      image: "url",
      title: "하이카디 소식의 제목",
      writer: "작성자",
    },
    {
      id: "5",
      content: "내용",
      createdDate: "날짜",
      image: "url",
      title: "하이카디 소식의 제목",
      writer: "작성자",
    },
  ]);

  const fetchData = async () => {
    await axios
      .get(`http://15.164.149.157/api/presscenter/news`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <S.ViewContainer>
      <S.Banner>
        <S.BannerContents>
          <S.BannerTxt>하이카디 소식</S.BannerTxt>
          <S.BannerTitle>
            하이카디의 새로운 소식을
            <br />
            확인해보세요
          </S.BannerTitle>
          <S.BannerBtn
            onClick={() => {
                navigate("/pressCenter/news/sub");
            }}
          >
            <S.BannerBtnTxt>하이카디 소식 구독하기</S.BannerBtnTxt>
            <KeyboardArrowRightIcon />
          </S.BannerBtn>
        </S.BannerContents>
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
        {listItem.map((el) => (
          <S.ListItem
            onClick={() => {
              navigate(`/pressCenter/news/${el.id}`);
            }}
          >
            <S.ListTxt>
              <S.ListTitle>{el.title}</S.ListTitle>
              <S.ListInfoWrapper>
                <S.ListWriter>{el.writer}</S.ListWriter>
                <S.ListCreatedAt>{el.createdDate}</S.ListCreatedAt>
              </S.ListInfoWrapper>
            </S.ListTxt>
            <S.ListImg />
          </S.ListItem>
        ))}
      </S.List>
      <S.Pagination>
        <KeyboardArrowLeftIcon style={{ cursor: "pointer" }} />
        <S.PageNums>
          <S.PageNum selected>1</S.PageNum>
          <S.PageNum>2</S.PageNum>
          <S.PageNum>3</S.PageNum>
          <S.PageNum>4</S.PageNum>
          <S.PageNum>5</S.PageNum>
        </S.PageNums>
        <KeyboardArrowRightIcon style={{ cursor: "pointer" }} />
      </S.Pagination>
    </S.ViewContainer>
  );
}

export default NewsMain;
