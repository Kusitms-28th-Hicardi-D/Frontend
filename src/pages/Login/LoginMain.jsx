import { Words } from "../../styles/customComponents";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import Swal from "sweetalert2";
import { useState } from "react";
import { Color } from "../../assets/color/Color";
import { useNavigate } from "react-router-dom";
import {
  LoginBox,
  LoginBtnBox,
  LoginInputBox,
  LoginTitleBox,
  LoginUtilList,
  ViewContainer,
} from "./LoginMain.style";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { auth, signInwithGoogle } from "../../firebase/googleAuth";

function LoginMain() {
  // navigation
  const navigation = useNavigate();
  // id, pw
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  // pw
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const googleLogin = async () => {
    try {
      const response = await signInwithGoogle();
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  // login
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, id, pw)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (user) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });

          navigation(-1);
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "error",
          title: "Invalid User Information",
        });
      });
  };
  return (
    <ViewContainer column>
      <LoginBox column>
        <LoginTitleBox>
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
        </LoginTitleBox>
        <LoginInputBox>
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

          <FormControl
            sx={{ m: 1, width: "100%", marginLeft: "0" }}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </LoginInputBox>
        <LoginBtnBox>
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
            onClick={() => {
              handleLogin();
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
            onClick={() => {
              navigation("/signup");
            }}
          >
            회원가입
          </Button>
        </LoginBtnBox>
        <LoginUtilList className="login__util">
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
          <li
            onClick={() => {
              googleLogin();
            }}
          >
            구글로 로그인
          </li>
        </LoginUtilList>
      </LoginBox>
    </ViewContainer>
  );
}

export default LoginMain;
