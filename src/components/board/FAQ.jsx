import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styled from "styled-components";
import qstIcon from "../../assets/icon/Q.svg";
import { useState } from "react";
import { media } from "../../styles/media.style";

export default function FAQ() {
  const data = [
    {
      category: "basicInfo",
      qst: "하이카디 패치는 무엇을 탐지해 낼 수 있습니까?",
      asw: "심전도(ECG), 심박수, 심박수 변동성, RR 간격, 호흡수, 체온, 자세(체위), 위치정보를 측정할 수 있으며 데이터로서 기록할 수 있습니다.또한, 뇌졸중 위험 증가 요인으로 최근 이슈가 되고 있는 심방 세동 (AF)을 포함한 15가지 부정맥을 실시간으로 탐지해 낼 수 있습니다.",
    },
    {
      category: "basicInfo",
      qst: "하이카디 패치의 배터리는 최대 몇일동안 착용할 수 있나요?",
      asw: "의사의 처방된 착용 시간에 따라 3일 이내로 패치를 착용하십시오.",
    },
    {
      category: "basicInfo",
      qst: "하이카디 패치는 어떻게 착용해야 하나요?",
      asw: "패치는 의료진의 지도에 따라 착용이 진행됩니다. 패치 착용 전 전극의 접착력에 방해될 만한 요소들(접착이 되지 않을 정도의 가슴 모, 각질 등)을 제거하시는 걸 권장해 드리며 알코올 스왑으로 착용 부위를 소독합니다.",
    },
    {
      category: "basicInfo",
      qst: "배터리는 어떻게 교체하나요?",
      asw: "하이카디 패치의 배터리는 교환이 불가능한 재충전식 내장배터리로 구성되어 있습니다. 방전 후 재충전을 하실 수 있는 충전기를 제공해 드립니다.",
    },
    {
      category: "basicInfo",
      qst: "패치에 부착된 전극은 얼마나 부착하고 있어야 하나요?",
      asw: "접착력에 문제가 없다면, 검사기간 동안 교체하지 않으셔도 됩니다. 단, 접착력에 문제가 발생했을 경우에는 교체해 주시는 것을 권장 드립니다.",
    },
    {
      category: "basicInfo",
      qst: "하이카디 패치의 전원을 켜는 방법과 부착 후 패치가 작동하는지 확인할 수 있는 방법은 무엇입니까?",
      asw: "패치를 처음 부착할 때 전원 버튼을 약 2~3초간 누르면 전원이 켜지며 좌측 상단에 파란LED불이 들어옴과 동시에 신호음이 짧게 들립니다. 패치를 부착 후 제대로 작동이 되고 있다면 좌측 상단의 파란 LED 불이 천천히 지속 적으로 깜빡입니다.",
    },
    {
      category: "basicInfo",
      qst: "하이카디 패치와 스마트폰 간의 연결은 어떻게 이루어지며 연결 범위는 어느정도 입니까?",
      asw: "하이카디 패치는 블루투스를 통해 스마트폰과 연결됩니다. 두 장치 간의 연결 범위는 최대 10미터이지만 2미터 간격을 유지하시는 것을 권장 드립니다.홀터 검사의 경우, 패치로부터 전송된 데이터가 스마트폰 앱에 저장이 됩니다. 실시간 모니터링 모드의 경우, 스마트폰 앱을 통해 실시간으로 서버에 전송이 되어, 의료진용 소프트웨어(라이브스튜디오)에 스트리밍 되기 시작합니다",
    },
    {
      category: "operation",
      qst: "하이카디 패치가 떨어지거나 제대로 작동하지 않으면 어떻게 합니까?",
      asw: "고객 센터에서 상담해 드릴 수 있습니다.- 고객 센터 연락처 : 080-920-1001 (상담가능시간 : 평일 09:00 ~ 17:00)",
    },
    {
      category: "wearing",
      qst: "하이카디 패치를 착용 후 일상 활동을 해도 될까요?",
      asw: "예, 하지만 과도한 땀을 흘리게 하는 활동(마라톤과 같은)은 패치의 접착력을 떨어지게 하여 착용 시간을 단축시킬 수 있습니다. 특히 처음 24시간 동안은 패치가 피부에 완전히 밀착될 수 있도록 이러한 활동을 피하십시오.",
    },
    {
      category: "wearing",
      qst: "하이카디 패치를 착용한 상태에서 초음파, CT 촬영, X-RAY, MRI촬영을 할 수 있습니까?",
      asw: "해당 검사를 진행 시에는 기기를 떼어내고 검사를 진행한 후에, 새 전극으로 교체한 후, 다시 부착하여 사용해 주시기 바랍니다.",
    },
    {
      category: "wearing",
      qst: "하이카디 패치를 착용하고 커피나 술을 마실 수 있습니까?",
      asw: "음식과 더불어 섭취하는 약물의 조절은 처방 의사의 권고를 따라야 합니다.",
    },
    {
      category: "wearing",
      qst: "하이카디 패치를 착용하고 공항 검색대를 통과할 수 있나요?",
      asw: "초음파, CT 촬영 등과 마찬가지로 기기를 떼어내고 검사를 진행한 후에, 새 전극으로 교체한 후, 다시 부착하여 사용해 주시기 바랍니다.",
    },
    {
      category: "wearing",
      qst: "하이카디 패치를 착용한 상태에서 초음파, CT 촬영, X-RAY, MRI촬영을 할 수 있습니까?",
      asw: "네, 하지만 과도하게 땀을 흘리는 운동은 패치의 접착력을 떨어뜨리고 나아가 심전도 모니터링의 결과를 왜곡시킬 수 있습니다. 격렬한 운동은 피해야 하지만 걷기, 집 청소 또는 사무실에서 일하는 것과 같은 가벼운 일상 활동은 패치의 성능에 영향을 미치지 않습니다.",
    },
    {
      category: "wearing",
      qst: "하이카디 패치와 함께 Apple 시계를 착용하여 같이 사용할 수 있습니까?",
      asw: "Apple Watch는 심방 세동 (AF) 또는 기타 알려진 부정맥을 탐지하는 전문 의료기기가 아닙니다. 동시 사용을 권장해 드리지 않습니다",
    },
    {
      category: "wearing",
      qst: "하이카디 패치를 착용한 환자에게 심장 제세동기(defibrillator)를 사용할 수 있나요?",
      asw: "네, 가능합니다. 하이카디 패치는 Defibrillation-protection 기능이 있어 패치를 착용한 환자에게 심장제세동기를 사용할 수 있습니다",
    },
    {
      category: "wearing",
      qst: "하이카디 패치를 착용하는 도중 너무 가렵거나 따가움을 느끼면 어떻게 해야 하나요?",
      asw: "부착 위치에 대한 매뉴얼 확인 후 기존의 패치 부착 위치에서 약간 떨어진 곳으로 알코올 스왑으로 소독 후 재 부착합니다.단, 증상이 너무 심하다면 처방 의사에게 연락하시기 바랍니다.",
    },
    {
      category: "wearing",
      qst: "하이카디 패치를 착용하는 동안 주의해야 할 사항들은 무엇이 있을까요?",
      asw: "의료진의 안내 없이는 패치를 절대로 끄지 마십시오(수면 시에도).스마트폰의 전원이 꺼지지 않도록, 배터리를 충전해주시기 바랍니다.블루투스 연결이 끊어지지 않도록, 패치와 스마트폰의 간격을 2미터 이내로 유지해 주시기 바랍니다.",
    },
    {
      category: "basicInfo",
      qst: "하이카디 패치는 무엇을 탐지해 낼 수 있습니까?",
      asw: "심전도(ECG), 심박수, 심박수 변동성, RR 간격, 호흡수, 체온, 자세(체위), 위치정보를 측정할 수 있으며 데이터로서 기록할 수 있습니다.또한, 뇌졸중 위험 증가 요인으로 최근 이슈가 되고 있는 심방 세동 (AF)을 포함한 15가지 부정맥을 실시간으로 탐지해 낼 수 있습니다.",
    },
    {
      category: "basicInfo",
      qst: "하이카디 패치의 배터리는 최대 몇일동안 착용할 수 있나요?",
      asw: "의사의 처방된 착용 시간에 따라 3일 이내로 패치를 착용하십시오.",
    },
    {
      category: "basicInfo",
      qst: " 하이카디 패치는 어떻게 착용해야 하나요?",
      asw: "패치는 의료진의 지도에 따라 착용이 진행됩니다. 패치 착용 전 전극의 접착력에 방해될 만한 요소들(접착이 되지 않을 정도의 가슴 모, 각질 등)을 제거하시는 걸 권장해 드리며 알코올 스왑으로 착용 부위를 소독합니다.",
    },
    {
      category: "basicInfo",
      qst: "배터리는 어떻게 교체하나요?",
      asw: "하이카디 패치의 배터리는 교환이 불가능한 재충전식 내장배터리로 구성되어 있습니다. 방전 후 재충전을 하실 수 있는 충전기를 제공해 드립니다.",
    },
    {
      category: "basicInfo",
      qst: "패치에 부착된 전극은 얼마나 부착하고 있어야 하나요?",
      asw: "접착력에 문제가 없다면, 검사기간 동안 교체하지 않으셔도 됩니다. 단, 접착력에 문제가 발생했을 경우에는 교체해 주시는 것을 권장 드립니다.",
    },
    {
      category: "basicInfo",
      qst: "하이카디 패치의 전원을 켜는 방법과 부착 후 패치가 작동하는지 확인할 수 있는 방법은 무엇입니까?",
      asw: "패치를 처음 부착할 때 전원 버튼을 약 2~3초간 누르면 전원이 켜지며 좌측 상단에 파란LED불이 들어옴과 동시에 신호음이 짧게 들립니다. 패치를 부착 후 제대로 작동이 되고 있다면 좌측 상단의 파란 LED 불이 천천히 지속 적으로 깜빡입니다.",
    },
    {
      category: "basicInfo",
      qst: "하이카디 패치와 스마트폰 간의 연결은 어떻게 이루어지며 연결 범위는 어느정도 입니까?",
      asw: "하이카디 패치는 블루투스를 통해 스마트폰과 연결됩니다. 두 장치 간의 연결 범위는 최대 10미터이지만 2미터 간격을 유지하시는 것을 권장 드립니다.홀터 검사의 경우, 패치로부터 전송된 데이터가 스마트폰 앱에 저장이 됩니다. 실시간 모니터링 모드의 경우, 스마트폰 앱을 통해 실시간으로 서버에 전송이 되어, 의료진용 소프트웨어(라이브스튜디오)에 스트리밍 되기 시작합니다",
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState("all");
  const [isOpenIdx, setIsOpenIdx] = useState([]);

  const onClickMenu = (event) => {
    setSelectedMenu(event.target.id);
  };

  const onClickMoreBtn = (idx) => {
    !isOpenIdx.includes(idx)
      ? setIsOpenIdx((prev) => [...prev, idx])
      : setIsOpenIdx(isOpenIdx.filter((el) => el !== idx));
  };

  return (
    <>
      <MenuBar>
        <Menu id="all" onClick={onClickMenu} selected={selectedMenu === "all"}>
          전체
        </Menu>
        <Menu
          id="basicInfo"
          onClick={onClickMenu}
          selected={selectedMenu === "basicInfo"}
        >
          기본정보
        </Menu>
        <Menu
          id="operation"
          onClick={onClickMenu}
          selected={selectedMenu === "operation"}
        >
          기기 작동 주의사항
        </Menu>
        <Menu
          id="wearing"
          onClick={onClickMenu}
          selected={selectedMenu === "wearing"}
        >
          기기 착용 후 주의사항
        </Menu>
        <Menu id="etc" onClick={onClickMenu} selected={selectedMenu === "etc"}>
          기타
        </Menu>
      </MenuBar>
      <TopLine />
      {selectedMenu === "all"
        ? data.map((el, idx) => (
            <>
              <QstBox>
                <QstIcon>
                  <img src={qstIcon} />
                </QstIcon>
                <QstTxt>{el.qst}</QstTxt>
                <QstBtn onClick={() => onClickMoreBtn(idx)}>
                  <ArrowDropDownIcon
                    style={{
                      transform: isOpenIdx.includes(idx)
                        ? "rotate(180deg)"
                        : "none",
                    }}
                  />
                </QstBtn>
              </QstBox>
              {isOpenIdx.includes(idx) && (
                <AswBox>
                  <AswTxt>{el.asw}</AswTxt>
                </AswBox>
              )}
            </>
          ))
        : data
            .filter((el) => el.category === selectedMenu)
            .map((el, idx) => (
              <>
                <QstBox>
                  <QstIcon>
                    <img src={qstIcon} />
                  </QstIcon>
                  <QstTxt>{el.qst}</QstTxt>
                  <QstBtn onClick={() => onClickMoreBtn(idx)}>
                    <ArrowDropDownIcon
                      style={{
                        transform: isOpenIdx.includes(idx)
                          ? "rotate(180deg)"
                          : "none",
                      }}
                    />
                  </QstBtn>
                </QstBox>
                {isOpenIdx.includes(idx) && (
                  <AswBox>
                    <AswTxt>{el.asw}</AswTxt>
                  </AswBox>
                )}
              </>
            ))}
    </>
  );
}

const MenuBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  margin-bottom: 1.5rem;
`;

const Menu = styled.button`
  border-radius: 99px;
  background: ${(props) => (props.selected ? "#42bde3" : "#F6F6F6")};
  padding: 0.8rem 1.5rem;

  color: ${(props) => (props.selected ? "#fff" : "#242424")};
  text-align: center;
  font-size: 1rem;
  font-weight: 500;

  @media ${media.tablet} {
  }

  @media ${media.mobile} {
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
  }
`;

const TopLine = styled.div`
  height: 1px;
  background-color: #dfdfdf;
`;

const QstBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--gray-gray-70, #dfdfdf);
  background: var(--ui-surface, #fff);
  @media ${media.tablet} {
  }

  @media ${media.mobile} {
  }
`;

const QstIcon = styled.div`
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${media.tablet} {
  }

  @media ${media.mobile} {
    margin-left: 1rem;
    width: 2%;
    margin-right: 2rem;
  }
`;

const QstTxt = styled.div`
  width: 84%;
  padding: 2rem 0;
  color: var(--text-text-02, #555);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

const QstBtn = styled.button`
  width: 8%;
`;

const AswBox = styled.div`
  border-bottom: 2px solid var(--gray-gray-70, #dfdfdf);
  background: var(--ui-surface-01, #f6f6f6);
`;

const AswTxt = styled.div`
  width: 84%;
  margin: auto;
  padding: 1.5rem 0;

  color: var(--text-text-02, #555);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;

  @media (max-width: 768px) {
    width: 95%;
  }
`;
