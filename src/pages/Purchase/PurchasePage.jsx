import React, { useEffect, useState } from "react";
import * as S from "./PurchasePage.style";
import { getItems } from "../../apis/axiosInstance";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ImportExportRounded } from "@mui/icons-material";

function PurchasePage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [items, setItems] = useState();
  const { state } = useLocation();
  async function fetchItems({ text }) {
    try {
      const response = await getItems(text);
      setItems(response.result.productList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (state?.selectedMenu) {
      if (state?.selectedMenu == "hicardi") setCategory("main");
      else if (state?.selectedMenu == "nonin") setCategory("assistant");
      else if (state?.selectedMenu == "addService") setCategory("addition");
    } else {
      setCategory("all");
    }

    fetchItems({ text: category });
  }, []);

  const onClickMenu = (event) => {
    setCategory(event.target.id);
    fetchItems({ text: event.target.id });
  };

  return (
    <S.ViewContainer>
      <S.ViewHeader>
        <S.HeaderTextBox onClick={() => console.log(state)}>
          <S.HeaderTitle>HiCardi +</S.HeaderTitle>
          <S.HeaderSubTitle>스마트한 병원을 위한 솔루션</S.HeaderSubTitle>
          <S.HeaderSubTitle>Hicardi+ 제품을 만나보세요.</S.HeaderSubTitle>
        </S.HeaderTextBox>
      </S.ViewHeader>
      <S.IndexContainer>
        <S.IndexBtnWrapper>
          <S.IndexBtn
            id="all"
            selected={category === "all"}
            onClick={onClickMenu}
          >
            전체
          </S.IndexBtn>
          <S.IndexBtn
            id="main"
            selected={category === "main"}
            onClick={onClickMenu}
          >
            기기 본체
          </S.IndexBtn>
          <S.IndexBtn
            id="assistant"
            selected={category === "assistant"}
            onClick={onClickMenu}
          >
            추가 용품
          </S.IndexBtn>
          <S.IndexBtn
            id="addition"
            selected={category === "addition"}
            onClick={onClickMenu}
          >
            추가 서비스
          </S.IndexBtn>
        </S.IndexBtnWrapper>
        {/* <Dropdown>dropdown</Dropdown> */}
      </S.IndexContainer>
      <S.ProductContainer>
        {items &&
          items.map((element, index) => {
            return (
              <S.ProductWrapper
                onClick={() => {
                  navigate(`/purchase/detail/${element.productId}`);
                }}
              >
                <S.ImageWrapper>
                  <img
                    src={element.imageUrl}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </S.ImageWrapper>
                <S.TextWrapper>
                  <S.ItemTitle>{element.title}</S.ItemTitle>
                  <S.ItemSubTitle>{element.content}</S.ItemSubTitle>
                </S.TextWrapper>
                <S.OrderBtnWrapper>
                  <S.ItemPrice>
                    {element.price !== 0 && element.price.toLocaleString()}
                  </S.ItemPrice>
                  <S.OrderBtnBox>
                    <S.BtnWrapper>
                      <ShoppingCartSharpIcon style={{ fontSize: "2rem" }} />
                    </S.BtnWrapper>
                    <S.BtnWrapper>
                      <FavoriteSharpIcon style={{ fontSize: "2rem" }} />
                    </S.BtnWrapper>
                  </S.OrderBtnBox>
                </S.OrderBtnWrapper>
              </S.ProductWrapper>
            );
          })}
      </S.ProductContainer>
    </S.ViewContainer>
  );
}

export default PurchasePage;
