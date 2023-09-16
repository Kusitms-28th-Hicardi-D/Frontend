import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import * as S from "./ProductionMain.style";
import React from "react";
import HicardiInfo from "../../components/production/HicardiInfo";

export default function ProductionMain() {
  const [selectedMenu, setSelectedMenu] = useState("hicardi");

  const title = {
    hicardi: `편리하게 심전도 측정, 전송 및 분석\n더 나은 삶을 위한 스마트한 솔루션 HiCardi+`,
    nonin: "하이카디 플러스와 연동이 가능한\n산소포화도 측정 장비",
    additional: `하이카디와 함께\n사용할 수 있는 추가 서비스`,
  };

  const fileList = {
    hicardi: [
      "HiCardi 사용설명서",
      "HiCardi 제품 설명 슬라이드",
      "모니터링 장비 등록 방법",
      "하이카디 발주 프로세스 및 홀터장비 신고 방법",
    ],
    nonin: [
      "노닌 사용설명서",
      "노닌 제품설명회 자료",
      "노닌 3230 모델(클립형) 메뉴얼 & 사양서(spec)",
      "노닌 펄스옥시미터 3230 모델 수입인증서",
    ],
    additional: [
      "부정맥 전문의 원격 판독 서비스",
      "기기 손실, 망실에 관한 규정",
      "인공신장실, 투석실 보유 병의원 전략",
    ],
  };

  const btmTitle = {
    hicardi: "HiCardi",
    nonin: "노닌",
    additional: "추가 서비스",
  };

  const onClickMenu = (event) => {
    const value = event.target.id;
    setSelectedMenu(value);
  };

  const NewlineText = (text) =>
    text.split("\n").map((str) => (
      <React.Fragment key={str}>
        {str}
        <br />
      </React.Fragment>
    ));

  return (
    <>
      <S.MenuBarContainer>
        <S.Menu
          id="hicardi"
          selected={selectedMenu === "hicardi"}
          onClick={onClickMenu}
        >
          하이카디
        </S.Menu>
        <S.Menu
          id="nonin"
          selected={selectedMenu === "nonin"}
          onClick={onClickMenu}
        >
          노닌
        </S.Menu>
        <S.Menu
          id="additional"
          selected={selectedMenu === "additional"}
          onClick={onClickMenu}
        >
          추가 서비스
        </S.Menu>
      </S.MenuBarContainer>
      <S.TopContainer>
        <S.TxtContainer>
          <S.Title>{NewlineText(title[selectedMenu])}</S.Title>
          <S.BuyBtn
            onClick={() => {
              console.log(fileList[selectedMenu]);
            }}
          >
            <S.BtnTxt>구매하기</S.BtnTxt>
            <KeyboardArrowRight style={{ color: "#19afdd" }} />
          </S.BuyBtn>
        </S.TxtContainer>
        <Carousel />
      </S.TopContainer>
      {selectedMenu === "hicardi" && <HicardiInfo />}
      <S.BtmContainer>
        <S.BtmTitle>
          {btmTitle[selectedMenu]}에 대한 모든 정보는 여기에서 확인해보세요
        </S.BtmTitle>
        <S.FileWrapper>
          {fileList[selectedMenu].map((el) => (
            <S.File>
              <S.FileTxt>{el}</S.FileTxt>
              <KeyboardArrowRight />
            </S.File>
          ))}
        </S.FileWrapper>
      </S.BtmContainer>
    </>
  );
}
