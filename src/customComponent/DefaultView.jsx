import { styled } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const ViewContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`;

const DefaultView = ({ children }) => {
  return (
    <ViewContainer>
      <Header />
      {children}
      <Footer />
    </ViewContainer>
  );
};

export default DefaultView;
