import * as S from "./BoardMain.style";
import React, { useEffect, useState } from "react";
import FAQ from "../../components/board/FAQ";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Pagination from "../../components/pagination/pagination";

export default function () {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("notice");
  const [listData, setListData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // 검색 기능
  const [isOpenOptionCmb, setIsOpenOptionCmb] = useState(false);
  const [isOpenCriteriaCmb, setIsOpenCriteriaCmb] = useState(false);
  const [option, setOption] = useState("week");
  const [criteria, setCriteria] = useState("title");
  const [keyword, setKeyword] = useState("");

  const onClickCmbBox = (event) => {
    if (event.currentTarget.id === "option") {
      setIsOpenOptionCmb((prev) => !prev);
      setIsOpenCriteriaCmb(false);
    } else {
      setIsOpenCriteriaCmb((prev) => !prev);
      setIsOpenOptionCmb(false);
    }
  };

  const onClickOption = (event) => {
    setOption(event.target.id);
    setIsOpenOptionCmb(false);
  };

  const onClickCriteria = (event) => {
    setCriteria(event.target.id);
    setIsOpenCriteriaCmb(false);
  };

  const onChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  // 데이터 불러오기
  const fetchQnaData = async () => {
    await axios
      .get(`http://15.164.149.157:8082/api/board/qna`, {
        params: {
          page: currentPage - 1,
          size: 7,
          criteria,
          option,
          keyword,
        },
      })
      .then((res) => {
        console.log(res);
        setListData([]);
        res.data.result.content.forEach((el) => {
          setListData((prev) => [
            ...prev,
            {
              id: el.id,
              item: [el.num, el.title, el.createdDate, el.viewCount],
            },
          ]);
          setTotalPage(res.data.result.totalPage);
          setTotalElements(res.data.result.totalElements);
        });
      })
      .catch((err) => console.error(err));
  };

  const fetchNoticeData = async () => {
    await axios
      .get(`http://15.164.149.157:8082/api/board/notice`, {
        params: {
          page: currentPage - 1,
          size: 7,
          criteria,
          option,
          keyword,
        },
      })
      .then((res) => {
        console.log(res);
        setListData([]);
        res.data.result.content.forEach((el) => {
          setListData((prev) => [
            ...prev,
            {
              id: el.id,
              item: [el.num, el.title, el.createdDate, el.viewCount],
            },
          ]);
          setTotalPage(res.data.result.totalPage);
          setTotalElements(res.data.result.totalElements);
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    selectedMenu === "qna" && fetchQnaData();
    selectedMenu === "notice" && fetchNoticeData();
  }, [selectedMenu, currentPage]);

  // 검색하기
  const onSubmitSearch = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    if (selectedMenu === "notice") fetchNoticeData();
    if (selectedMenu === "qna") fetchQnaData();
  };

  const NewlineText = (text) =>
    text.split("\n").map((str) => (
      <React.Fragment key={str}>
        {str}
        <br />
      </React.Fragment>
    ));

  const onClickMenu = (event) => {
    setSelectedMenu(event.target.id);
  };

  const onClickItem = (event) => {
    selectedMenu === "qna"
      ? navigate(`/board/qna/${event.currentTarget.id}`) // qna 상세보기
      : navigate(`/board/notice/${event.currentTarget.id}`); // 공지사항 상세보기
  };

  return (
    <S.ViewContainer>
      <S.Title>
        {NewlineText("하이카디 이용에 관한\n궁금증을 해결해드립니다.")}
      </S.Title>
      <S.MenuBar>
        <S.Menu
          id="notice"
          onClick={onClickMenu}
          selected={selectedMenu === "notice"}
        >
          공지사항
        </S.Menu>
        <S.Menu
          id="qna"
          onClick={onClickMenu}
          selected={selectedMenu === "qna"}
        >
          상품 Q&A
        </S.Menu>
        <S.Menu
          id="faq"
          onClick={onClickMenu}
          selected={selectedMenu === "faq"}
        >
          FAQ
        </S.Menu>
      </S.MenuBar>

      {selectedMenu === "faq" ? (
        <FAQ />
      ) : (
        <>
          {/* 표 상단 */}
          <S.ListTop>
            <S.ListCnt onClick={() => console.log(listData)}>
              게시글 총 <S.ListCntNum>{totalElements}</S.ListCntNum>건
            </S.ListCnt>
            <S.ListFilter>
              <S.FilterCategoryBox id="option" onClick={onClickCmbBox}>
                <S.FilterCategory>
                  {option === "all"
                    ? "전체"
                    : option === "week"
                    ? "일주일"
                    : "한달"}
                </S.FilterCategory>
                <ArrowDropDownIcon />
              </S.FilterCategoryBox>
              <S.FilterCategoryBox id="criteria" onClick={onClickCmbBox}>
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
                  name="search"
                  autoComplete="off"
                  placeholder="검색어를 입력해주세요."
                  onChange={onChangeKeyword}
                />
                <S.FilterBtn>
                  <SearchIcon />
                </S.FilterBtn>
              </S.FilterInputBox>
              {isOpenOptionCmb && (
                <S.FilterCmbBox>
                  <S.FilterCmbItem id="all" onClick={onClickOption}>
                    전체
                  </S.FilterCmbItem>
                  <S.FilterCmbItem id="week" onClick={onClickOption}>
                    일주일
                  </S.FilterCmbItem>
                  <S.FilterCmbItem id="month" onClick={onClickOption}>
                    한달
                  </S.FilterCmbItem>
                </S.FilterCmbBox>
              )}
              {isOpenCriteriaCmb && (
                <S.FilterCmbBox style={{ left: "100px" }}>
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

          {/* 표 */}
          <S.ContentTable selectedMenu={selectedMenu}>
            <thead>
              <tr>
                <S.ContentHeader style={{ width: "5%" }}>NO</S.ContentHeader>
                <S.ContentHeader style={{ width: "75%" }}>제목</S.ContentHeader>
                <S.ContentHeader style={{ width: "12%" }}>
                  작성일
                </S.ContentHeader>
                <S.ContentHeader style={{ width: "8%" }}>조회</S.ContentHeader>
              </tr>
            </thead>
            <tbody>
              {listData?.map((el) => (
                <tr
                  id={el.id}
                  style={{ cursor: "pointer" }}
                  onClick={onClickItem}
                >
                  {el.item?.map((element) => (
                    <S.TableCell>{element}</S.TableCell>
                  ))}
                </tr>
              ))}
            </tbody>
          </S.ContentTable>

          {selectedMenu === "qna" && (
            <S.BtnContainer>
              <S.WriteBtn>글쓰기</S.WriteBtn>
            </S.BtnContainer>
          )}

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
          />
        </>
      )}
    </S.ViewContainer>
  );
}
