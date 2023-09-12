import { styled } from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const ViewContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
  max-width: 100vw;

  box-sizing: border-box;
`;

const DefaultView = ({ children }) => {
  return (
    <ViewContainer className="viewContainer">
      <Header />
      {children}
      <Footer />
    </ViewContainer>
  );
};

export default DefaultView;
