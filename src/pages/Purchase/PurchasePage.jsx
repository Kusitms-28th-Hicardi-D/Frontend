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
    <ViewContainer>
      <ViewHeader>
        <HeaderTextBox onClick={() => console.log(state)}>
          <HeaderTitle>HiCardi +</HeaderTitle>
          <HeaderSubTitle>스마트한 병원을 위한 솔루션</HeaderSubTitle>
          <HeaderSubTitle>Hicardi+ 제품을 만나보세요.</HeaderSubTitle>
        </HeaderTextBox>
      </ViewHeader>
      <IndexContainer>
        <IndexBtnWrapper>
          <IndexBtn
            id="all"
            selected={category === "all"}
            onClick={onClickMenu}
          >
            전체
          </IndexBtn>
          <IndexBtn
            id="main"
            selected={category === "main"}
            onClick={onClickMenu}
          >
            기기 본체
          </IndexBtn>
          <IndexBtn
            id="assistant"
            selected={category === "assistant"}
            onClick={onClickMenu}
          >
            추가 용품
          </IndexBtn>
          <IndexBtn
            id="addition"
            selected={category === "addition"}
            onClick={onClickMenu}
          >
            추가 서비스
          </IndexBtn>
        </IndexBtnWrapper>
        {/* <Dropdown>dropdown</Dropdown> */}
      </IndexContainer>
      <ProductContainer>
        {items &&
          items.map((element, index) => {
            return (
              <ProductWrapper
                onClick={() => {
                  navigate(`/purchase/detail/${element.productId}`);
                }}
              >
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
                  <ItemPrice>
                    {element.price !== 0 && element.price.toLocaleString()}
                  </ItemPrice>
                  <OrderBtnBox>
                    <BtnWrapper>
                      <ShoppingCartSharpIcon style={{ fontSize: "2rem" }} />
                    </BtnWrapper>
                    <BtnWrapper>
                      <FavoriteSharpIcon style={{ fontSize: "2rem" }} />
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
