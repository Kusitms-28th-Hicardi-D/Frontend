import * as S from "./NewsDetail.style";

export default function NewsDetail() {
  return (
    <S.ViewContainer>
      <S.Title>하이카디 소식의 새로운 게시글 제목</S.Title>
      <S.PostInfoWrapper>
        <S.PostInfo>작성자</S.PostInfo>
        <S.PostInfo>작성일자</S.PostInfo>
      </S.PostInfoWrapper>
      <S.Contents>내용부분이 들어갈거에요</S.Contents>
      <S.AttachTitle>첨부파일 2개</S.AttachTitle>
      <S.AttatchButton>파일명</S.AttatchButton>
      <S.AttatchButton>파일명</S.AttatchButton>
    </S.ViewContainer>
  );
}
