import { useNavigate } from "react-router-dom";
import * as S from "./NewsMain.style";
import { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Pagination from "../../../components/pagination/pagination";

export default function NewsMain() {
  const navigate = useNavigate();

  const [data, setData] = useState({});

  // 페이지네이션
  const [currentPageSection, setCurrentPageSection] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 현재 페이지 범위 계산
  const startItem = (currentPageSection - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPageSection * itemsPerPage, data.totalPage);

  const pageButtons = [];
  for (let i = startItem; i <= endItem; i++) {
    pageButtons.push(i);
  }

  const goToPreviousPage = () => {
    setCurrentPageSection(Math.max(currentPageSection - 5, 1));
  };

  const goToNextPage = () => {
    setCurrentPageSection(
      Math.min(currentPageSection + 5, Math.ceil(data.totalPage / itemsPerPage))
    );
  };

  // 리스트 불러오기
  const fetchData = async () => {
    await axios
      .get(`http://15.164.149.157/api/presscenter/news`, {
        params: { page: currentPage, size: 5 },
      })
      .then((res) => {
        console.log(res);
        setData({ ...res.data.result });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

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
        <S.ListCnt onClick={() => console.log(data)}>
          게시글 총 <S.ListCntNum>134</S.ListCntNum>건
        </S.ListCnt>
        <S.ListFilter>
          <S.FilterCategoryBox>
            <S.FilterCategory>제목</S.FilterCategory>
            <ArrowDropDownIcon />
          </S.FilterCategoryBox>
          <S.FilterInputBox>
            <S.FilterInput placeholder="검색어를 입력해주세요." />
            <SearchIcon />
          </S.FilterInputBox>
        </S.ListFilter>
      </S.ListTop>
      <S.List>
        {data.content?.map((el) => (
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

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={data.totalPage}
      />
    </S.ViewContainer>
  );
}
