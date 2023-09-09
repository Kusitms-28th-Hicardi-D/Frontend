import { styled } from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled(FlexBox)`
  padding: 0.5% 1% 0.5% 1%;
  max-width: 100vw;
`;

const MenuWrapper = styled(FlexBox)`
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap !important;
  margin-left: 5%;
  width: 50%;
`;

const MenuItem = styled(Words)`
  margin-left: 1%;
  flex-wrap: nowrap;
  font-weight: bolder;
`;

const MenuEndItemBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: auto;
  align-self: center;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper row>
      {/* <Words size4>HiCardi</Words> */}
      <FlexBox
        style={{
          width: "10%",
          height: "4%",
          marginLeft: "2%",
          alignSelf: "center",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="https://ecimg.cafe24img.com/pg189b34772306057/hicardi/web/upload/category/logo/v2_553d95808a53a44ef370162e31b118ac_E0tVNw8TE5_top.jpg"
          alt="logo"
          style={{ width: "100%", height: "100%" }}
        />
      </FlexBox>

      <MenuWrapper row>
        <MenuItem size2 bold>
          서비스 소개
        </MenuItem>
        <MenuItem size2 bold>
          제품 소개
        </MenuItem>
        <MenuItem size2 bold>
          프레스센터
        </MenuItem>
        <MenuItem size2 bold>
          구매하기
        </MenuItem>
        <MenuItem size2 bold>
          게시판
        </MenuItem>
      </MenuWrapper>
      <MenuEndItemBox>
        <FlexBox
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #eee",
            borderRadius: "50%",
            width: "33px",
            height: "30px",
            marginRight: "3%",
          }}
        >
          <SearchIcon style={{ fontSize: "18px" }} />{" "}
          {/* SearchIcon의 크기를 조정 */}
        </FlexBox>

        <Button
          variant="outlined"
          style={{
            height: "50%",
            borderColor: "#eee",
            whiteSpace: "nowrap",
            fontSize: "0.7rem",
            borderRadius: "30px",
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </Button>
        <Button
          variant="contained"
          style={{
            height: "50%",
            marginLeft: "3%",
            whiteSpace: "nowrap",
            fontSize: "0.7rem",
            borderColor: "#eee",
            backgroundColor: "#08b9de",
            borderRadius: "30px",
          }}
        >
          회원가입
        </Button>
      </MenuEndItemBox>
    </HeaderWrapper>
  );
};

export default Header;
