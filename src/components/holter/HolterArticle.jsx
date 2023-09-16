import React from "react";
import {
  ArticleCard,
  ArticleContent,
  ArticleMedia,
  ArticleViewBtn,
  CustomCard,
  ImageBox,
  SubTitle,
  Title,
} from "./HolterArticle.style";
import { Button } from "@mui/material";

function HolterArticle({ info }) {
  return (
    <ArticleCard>
      <ImageBox>
        <img
          alt="product image"
          src={require("../../assets/image/HolterIntro.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </ImageBox>
      <CustomCard>
        <Title>{info.writer}</Title>
        <SubTitle>{info.content}</SubTitle>
      </CustomCard>
      <ArticleViewBtn
        variant="contained"
        style={{ borderRadius: "10px", backgroundColor: "#42BDE3" }}
      >
        View More
      </ArticleViewBtn>
    </ArticleCard>
  );
}

export default HolterArticle;
