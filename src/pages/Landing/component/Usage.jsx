import { styled } from "styled-components";
import { FlexBox, Words } from "../../../styles/customComponents";

const usages = [
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

const ViewContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: row wrap;

  justify-content: center;
  align-items: center;
`;

const ViewItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 1 0 20%;
  align-items: center;

  .box {
    overflow: hidden;
    border-radius: 3%;
  }

  .textbox {
    padding-left: 5%;
    padding-right: 5%;
  }

  img {
    transition: transform 0.3s ease; // 부드러운 확대 효과를 위한 transition
  }
  &:hover img {
    object-fit: cover;
    transform: scale(1.1); // 이미지를 10% 확대
    border-radius: 3%;
    overflow: hidden;
  }

  &:hover .textbox p:nth-child(1) {
    color: blue; // 텍스트를 파란색으로 변경
    padding-left: 1%;
    transition: padding-left 0.3s ease;
  }

  .textbox p:nth-child(1) {
    transition: padding-left 0.3s ease;
  }
`;

function UsagePart() {
  return (
    <ViewContainer>
      {usages.map((element, index) => {
        return (
          <ViewItem key={index}>
            <FlexBox className="box">
              <img
                src={element[0]}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "3%",
                }}
                alt="file"
              />
            </FlexBox>
            <FlexBox className="textbox">
              <Words size3 bold>
                {element[1]}
              </Words>
              <Words style={{ fontSize: "0.8rem" }}>{element[2]}</Words>
            </FlexBox>
          </ViewItem>
        );
      })}
    </ViewContainer>
  );
}

export default UsagePart;
