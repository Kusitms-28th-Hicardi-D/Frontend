import {
  Btn,
  BtnBox,
  Content,
  ContentBox,
  Title,
  TitleBox,
  ViewContainer,
} from "./OrderQna.style";

function OrderQna() {
  return (
    <ViewContainer>
      <TitleBox>
        <Title>상품 Q&A</Title>
      </TitleBox>
      <ContentBox>
        <Content>게시물이 없습니다</Content>
      </ContentBox>
      <BtnBox>
        <Btn
          style={{
            backgroundColor: "white",
            padding: "0.5rem 1rem 0.5rem 1rem",
            border: "1px solid gray",
            color: "black",
            borderRadius: "30px",
            marginRight: "0.5rem",
            fontWeight: "500",
          }}
        >
          문의하기
        </Btn>
        <Btn
          style={{
            backgroundColor: "black",
            padding: "0.5rem 1rem 0.5rem 1rem",
            border: "1px solid gray",
            color: "white",
            borderRadius: "30px",
            fontWeight: "500",
          }}
        >
          모두보기
        </Btn>
      </BtnBox>
    </ViewContainer>
  );
}

export default OrderQna;
