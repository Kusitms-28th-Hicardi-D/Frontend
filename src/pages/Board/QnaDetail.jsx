import * as S from "./QnaDetail.style";
import qstIcon from "../../assets/icon/Q.svg";
import ansIcon from "../../assets/icon/A.svg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function QnaDetail() {
  const { qnaId } = useParams();
  const [data, setData] = useState({});

  // 데이터 불러오기
  const fetchQnaData = async () => {
    await axios
      .get(`http://15.164.149.157/api/board/qna/${qnaId}`)
      .then((res) => {
        console.log(res);
        setData({ ...res.data.result });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchQnaData();
  }, []);

  return (
    <S.ViewContainer>
      <S.TitleWrapper>
        <img src={qstIcon} />
        <S.Title>{data.title}</S.Title>
      </S.TitleWrapper>
      <S.PostInfoWrapper>
        <S.PostInfo>{data.writer}</S.PostInfo>
        <S.PostInfo>{data.date}</S.PostInfo>
      </S.PostInfoWrapper>
      <S.QstBox>{data.question}</S.QstBox>

      <S.TitleWrapper>
        <img src={ansIcon} />
        <S.AnsTitle>답변내용</S.AnsTitle>
      </S.TitleWrapper>
      <S.AnsBox>{data.answer}</S.AnsBox>
    </S.ViewContainer>
  );
}
