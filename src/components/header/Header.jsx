import { FlexBox, Words } from "../../styles/customComponents";

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  HeaderWrapper,
  MenuEndItemBox,
  MenuWrapper,
  MenuItem,
  SubMenu,
  UserBox,
  UserText,
  UserBtnBox,
  UserBtn,
  SearchBar,
} from "./Header.style";
import { Button, TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginState } from "../../recoil/normal/atoms";
import { auth } from "../../firebase/auth";
import Swal from "sweetalert2";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { searchItem } from "../../apis/axiosInstance";
function Header() {
  const navigate = useNavigate();
  const user = useRecoilValue(LoginState);
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [inputSearch, setInputSearch] = useState();

  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  const searchs = async (keyword) => {
    console.log(keyword);
    try {
      const response = await searchItem(keyword);
      console.log(response);
      navigate(`/search/${inputSearch}`);
    } catch (error) {
      console.error(error);
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "error",
        title: "찾으시는 검색결과가 없습니다",
      });
    }
  };
  return (
    <>
      <SearchBar visible={showSearchBar}>
        <TextField
          id="standard-basic"
          variant="outlined"
          placeholder="검색어를 입력해주세요"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          style={{ width: "100%", padding: "5px 10px" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchs(inputSearch);
          }}
        />
        <CancelIcon
          onClick={toggleSearchBar}
          style={{ width: "2rem", height: "2rem" }}
        />
        <SearchIcon
          style={{ width: "2rem", height: "2rem" }}
          onClick={() => {
            searchs(inputSearch);
          }}
        />
      </SearchBar>
      <HeaderWrapper row>
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
              <Words
                onClick={() => {
                  navigate("/patientIntroduce");
                }}
              >
                환자 모니터링 솔루션
              </Words>

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
          <MenuItem size2 bold>
            프레스센터
            <SubMenu>
              <Words
                onClick={() => {
                  navigate("/pressCenter/news");
                }}
              >
                하이카디 소식
              </Words>
              <Words
                onClick={() => {
                  navigate("/pressCenter/report");
                }}
              >
                보도자료
              </Words>
            </SubMenu>
          </MenuItem>
          <MenuItem size2 bold>
            구매하기
            <SubMenu>
              <Words
                onClick={() => {
                  navigate("/purchase");
                }}
              >
                제품 구매
              </Words>
              <Words
                onClick={() => {
                  navigate("/holterIntroduce/demo");
                }}
              >
                데모 요청
              </Words>
            </SubMenu>
          </MenuItem>
          <MenuItem
            size2
            bold
            onClick={() => {
              navigate("/board");
            }}
            style={{ paddingBottom: "-0px" }}
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
              <SearchIcon
                style={{ fontSize: "2.5rem" }}
                onClick={toggleSearchBar}
              />
            </FlexBox>

            {user.logined ? (
              <UserBtnBox>
                <UserBox>
                  <UserText>{user.user}</UserText>
                </UserBox>
                <UserBtn
                  style={{
                    backgroundColor: "#09c1e9",
                    borderRadius: "30px",
                    color: "white",
                    fontWeight: "500",
                    marginLeft: "1rem",
                    wordBreak: "normal",
                    fontSize: "0.8rem",
                    border: "1px solid black",
                  }}
                  onClick={() => {
                    auth.signOut();
                    navigate("/");
                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                    });
                    Toast.fire({
                      icon: "success",
                      title: "로그아웃되었습니다",
                    });
                    setLoginState({ logined: false, user: "" });
                  }}
                >
                  로그아웃
                </UserBtn>
              </UserBtnBox>
            ) : (
              <>
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
              </>
            )}
          </div>
          <div className="mobile">
            <MenuIcon fontSize="medium" />
          </div>
        </MenuEndItemBox>
      </HeaderWrapper>
    </>
  );
}

export default Header;
