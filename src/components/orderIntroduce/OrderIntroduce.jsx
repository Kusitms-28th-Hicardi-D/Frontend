import {
  Box,
  ContentDescription,
  ContentTitle,
  DescriptionWrapper,
  Title,
  TitleBox,
  TitleWrapper,
  ViewContainer,
} from "./OrderIntroduce.style";

function OrderIntroduce() {
  return (
    <ViewContainer>
      <TitleBox>
        <Title>배송안내</Title>
      </TitleBox>
      <Box>
        <TitleWrapper>
          <ContentTitle>배송정보</ContentTitle>
        </TitleWrapper>
        <DescriptionWrapper>
          <ContentDescription>· 배송비는 무료입니다.</ContentDescription>
          <ContentDescription>
            · 배송비는 무료입니다. · 일부 도서산간 지역은 배송이 불가하거나
            배송이 다소 지연될 수 있습니다.
          </ContentDescription>
          <ContentDescription>
            · 결제 완료 후 영업일 기준 2~5일 이내에 배송이 됩니다.(금요일 오후,
            주말/공휴일 결제 건은 3~6일 이내 배송)
          </ContentDescription>
          <ContentDescription>
            · 브랜드 및 품종이 다른 경우 개별(별도 포장)로 배송될 수 있습니다.
          </ContentDescription>
        </DescriptionWrapper>
      </Box>
      <Box>
        <TitleWrapper>
          <ContentTitle>교환·반품 신청기간</ContentTitle>
        </TitleWrapper>
        <DescriptionWrapper>
          <ContentDescription>
            · 단순 고객변심으로 인한 교환·반품 신청은 상품 수령일로부터 7일 이내
            가능
          </ContentDescription>
          <ContentDescription>
            · 단, 배송 상품 등의 내용이 표시·광고 내용과 다르거나 다르게 이행된
            경우에는 상품 등을 수령한 날부터 3개월 이내, 그 사실을 안 날 또는 알
            수 있었던 날부터 30일 이내
          </ContentDescription>
        </DescriptionWrapper>
      </Box>
      <Box>
        <TitleWrapper>
          <ContentTitle>교환·반품 배송비</ContentTitle>
        </TitleWrapper>
        <DescriptionWrapper>
          <ContentDescription>
            · 교환·반품 배송비는 판매사에서 부담합니다.
          </ContentDescription>
          <ContentDescription>
            · 의료기관의 경우, 판매사 담당자에게 요청하시면 됩니다.
          </ContentDescription>
        </DescriptionWrapper>
      </Box>
      <Box>
        <TitleWrapper>
          <ContentTitle>교환·반품 불가사유</ContentTitle>
        </TitleWrapper>
        <DescriptionWrapper>
          <ContentDescription>
            · 포장을 개봉하여 시착 또는 사용하여 상품 등의 가치가 훼손된 경우
          </ContentDescription>
          <ContentDescription>
            · 단, 상품의 내용을 확인하기 위하여 포장을 개봉한 경우에는
            교환/반품이 가능합니다.
          </ContentDescription>
          <ContentDescription>
            · 고객님의 단순변심으로 인한 교환/반품 요청이 상품을 수령한 날로부터
            7일을 경과한 경우
          </ContentDescription>
          <ContentDescription>
            · 고객님의 책임 있는 사유로 상품 등의 가치가 심하게 파손되거나
            훼손된 경우
          </ContentDescription>
          <ContentDescription>
            · 고객님의 사용 또는 일부 소비에 의하여 상품 등의 가치가 현저히
            감소된 경우
          </ContentDescription>
          <ContentDescription>
            · 기타, '전자상거래 등에서의 소비자보호에 관한 법률'이 정하는
            청약철회 제한사유에 해당되는 경우
          </ContentDescription>
        </DescriptionWrapper>
      </Box>
      <Box>
        <TitleWrapper>
          <ContentTitle>환불관련 안내</ContentTitle>
        </TitleWrapper>
        <DescriptionWrapper>
          <ContentDescription>
            · 카드결제 : 승인 취소 처리 (반품상품 도착 + 카드사 반영 4~5일 소요)
          </ContentDescription>
          <ContentDescription>
            · 계좌이체/무통장입금 : 환불계좌로 입금 (반품상품 도착 + 은행 처리
            3일 소요)
          </ContentDescription>
        </DescriptionWrapper>
      </Box>
      <Box>
        <TitleWrapper>
          <ContentTitle>A/S 안내</ContentTitle>
        </TitleWrapper>
        <DescriptionWrapper>
          <ContentDescription>
            · A/S접수는 우편 또는 택배를 이용하여 온라인 쇼핑몰
            고객센터(02-920-8406)로 보내주시기 바랍니다.
          </ContentDescription>
        </DescriptionWrapper>
      </Box>
    </ViewContainer>
  );
}

export default OrderIntroduce;
