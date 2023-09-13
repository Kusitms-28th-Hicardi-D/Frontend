import * as S from "./NewsSub.style";

export default function NewsSub() {
  return (
    <S.ViewContainer>
      <S.Title>하이카디 소식 구독하기</S.Title>
      <S.SubTitle>매달 업로드되는 하이카디 소식 뉴스레터를 보내드립니다.</S.SubTitle>
      <S.Label>이메일</S.Label>
      <S.Input placeholder='이메일을 입력하세요'></S.Input>
      <S.Label>연락처</S.Label>
      <S.Input placeholder="'-'없이 입력해주세요"></S.Input>
      <S.SubmitBtn>제출하기</S.SubmitBtn>
    </S.ViewContainer>
  );
}
