import { styled } from "styled-components";
import { Color } from "../asset/Color";
import { FlexBox, Words } from "./customComponents";

const assets = {
  registerNum1: "204-86-40122",
  brand: "동아에스티(주)",
  ceo: "김인영",
  phoneNum: " 02-920-8406",
  address: "서울특별시 동대문구 천호대로 64",
  registerNum2: "제2022-서울동대문-1374호",
  registerNum3: "제 2003-3050034-00003 호",
};

const Container = styled.div`
  background-color: black;
  min-height: 10vh;
  margin-top: auto;
  display: flex;
  flex-flow: row wrap;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const FooterItem = styled(FlexBox)`
  flex: 1 1 50%;
  justify-content: center;
`;

const FooterWord = styled(Words)`
  margin: 0;
  margin-bottom: 1.5%;
  padding: 0;
  border-bottom: ${(props) => (props.underline ? "1px solid #1aabde" : "0")};
`;

function Footer() {
  return (
    <Container>
      <FooterItem column>
        <FlexBox style={{ width: "20%", marginBottom: "5%" }}>
          <img
            src="https://ecimg.cafe24img.com/pg189b34772306057/hicardi/web/images/wlogo%403x.png"
            alt="footer-logo"
            style={{ width: "100%", height: "100%" }}
          />
        </FlexBox>

        <FooterWord size1 white nopadding nomargin>
          사업자 등록번호 | {assets.registerNum1}
        </FooterWord>
        <FooterWord size1 white>
          상호 | {assets.brand}
        </FooterWord>
        <FooterWord size1 white>
          대표자명 | {assets.ceo}
        </FooterWord>
        <FooterWord size1 white>
          전화번호 | {assets.phoneNum}
        </FooterWord>
        <FooterWord size1 white>
          주소 | {assets.address}
        </FooterWord>
        <FooterWord size1 white>
          통신판매업신고번호 | {assets.registerNum2}
        </FooterWord>
        <FooterWord size1 white>
          의료기기판매업번호 | {assets.registerNum3}
        </FooterWord>
      </FooterItem>
      <FooterItem
        column
        style={{
          alignItems: "flex-end",
        }}
      >
        <FooterWord size1 white underline>
          서비스 이용약관
        </FooterWord>
        <FooterWord size1 white underline style={{ marginTop: "5%" }}>
          개인정보 취급방침
        </FooterWord>
        <FooterWord size1 white underline style={{ marginTop: "5%" }}>
          이용안내
        </FooterWord>
      </FooterItem>
    </Container>
  );
}

export default Footer;
