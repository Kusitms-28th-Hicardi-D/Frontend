import { styled } from "styled-components";
import DefaultView from "../../components/container/DefaultView";
import { EContainer, FlexBox, Words } from "../../styles/customComponents";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Color } from "../../assets/color/Color";

const ViewContainer = styled(FlexBox)`
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 80vh;
`;

const LoginBox = styled(FlexBox)`
  align-items: center;
  width: 50%;
`;

const LoginUtilList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;

  padding: 0;
  li {
    font-size: 0.8rem;
    color: gray;
  }
  li:not(:last-child):after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 17px;
    margin: 0 8px 0 12px;
    vertical-align: top;
    background: #e0e0e0;
  }
`;
function LoginMain() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  return (
    <DefaultView>
      <ViewContainer column>
        <LoginBox column>
          <FlexBox column style={{ alignItems: "center", marginBottom: "3%" }}>
            <Words
              style={{
                fontSize: "2rem",
                fontWeight: "bolder",
                marginBottom: "1%",
              }}
            >
              로그인
            </Words>
            <Words size3 sub style={{ margin: 0, padding: 0 }}>
              회원이 되시면 다양한 혜택과 서비스를 받으실 수 있습니다.
            </Words>
          </FlexBox>
          <FlexBox column style={{ width: "80%" }}>
            <TextField
              id="filled-basic"
              label="아이디"
              variant="filled"
              value={id}
              style={{ width: "100%", marginBottom: "3%" }}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <TextField
              id="filled-basic"
              label="비밀번호"
              variant="filled"
              style={{ width: "100%" }}
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
              type="password"
            />
          </FlexBox>
          <FlexBox column style={{ width: "70%", marginTop: "3%" }}>
            <Button
              variant="contained"
              style={{
                whiteSpace: "nowrap",
                fontSize: "1rem",
                width: "100%",
                paddingTop: "3%",
                paddingBottom: "3%",
                backgroundColor: Color.componentColor.ButtonBlue,
                borderRadius: "30px",
              }}
            >
              로그인
            </Button>
            <Button
              variant="contained"
              style={{
                marginTop: "3%",
                whiteSpace: "nowrap",
                fontSize: "1rem",
                width: "100%",
                paddingTop: "3%",
                paddingBottom: "3%",
                backgroundColor: "white",
                borderColor: Color.componentColor.BorderGray,
                borderRadius: "30px",
                color: "black",
              }}
            >
              회원가입
            </Button>
          </FlexBox>

          <LoginUtilList className="login__util">
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
          </LoginUtilList>
        </LoginBox>
      </ViewContainer>
    </DefaultView>
  );
}

export default LoginMain;
