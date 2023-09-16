import { useEffect, useState } from "react";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import * as S from "./ProductionMain.style";
import React from "react";
import HicardiInfo from "../../components/production/HicardiInfo";
import axios from "axios";
import VideoCarousel from "../../components/carousel/VIdeoCarousel";

export default function ProductionMain() {
  const [selectedMenu, setSelectedMenu] = useState("hicardi");

  const title = {
    hicardi: `편리하게 심전도 측정, 전송 및 분석\n더 나은 삶을 위한 스마트한 솔루션 HiCardi+`,
    nonin: "하이카디 플러스와 연동이 가능한\n산소포화도 측정 장비",
    addService: `하이카디와 함께\n사용할 수 있는 추가 서비스`,
  };

  const [fileList, setFileList] = useState([]);
  const [videoList, setVidioList] = useState([]);

  const btmTitle = {
    hicardi: "HiCardi",
    nonin: "노닌",
    addService: "추가 서비스",
  };

  const fetchData = async () => {
    await axios
      .get(`http://15.164.149.157/api/intro/${selectedMenu}`)
      .then((res) => {
        console.log(res);
        setFileList([...res.data.result.introInfoList]);
        setVidioList([...res.data.result.introVideoList]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, [selectedMenu]);

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

  // 외부 링크로 이동
  const onClickItem = (event) => {
    window.open(fileList[event.currentTarget.id].linkUrl, "_blank");
  };

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
          id="addService"
          selected={selectedMenu === "addService"}
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
              console.log(videoList);
            }}
          >
            <S.BtnTxt>구매하기</S.BtnTxt>
            <KeyboardArrowRight style={{ color: "#19afdd" }} />
          </S.BuyBtn>
        </S.TxtContainer>

        {(selectedMenu === "hicardi" || selectedMenu === "nonin") && (
          <VideoCarousel urlList={videoList.map((el) => el.videoUrl)} />
        )}
      </S.TopContainer>
      {selectedMenu === "hicardi" && <HicardiInfo />}
      <S.BtmContainer>
        <S.BtmTitle>
          {btmTitle[selectedMenu]}에 대한 모든 정보는 여기에서 확인해보세요
        </S.BtmTitle>
        <S.FileWrapper>
          {fileList?.map((el, idx) => (
            <S.File key={el.linkDesc} id={idx} onClick={onClickItem}>
              <S.FileTxt>{el.linkDesc}</S.FileTxt>
              <KeyboardArrowRight />
            </S.File>
          ))}
        </S.FileWrapper>
      </S.BtmContainer>
    </>
  );
}
