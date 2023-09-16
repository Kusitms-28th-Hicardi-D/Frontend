import {
  ImageBox,
  MainTitle,
  TextBox,
  Title,
  ViewContainer,
  ViewItem,
  usages,
  SubTitle,
} from "./Usage.style";

function UsagePart() {
  return (
    <ViewContainer>
      <MainTitle>하이카디 플러스는 이렇게 활용될 수 있습니다</MainTitle>
      {usages.map((element, index) => {
        return (
          <ViewItem key={index} even={index % 2 == 0 && true}>
            <ImageBox className="box">
              <img
                src={element[0]}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "3%",
                  backgroundColor: "red",
                  objectFit: "cover",
                }}
                alt="file"
              />
            </ImageBox>
            <TextBox className="textbox">
              <Title size3 bold>
                {element[1]}
              </Title>
              <SubTitle>{element[2]}</SubTitle>
            </TextBox>
          </ViewItem>
        );
      })}
    </ViewContainer>
  );
}

export default UsagePart;
