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
  MenuBtn,
  MenuBar,
  MenuBarItem,
  MenuBarTxt,
  MenuBarSubItemWrapper,
} from "./Header.style";
import { Button, TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginState } from "../../recoil/normal/atoms";
import { auth } from "../../firebase/auth";
import Swal from "sweetalert2";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";

function Header() {
  const navigate = useNavigate();
  const user = useRecoilValue(LoginState);
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isOpenMenuBar, setIsOpenMenuBar] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const [isOpenPurchase, setIsOpenPurchase] = useState(false);
  const [isOpenPressCenter, setIsOpenPressCenter] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  const toggleMenuBar = () => {
    setIsOpenMenuBar((prev) => !prev);
    setIsOpenService(false);
    setIsOpenPurchase(false);
    setIsOpenPressCenter(false);
  };

  const toggleSubMenuItem = (event) => {
    const id = event.currentTarget.id;
    if (id === "service") {
      setIsOpenService((prev) => !prev);
      setIsOpenPurchase(false);
      setIsOpenPressCenter(false);
    }
    if (id === "purchase") {
      setIsOpenService(false);
      setIsOpenPurchase((prev) => !prev);
      setIsOpenPressCenter(false);
    }
    if (id === "pressCenter") {
      setIsOpenService(false);
      setIsOpenPurchase(false);
      setIsOpenPressCenter((prev) => !prev);
    }
  };

  return (
    <>
      <SearchBar visible={showSearchBar}>
        <TextField
          id="standard-basic"
          variant="outlined"
          placeholder="검색어를 입력해주세요"
          style={{ width: "100%", padding: "5px 10px" }}
        />
        <CancelIcon
          onClick={toggleSearchBar}
          style={{ width: "2rem", height: "2rem" }}
        />
        <SearchIcon style={{ width: "2rem", height: "2rem" }} />
      </SearchBar>
      <HeaderWrapper row>
        <FlexBox
          style={{
            width: "10%",
            height: "4%",
            marginLeft: "2%",
            alignSelf: "center",
            cursor: "pointer",
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
          <MenuBtn onClick={toggleMenuBar} className="mobile">
            <MenuIcon fontSize="medium" />
          </MenuBtn>
        </MenuEndItemBox>

        
        {isOpenMenuBar && (
          <MenuBar>
            <MenuBarItem id="service" onClick={toggleSubMenuItem}>
              <MenuBarTxt>서비스 소개</MenuBarTxt>
              <ArrowDropDownIcon />
            </MenuBarItem>
            {isOpenService && (
              <MenuBarSubItemWrapper>
                <MenuBarItem
                  onClick={() => {
                    navigate("/patientIntroduce");
                    setIsOpenMenuBar(false);
                  }}
                >
                  <MenuBarTxt>환자 모니터링 솔루션</MenuBarTxt>
                  <div></div>
                </MenuBarItem>
                <MenuBarItem
                  onClick={() => {
                    navigate("/holterIntroduce");
                    setIsOpenMenuBar(false);
                  }}
                >
                  <MenuBarTxt>홀터 솔루션</MenuBarTxt>
                  <div></div>
                </MenuBarItem>
              </MenuBarSubItemWrapper>
            )}
            <MenuBarItem
              onClick={() => {
                navigate("/production");
                setIsOpenMenuBar(false);
              }}
            >
              <MenuBarTxt>제품 소개</MenuBarTxt>
              <div></div>
            </MenuBarItem>
            <MenuBarItem id="pressCenter" onClick={toggleSubMenuItem}>
              <MenuBarTxt>프레스 센터</MenuBarTxt>
              <ArrowDropDownIcon />
            </MenuBarItem>
            {isOpenPressCenter && (
              <MenuBarSubItemWrapper>
                <MenuBarItem
                  onClick={() => {
                    navigate("/pressCenter/news");
                    setIsOpenMenuBar(false);
                  }}
                >
                  <MenuBarTxt>하이카디 소식</MenuBarTxt>
                </MenuBarItem>
                <div></div>
                <MenuBarItem
                  onClick={() => {
                    navigate("/pressCenter/report");
                    setIsOpenMenuBar(false);
                  }}
                >
                  <MenuBarTxt>보도자료</MenuBarTxt>
                  <div></div>
                </MenuBarItem>
              </MenuBarSubItemWrapper>
            )}
            <MenuBarItem id="purchase" onClick={toggleSubMenuItem}>
              <MenuBarTxt>구매하기</MenuBarTxt>
              <ArrowDropDownIcon />
            </MenuBarItem>
            {isOpenPurchase && (
              <MenuBarSubItemWrapper>
                <MenuBarItem
                  onClick={() => {
                    navigate("/purchase");
                    setIsOpenMenuBar(false);
                  }}
                >
                  <MenuBarTxt>제품 구매</MenuBarTxt>
                  <div></div>
                </MenuBarItem>
                <MenuBarItem
                  onClick={() => {
                    navigate("/holterIntroduce/demo");
                    setIsOpenMenuBar(false);
                  }}
                >
                  <MenuBarTxt>데모 요청</MenuBarTxt>
                  <div></div>
                </MenuBarItem>
              </MenuBarSubItemWrapper>
            )}
            <MenuBarItem
              onClick={() => {
                navigate("/board");
                setIsOpenMenuBar(false);
              }}
            >
              <MenuBarTxt>게시판</MenuBarTxt>
              <div></div>
            </MenuBarItem>
          </MenuBar>
        )}
      </HeaderWrapper>
    </>
  );
}

export default Header;
