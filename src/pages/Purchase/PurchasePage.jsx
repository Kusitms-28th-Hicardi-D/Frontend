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

function PurchasePage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [items, setItems] = useState();
  // const { state } = useLocation();
  async function fetchItems({ text }) {
    try {
      const response = await getItems(text);
      setItems(response.result.productList);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   if (state.selectedMenu == "hicardi") setSelected(1);
  //   else if (state.selectedMenu == "nonin") setSelected(2);
  //   else if (state.selectedMenu == "addService") setSelected(3);
  //   // return setSelected(0);
  // }, [])

  useEffect(() => {
    // if (state.selectedMenu == "hicardi") setSelected(1);
    // else if (state.selectedMenu == "nonin") setSelected(2);
    // else if (state.selectedMenu == "addService") setSelected(3);

    let category = "all";
    if (selected == 0) category = "all";
    else if (selected == 1) category = "main";
    else if (selected == 2) category = "assistant";
    else if (selected == 3) category = "addition";
    fetchItems({ text: category });
  }, [selected]);

  return (
    <ViewContainer>
      <ViewHeader>
        <HeaderTextBox onClick={() => console.log(state, selected)}>
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
