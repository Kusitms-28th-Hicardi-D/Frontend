import { useNavigate, useParams } from "react-router-dom";
import {
  Description,
  ItemContainer,
  LeftBox,
  Price,
  RightBox,
  SearchHeader,
  SearchTitle,
  Title,
  ViewContainer,
} from "./SeachResultPage.style";
import { useEffect, useState } from "react";
import { searchItem } from "../../apis/axiosInstance";
import { Button } from "@mui/material";

function SearchResultPage() {
  const { searchWord } = useParams();
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const searchs = async (keyword) => {
    try {
      const response = await searchItem(keyword);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchs(searchWord);
  }, []);

  return (
    <ViewContainer>
      <SearchHeader>
        <SearchTitle>검색결과</SearchTitle>
      </SearchHeader>
      {data &&
        data.map((element) => {
          console.log(element);
          return (
            <ItemContainer>
              <LeftBox>
                <img
                  src={element.imageUrl}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </LeftBox>
              <RightBox>
                <Title>{element.title}</Title>
                <Description>{element.content}</Description>
                <Price>{element.price.toLocaleString()}원</Price>
                <Button
                  style={{
                    padding: "1rem 3rem 1rem 3rem",
                    backgroundColor: "#08b9de",
                    borderRadius: "40px",
                  }}
                  variant="contained"
                  onClick={() => {
                    navigate(`/purchase/detail/${element.productId}`);
                  }}
                >
                  자세히보기
                </Button>
              </RightBox>
            </ItemContainer>
          );
        })}
    </ViewContainer>
  );
}

export default SearchResultPage;
