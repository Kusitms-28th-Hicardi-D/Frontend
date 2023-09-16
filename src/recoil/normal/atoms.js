import { atom } from "recoil";

export const normalState = atom({
  key: "normalState",
  default: [
    {
      id: 1,
      content: "first content",
    },
  ],
});

export const LoginState = atom({
  key: "LoginState",
  default: {
    logined: false,
    user: "",
  },
});

export const productState = atom({
  key: "productState",
  default: [
    {
      id: 0,
      name: "하이카디 플러스 Hicardi+",
      description:
        "편리하게 심전도 측정, 전송 및 분석. 더 나은 삶을 위한 스마트한 솔루션 HiCardi +",
      price: 2046000,
    },
    {
      id: 1,
      name: "하이카디 플러스 Hicardi+ H100",
      description:
        "메모리 내장형 제품 편리하게 심전도 측정, 전송 및 분석. 더 나은 삶을 위한 스마트한 솔루션 HiCardi + H100",
      price: 1320000,
    },
    {
      id: 2,
      name: "심전도 전극 리필, 대형 20매 [하이카디플러스 H100, 하이카디플러스 전용]",
      description:
        "심전도 전극 리필, 대형 20매 [하이카디플러스 H100, 하이카디플러스 전용]",
      price: 22000,
    },
    {
      id: 3,
      name: "하이카디 HiCardi",
      description:
        "편리하게 심전도 측정, 전송 및 분석. 더 나은 삶을 위한 스마트한 솔루션 HiCardi +",
      price: 1496000,
    },
    {
      id: 4,
      name: "심전도 전극 리필, 소형 20매 [하이카디 전용]",
      description: "심전도 전극 리필, 소형 20매 [하이카디 전용]",
      price: 16500,
    },
    {
      id: 5,
      name: "노닌 펄스옥시미터 3150",
      description: "노닌 펄스옥시미터 3150",
      price: 1540000,
    },
    {
      id: 6,
      name: "갤럭시A13",
      description: "하이카디 서비스에 필요한 스마트폰(미개통)",
      price: 275000,
    },
  ],
});
