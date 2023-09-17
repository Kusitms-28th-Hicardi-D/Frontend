import React from "react";
import {
  ArticleCard,
  ArticleViewBtn,
  CustomCard,
  ImageBox,
  SubTitle,
  Title,
} from "./PatientArticle.style";

function PatientArticle({ info }) {
  // console.log(info.fileKey);
  const onClickItem = () => {
    window.open(
      `https://devmincho.site/api/solution/test/file?key=${info.fileKey}&downloadFileName=${info.title}.pdf`,
      "_blank"
    );
  };

  return (
    <ArticleCard>
      <ImageBox>
        <img
          alt="product image"
          src={info.image}
          style={{ width: "100%", height: "100%" }}
        />
      </ImageBox>
      <CustomCard>
        <Title>{info.category}</Title>
        <SubTitle>{info.title}</SubTitle>
      </CustomCard>
      <ArticleViewBtn
        variant="contained"
        style={{ borderRadius: "10px", backgroundColor: "#42BDE3" }}
        onClick={() => {
          onClickItem(info.fileKey);
        }}
      >
        View More
      </ArticleViewBtn>
    </ArticleCard>
  );
}

export default PatientArticle;
