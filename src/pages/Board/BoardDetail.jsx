import * as S from "./BoardDetail.style";
import qstIcon from "../../assets/icon/Q.svg";
import ansIcon from "../../assets/icon/A.svg";

export default function BoardDetail() {
  return (
    <S.ViewContainer>
      <S.TitleWrapper>
        <img src={qstIcon} />
        <S.Title>상품 문의 제목</S.Title>
      </S.TitleWrapper>
      <S.PostInfoWrapper>
        <S.PostInfo>작성자</S.PostInfo>
        <S.PostInfo>작성일자</S.PostInfo>
      </S.PostInfoWrapper>
      <S.QstBox>질문이 들어갈거에요</S.QstBox>

      <S.TitleWrapper>
        <img src={ansIcon} />
        <S.AnsTitle>답변내용</S.AnsTitle>
      </S.TitleWrapper>
      <S.AnsBox>답변이 들어갈거에요</S.AnsBox>
    </S.ViewContainer>
  );
}
