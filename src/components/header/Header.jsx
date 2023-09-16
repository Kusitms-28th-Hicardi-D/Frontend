import { FlexBox, Words } from "../../styles/customComponents";

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  HeaderWrapper,
  MenuEndItemBox,
  MenuWrapper,
  MenuItem,
  SubMenu,
} from "./Header.style";
import { Button } from "@mui/material";

function Header() {
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
          <SubMenu>
            <Words>환자 모니터링 솔루션</Words>
            <Words
              onClick={() => {
                navigate("/holterIntroduce");
              }}
            >
              홀터 솔루션
            </Words>
          </SubMenu>
        </MenuItem>
        <MenuItem
          size2
          bold
          onClick={() => {
            navigate("/production");
          }}
        >
          제품 소개
        </MenuItem>
        <MenuItem
          size2
          bold
          onClick={() => {
            navigate("/pressCenter/news");
          }}
        >
          프레스센터
        </MenuItem>
        <MenuItem
          size2
          bold
          onClick={() => {
            navigate("/purchase");
          }}
        >
          구매하기
        </MenuItem>
        <MenuItem
          size2
          bold
          onClick={() => {
            navigate("/board");
          }}
        >
          게시판
        </MenuItem>
      </MenuWrapper>
      <MenuEndItemBox>
        <div className="normal">
          <FlexBox
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #eee",
              borderRadius: "50%",
              paddingLeft: "3px",
              paddingRight: "3px",
              marginRight: "3%",
            }}
          >
            <SearchIcon style={{ fontSize: "2.5rem" }} />
          </FlexBox>

          <Button
            variant="outlined"
            style={{
              height: "50%",
              borderColor: "#eee",
              whiteSpace: "nowrap",
              fontSize: "1.1rem",
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
              fontSize: "1.1rem",
              borderColor: "#eee",
              backgroundColor: "#08b9de",
              borderRadius: "30px",
              boxShadow: "none",
            }}
          >
            회원가입
          </Button>
        </div>
        <div className="mobile">
          <MenuIcon fontSize="medium" />
        </div>
      </MenuEndItemBox>
    </HeaderWrapper>
  );
}

export default Header;
