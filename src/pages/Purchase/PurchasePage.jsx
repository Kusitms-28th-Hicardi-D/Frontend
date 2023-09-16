import React, { useEffect, useState } from "react";
import {
  BtnWrapper,
  Dropdown,
  HeaderSubTitle,
  HeaderTextBox,
  HeaderTitle,
  ImageWrapper,
  IndexBtn,
  IndexBtnWrapper,
  IndexContainer,
  ItemPrice,
  ItemSubTitle,
  ItemTitle,
  OrderBtnBox,
  OrderBtnWrapper,
  ProductContainer,
  ProductWrapper,
  TextWrapper,
  ViewContainer,
  ViewHeader,
} from "./PurchasePage.style";
import { useRecoilValue } from "recoil";
import { productState } from "../../recoil/normal/atoms";
import { getItems } from "../../apis/axiosInstance";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

function PurchasePage() {
  const [selected, setSelected] = useState(0);

  const [items, setItems] = useState();
  async function fetchItems() {
    try {
      const response = await getItems();
      setItems(response.result.productList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <ViewContainer>
      <ViewHeader>
        <HeaderTextBox>
          <HeaderTitle>HiCardi +</HeaderTitle>
          <HeaderSubTitle>스마트한 병원을 위한 솔루션</HeaderSubTitle>
          <HeaderSubTitle>Hicardi+ 제품을 만나보세요.</HeaderSubTitle>
        </HeaderTextBox>
      </ViewHeader>
      <IndexContainer>
        <IndexBtnWrapper>
          <IndexBtn
            selected={selected == 0 && true}
            onClick={() => {
              setSelected(0);
            }}
          >
            전체
          </IndexBtn>
          <IndexBtn
            selected={selected == 1 && true}
            onClick={() => {
              setSelected(1);
            }}
          >
            기기 본체
          </IndexBtn>
          <IndexBtn
            selected={selected == 2 && true}
            onClick={() => {
              setSelected(2);
            }}
          >
            추가 용품
          </IndexBtn>
          <IndexBtn
            selected={selected == 3 && true}
            onClick={() => {
              setSelected(3);
            }}
          >
            추가 서비스
          </IndexBtn>
        </IndexBtnWrapper>
        <Dropdown>dropdown</Dropdown>
      </IndexContainer>
      <ProductContainer>
        {items &&
          items.map((element, index) => {
            return (
              <ProductWrapper>
                <ImageWrapper>
                  <img
                    src={element.imageUrl}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </ImageWrapper>
                <TextWrapper>
                  <ItemTitle>{element.title}</ItemTitle>
                  <ItemSubTitle>{element.content}</ItemSubTitle>
                </TextWrapper>
                <OrderBtnWrapper>
                  <ItemPrice>{element.price.toLocaleString()}</ItemPrice>
                  <OrderBtnBox>
                    <BtnWrapper>
                      <ShoppingCartSharpIcon />
                    </BtnWrapper>
                    <BtnWrapper>
                      <FavoriteSharpIcon />
                    </BtnWrapper>
                  </OrderBtnBox>
                </OrderBtnWrapper>
              </ProductWrapper>
            );
          })}
      </ProductContainer>
    </ViewContainer>
  );
}

export default PurchasePage;
