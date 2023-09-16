import { useNavigate } from "react-router-dom";
import * as S from "./ReportMain.style";
import { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "../../../components/pagination/pagination";
import axios from "axios";

export default function ReportMain() {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // 검색 기능
  const [isOpenCriteriaCmb, setIsOpenCriteriaCmb] = useState(false);
  const [criteria, setCriteria] = useState("title");
  const [keyword, setKeyword] = useState("");

  const onClickCmbBox = (event) => {
    setIsOpenCriteriaCmb((prev) => !prev);
  };

  const onClickCriteria = (event) => {
    setCriteria(event.target.id);
    setIsOpenCriteriaCmb(false);
  };

  const onChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const onSubmitSearch = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    fetchData();
  };

  // 리스트 불러오기
  const fetchData = async () => {
    await axios
      .get(`http://15.164.149.157/api/presscenter/report`, {
        params: {
          page: currentPage-1,
          size: 5,
          criteria,
          keyword,
        },
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

  // 외부 링크를 새 탭으로 열기
  const onClickItem = (event) => {
    window.open(event.currentTarget.id, "_blank");
  };

  return (
    <S.ViewContainer>
      <S.Banner>
        <S.BannerContents>
          <S.BannerTxt>보도자료</S.BannerTxt>
          <S.BannerTitle>
            하이카디의 다양한 보도자료를
            <br />
            한번에 확인해보세요
          </S.BannerTitle>
          <S.BannerBtn style={{ visibility: "hidden" }}>
            <S.BannerBtnTxt>하이카디 소식 구독하기</S.BannerBtnTxt>
            <KeyboardArrowRightIcon />
          </S.BannerBtn>
        </S.BannerContents>
      </S.Banner>
      <S.ListTop>
        <S.ListCnt onClick={() => console.log(data)}>
          게시글 총 <S.ListCntNum>{data.totalElements}</S.ListCntNum>건
        </S.ListCnt>
        <S.ListFilter>
          <S.FilterCategoryBox onClick={onClickCmbBox}>
            <S.FilterCategory>
              {criteria === "title"
                ? "제목"
                : criteria === "content"
                ? "내용"
                : "작성자"}
            </S.FilterCategory>
            <ArrowDropDownIcon />
          </S.FilterCategoryBox>
          <S.FilterInputBox onSubmit={onSubmitSearch}>
            <S.FilterInput
              onChange={onChangeKeyword}
              placeholder="검색어를 입력해주세요."
            />
            <S.FilterBtn>
              <SearchIcon />
            </S.FilterBtn>
          </S.FilterInputBox>

          {isOpenCriteriaCmb && (
            <S.FilterCmbBox>
              <S.FilterCmbItem id="title" onClick={onClickCriteria}>
                제목
              </S.FilterCmbItem>
              <S.FilterCmbItem id="content" onClick={onClickCriteria}>
                내용
              </S.FilterCmbItem>
              <S.FilterCmbItem id="writer" onClick={onClickCriteria}>
                작성자
              </S.FilterCmbItem>
            </S.FilterCmbBox>
          )}
        </S.ListFilter>
      </S.ListTop>
      <S.List>
        {data.content?.map((el) => (
          <S.ListItem key={el.id} id={el.link} onClick={onClickItem}>
            <S.ListTxt>
              <S.ListTitle>{el.title}</S.ListTitle>
              <S.ListInfoWrapper>
                <S.ListCreatedAt>{el.pubDate}</S.ListCreatedAt>
              </S.ListInfoWrapper>
            </S.ListTxt>
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
