import axios from "axios";
import * as S from "./NewsSub.style";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NewsSub() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const onClickSubmit = async () => {
    await axios
      .post(`https://devmincho.site/api/presscenter/news/subscribe`, null, {
        params: {
          email,
        },
      })
      .then((res) => {
        console.log(res);
        alert("등록 완료");
        navigate(-1);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <S.ViewContainer>
      <S.Title onClick={() => console.log(location)}>
        하이카디 소식 구독하기
      </S.Title>
      <S.SubTitle>
        매달 업로드되는 하이카디 소식 뉴스레터를 보내드립니다.
      </S.SubTitle>
      <S.Label>이메일</S.Label>
      <S.Input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일을 입력하세요"
      ></S.Input>
      <S.Label>연락처</S.Label>
      <S.Input placeholder="'-'없이 입력해주세요"></S.Input>
      <S.SubmitBtn onClick={onClickSubmit}>제출하기</S.SubmitBtn>
    </S.ViewContainer>
  );
}
