import * as S from "./BoardMain.style";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
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
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    await axios
      .get(`http://15.164.149.157:8082/api/board/notice`)
      .then((res) => {
        console.log(res);
        res.data.result.content.forEach((el, idx) => {
          setListData((prev) => [
            ...prev,
            {
              id: el.id,
              item: [idx, el.title, el.createdDate, el.viewCount],
            },
          ]);
          setTotalPage(res.data.result.totalPage);
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      : navigate(`/board/qna/${event.currentTarget.id}`); // 공지사항 상세보기
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
              게시글 총 <S.ListCntNum>134</S.ListCntNum>건
            </S.ListCnt>
            <S.ListFilter>
              <S.DateFilterCategoryBox>
                <S.FilterCategory>일주일</S.FilterCategory>
                <ArrowDropDownIcon />
              </S.DateFilterCategoryBox>
              <S.TitleFilterCategoryBox>
                <S.FilterCategory>제목</S.FilterCategory>
                <ArrowDropDownIcon />
              </S.TitleFilterCategoryBox>
              <S.FilterInputBox>
                <S.FilterInput placeholder="검색어를 입력해주세요." />
                <SearchIcon />
              </S.FilterInputBox>
            </S.ListFilter>
          </S.ListTop>

          {/* 표 */}
          <S.ContentTable>
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
          {/*  */}

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
