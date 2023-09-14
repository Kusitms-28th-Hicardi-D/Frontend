import * as S from "./BoardMain.style";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import React, { useState } from "react";
import FAQ from "../../components/board/FAQ";

export default function () {
  const listData = [
    ["1", "제목", "2023/09/15", "102"],
    ["2", "제목", "2023/09/15", "102"],
    ["3", "제목", "2023/09/15", "102"],
    ["4", "제목", "2023/09/15", "102"],
    ["5", "제목", "2023/09/15", "102"],
    ["6", "제목", "2023/09/15", "102"],
    ["7", "제목", "2023/09/15", "102"],
  ];

  const [selectedMenu, setSelectedMenu] = useState("notice");

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
            <S.ListCnt>
              게시글 총 <S.ListCntNum>134</S.ListCntNum>건
            </S.ListCnt>
            <S.ListFilter>
              <S.DateFilterCategoryBox>
                <S.FilterCategory>일주일</S.FilterCategory>
                <S.FilterCategoryArrow />
              </S.DateFilterCategoryBox>
              <S.TitleFilterCategoryBox>
                <S.FilterCategory>제목</S.FilterCategory>
                <S.FilterCategoryArrow />
              </S.TitleFilterCategoryBox>
              <S.FilterInputBox>
                <S.FilterInput placeholder="검색어를 입력해주세요." />
                <S.FilterSearch />
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
              {listData.map((el) => (
                <tr style={{ cursor: "pointer" }}>
                  {el.map((element) => (
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

          <S.Pagination>
            <KeyboardArrowLeft style={{ cursor: "pointer" }} />
            <S.PageNums>
              <S.PageNum selected>1</S.PageNum>
              <S.PageNum>2</S.PageNum>
              <S.PageNum>3</S.PageNum>
              <S.PageNum>4</S.PageNum>
              <S.PageNum>5</S.PageNum>
            </S.PageNums>
            <KeyboardArrowRight style={{ cursor: "pointer" }} />
          </S.Pagination>
        </>
      )}
    </S.ViewContainer>
  );
}
