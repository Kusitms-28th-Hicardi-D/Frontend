import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "styled-components";

export default function BtmContainer() {
  return (
    <ViewContainer>
      <Title>HiCardi에 대한 모든 정보는 여기에서 확인해보세요</Title>
      <FileWrapper>
        <File>
          <FileTxt>Hicardi 사용설명서</FileTxt>
          <KeyboardArrowRightIcon />
        </File>
        <File>
          <FileTxt>Hicardi 사용설명서</FileTxt>
          <KeyboardArrowRightIcon />
        </File>
      </FileWrapper>
    </ViewContainer>
  );
}

const ViewContainer = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 1200px;
`;

const Title = styled.div`
  color: var(--text-text-01, #242424);
  text-align: center;
  margin-bottom: 3rem;

  font-family: Noto Sans CJK KR;
  font-size: 1.5rem;
  font-weight: 700;
`;

const FileWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

const File = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5% 1.5rem;
  background: var(--ui-surface, #fff);
  box-shadow: 0px 0px 5px 0px rgba(0, 51, 150, 0.25);
`;

const FileTxt = styled.div`
color: var(--Black, #000);

font-family: Noto Sans CJK KR;
font-size: 1rem;
font-weight: 700;
`;
