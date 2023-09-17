import { styled } from "styled-components";
import { FlexBox, Words } from "../../styles/customComponents";
import { Container, FooterItem, FooterWord } from "./Footer.style";

const assets = {
  registerNum1: "204-86-40122",
  brand: "동아에스티(주)",
  ceo: "김인영",
  phoneNum: " 02-920-8406",
  address: "서울특별시 동대문구 천호대로 64",
  registerNum2: "제2022-서울동대문-1374호",
  registerNum3: "제 2003-3050034-00003 호",
};

function Footer() {
  return (
    <Container>
      <FooterItem column isFirstItem>
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
        isSecondItem
        style={{
          alignItems: "flex-end",
          justifyContent: "space-evenly",
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
