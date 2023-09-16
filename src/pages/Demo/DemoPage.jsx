import { useEffect, useState } from "react";
import {
  BtnContainer,
  FormBox,
  FormLabel,
  FormWrapper,
  SolutionBtn,
  SubTitle,
  SubmitBtn,
  Title,
  ViewContainer,
  WordBox,
} from "./demoStyle";
import { TextField } from "@mui/material";

function DemoPage() {
  console.log("render");
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [major, setMajor] = useState();
  const [email, setEmail] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [solution, setSolution] = useState();
  const [other, setOther] = useState();
  const [isAllFinished, setIsAllFinished] = useState(false);

  useEffect(() => {
    setIsAllFinished(name && company && major && email && phoneNum && solution);
    console.log(isAllFinished);
  }, [name, company, major, email, phoneNum, solution]);

  return (
    <ViewContainer>
      <WordBox column>
        <Title>데모요청</Title>
        <SubTitle>원하는 솔루션을 선택해 데모요청을 진행해주세요 </SubTitle>
      </WordBox>
      <FormBox>
        <FormWrapper>
          <FormLabel>이름*</FormLabel>
          <TextField
            variant="filled"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormWrapper>
        <FormWrapper>
          <FormLabel>회사 또는 병원명*</FormLabel>
          <TextField
            variant="filled"
            placeholder="소속을 입력하세요"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </FormWrapper>
        <FormWrapper>
          <FormLabel>진료과명*</FormLabel>
          <TextField
            variant="filled"
            placeholder="진료과명을 입력하세요"
            value={major}
            onChange={(e) => {
              setMajor(e.target.value);
            }}
          />
        </FormWrapper>
        <FormWrapper>
          <FormLabel>이메일*</FormLabel>
          <TextField
            variant="filled"
            placeholder="이메일을 입력하세요"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormWrapper>
        <FormWrapper>
          <FormLabel>연락처*</FormLabel>
          <TextField
            variant="filled"
            placeholder="'-'없이 입력해주세요"
            value={phoneNum}
            onChange={(e) => {
              setPhoneNum(e.target.value);
            }}
          />
        </FormWrapper>
        <FormWrapper>
          <FormLabel>관심있는 솔루션*</FormLabel>
          <BtnContainer>
            <SolutionBtn
              clicked={solution == 1 && true}
              onClick={() => {
                setSolution(1);
              }}
            >
              환자 모니터링 솔루션
            </SolutionBtn>
            <SolutionBtn
              clicked={solution == 2 && true}
              onClick={() => {
                setSolution(2);
              }}
            >
              홀터 솔루션
            </SolutionBtn>
          </BtnContainer>
        </FormWrapper>
        <FormWrapper>
          <FormLabel>기타문의</FormLabel>
          <TextField
            variant="filled"
            placeholder="문의사항을 입력해주세요"
            multiline={true}
            rows={10}
            value={other}
            onChange={(e) => {
              setOther(e.target.value);
            }}
          />
        </FormWrapper>
        <SubmitBtn variant="outlined" disabled={!isAllFinished}>
          제출하기
        </SubmitBtn>
      </FormBox>
    </ViewContainer>
  );
}

export default DemoPage;
