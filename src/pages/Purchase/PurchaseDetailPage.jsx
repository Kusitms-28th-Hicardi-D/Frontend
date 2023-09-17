import { useParams } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImageView,
  ImageBox,
  IndexContainer,
  IndexItem,
  LeftBox,
  OptionBox,
  OrderBtn,
  OrderBtnBox,
  Price,
  ProductHeader,
  RightBox,
  SubTitle,
  Title,
  TotalPrice,
  TotalPriceBox,
  ViewContainer,
  WordBox,
} from "./PurchaseDetailPage.style";
import { getItemDetail } from "../../apis/axiosInstance";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import OrderIntroduce from "../../components/orderIntroduce/OrderIntroduce";
import OrderQna from "../../components/orderIntroduce/OrderQna";

export default function PurchaseDetailPage() {
  const params = useParams().id;
  const [data, setData] = useState();
  const [selected, setSelected] = useState(1);
  const fetchItemDetail = async () => {
    try {
      const response = await getItemDetail(params);
      setData(response.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItemDetail();
    console.log(data);
  }, []);

  return data ? (
    <ViewContainer>
      <ProductHeader>
        <LeftBox>
          <ImageBox>
            <img
              src={data.imageList[0].imageUrl}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ImageBox>
        </LeftBox>
        <RightBox>
          <WordBox>
            <Title>{data.title}</Title>
            <SubTitle>{data.engName}</SubTitle>
            <Description>{data.content}</Description>
            <Price>{data.price.toLocaleString()}원</Price>
          </WordBox>
          <OptionBox>
            [ 필수 ] 옵션을 선택해주세요
            <KeyboardArrowDownIcon />
          </OptionBox>
          <TotalPriceBox>
            <TotalPrice>총 상품금액(수량) : 0 ( 0개 ) </TotalPrice>
          </TotalPriceBox>
          <OrderBtnBox>
            <OrderBtn
              style={{
                background: "#08b9de",
                color: "white",
                fontWeight: "600",
                padding: "0.8rem 3rem 0.8rem 3rem",
                borderRadius: "50px",
              }}
            >
              구매하기
            </OrderBtn>
            <OrderBtn
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "600",
                padding: "0.8rem 3rem 0.8rem 3rem",
                marginLeft: "1rem",
                borderRadius: "50px",
                border: "1px solid gray",
              }}
            >
              장바구니 추가
            </OrderBtn>
          </OrderBtnBox>
        </RightBox>
      </ProductHeader>
      <IndexContainer>
        <IndexItem
          selected={selected == 1 && true}
          onClick={() => {
            setSelected(1);
          }}
        >
          상품상세정보
        </IndexItem>
        <IndexItem
          selected={selected == 2 && true}
          onClick={() => {
            setSelected(2);
          }}
        >
          상품구매안내
        </IndexItem>
        <IndexItem
          selected={selected == 3 && true}
          onClick={() => {
            setSelected(3);
          }}
        >
          상품Q&A
        </IndexItem>
      </IndexContainer>
      <DetailContainer>
        {selected == 1 && (
          <DetailImageView>
            <img src={data.detailImg} style={{ width: "100%" }} />
          </DetailImageView>
        )}
        {selected == 2 && <OrderIntroduce />}
        {selected == 3 && <OrderQna />}
      </DetailContainer>
    </ViewContainer>
  ) : (
    <ViewContainer></ViewContainer>
  );
}
