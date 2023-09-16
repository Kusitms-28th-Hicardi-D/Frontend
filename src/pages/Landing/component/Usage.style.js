import styled from "styled-components";
import { FlexBox, Words } from "../../../styles/customComponents";

export const usages = [
  [
    "https://ecimg.cafe24img.com/pg189b34772306057/hicardi/web/images/about1.jpg",
    "일반병동",
    "모니터링이 필요한 환자에게 스마트 패치를 붙여 놓으면, 언제 어디서나 웹에서 환자 상태를 확인할 수 있습니다. 이를 통해, 의료진의 작업을 줄일 수 있습니다.",
  ],
  [
    "https://ecimg.cafe24img.com/pg189b34772306057/hicardi/web/images/about3.jpg",
    "만성질환자 관리",
    "하이카디 시스템은 원격으로 환자의 상태를 모니터링하고 이상이 감지되면 즉시 경보를 울릴 수 있습니다.",
  ],
  [
    "https://ecimg.cafe24img.com/pg189b34772306057/hicardi/web/images/about2.jpg",
    "격리병동",
    "코로나19 환자와 같이 격리병동의 환자를 원격으로 모니터링할 수 있습니다. 의료진의 감염의 위험을 낮출 수 있습니다.",
  ],
  [
    "https://ecimg.cafe24img.com/pg189b34772306057/hicardi/web/images/about4.jpg",
    "잠재환자",
    "위중하지 않은 잠재 환자군의 상태를 집에서 모니터링할 수 있다면, 이상징후를 조기 발견하여 치료할 수 있습니다.",
  ],
];

const sizes = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1440px",
};

const media = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

export const MainTitle = styled(Words)`
  font-size: 3rem;
  font-weight: 500;
`;
export const ViewContainer = styled(FlexBox)`
  align-self: center;
  display: flex;
  width: 80%;
  align-items: center;
  flex-direction: column;
  gap: 150px;
  overflow: hidden;
  padding-top: 8rem;
  padding-bottom: 8rem;

  @media ${media.tablet} {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;
export const ViewItem = styled(FlexBox)`
  display: flex;
  min-width: 480px;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: 3%;
  margin-bottom: 5rem;

  /* 이미지와 텍스트의 순서를 뒤집는 로직 */
  ${({ even }) =>
    even &&
    `
    flex-direction: row-reverse;
    gap:40px;
  `}

  @media ${media.tablet} {
    display: flex;
    flex-flow: column nowrap;
  }
`;

export const TextBox = styled(FlexBox)`
  width: 50%;
  flex-flow: column;
  padding-left: 2rem;

  @media ${media.tablet} {
    width: 80%;
  }
`;

export const ImageBox = styled(FlexBox)`
  width: 40%;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  @media ${media.tablet} {
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-bottom: 2rem;
  }
`;

export const Title = styled(Words)`
  color: var(--text-text-01, #242424);
  font-family: Noto Sans CJK KR;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 35px */
  margin-bottom: 2rem;
`;

export const SubTitle = styled(Words)`
  color: var(--text-text-02, #555);
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 125%; /* 27.5px */
`;
