import styled from "styled-components";

export default function ProdMenuBar(props) {
  return (
    <DefaultContainer>
      <Menu
        id="Hicardi"
        selected={props.selectedMenu === "Hicardi"}
        onClick={props.onClickMenu}
      >
        하이카디
      </Menu>
      <Menu
        id="Nonin"
        selected={props.selectedMenu === "Nonin"}
        onClick={props.onClickMenu}
      >
        노닌
      </Menu>
      <Menu
        id="Additional"
        selected={props.selectedMenu === "Additional"}
        onClick={props.onClickMenu}
      >
        추가 서비스
      </Menu>
    </DefaultContainer>
  );
}

const DefaultContainer = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 1200px;

  display: flex;
`;

const Menu = styled.div`
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
