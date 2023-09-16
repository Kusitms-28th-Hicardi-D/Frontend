import styled from "styled-components";

export const MenuBarContainer = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 1200px;

  display: flex;
`;

export const Menu = styled.div`
  flex: 1;
  text-align: center;
  border-bottom: 2px solid ${(props) => (props.selected ? "#19AFDD" : "#fff")};
  padding: 1rem 0rem;
  cursor: pointer;

  color: var(--text-text-01, #242424);
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-weight: 700;
`;

export const TopContainer = styled.div`
  padding: 5% 0;
  background: var(
    --gradiant,
    linear-gradient(
      142deg,
      rgba(200, 236, 247, 0.83) 5.19%,
      rgba(200, 236, 247, 0) 91.09%
    ),
    #fff
  );
  margin-bottom: 6rem;
`;

export const TxtContainer = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 1200px;
`;

export const Title = styled.div`
  color: var(--text-text-01, #242424);

  font-family: Noto Sans CJK KR;
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.7rem;
  margin-bottom: 2rem;
`;

export const BuyBtn = styled.div`
  width: 25%;
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.6rem 0.8rem 1rem;
  border: 2px solid var(--ui-primary, #19afdd);
  cursor: pointer;
`;

export const BtnTxt = styled.div`
  color: var(--ui-primary, #19afdd);

  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-weight: 700;
`;

export const BtmContainer = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 1200px;
  margin-bottom: 7rem;
`;

export const BtmTitle = styled.div`
  color: var(--text-text-01, #242424);
  text-align: center;
  margin-bottom: 3rem;

  font-family: Noto Sans CJK KR;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const File = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5% 1.5rem;
  background: var(--ui-surface, #fff);
  box-shadow: 0px 0px 5px 0px rgba(0, 51, 150, 0.25);
`;

export const FileTxt = styled.div`
  color: var(--Black, #000);

  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-weight: 700;
`;
