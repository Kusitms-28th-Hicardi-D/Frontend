import "./App.css";
import DefaultView from "./components/container/DefaultView";
import { EContainer } from "./styles/customComponents";
import LandingMain from "./pages/Landing/LandingMain";

function App() {
  return (
    <DefaultView>
      <EContainer>
        <LandingMain />
      </EContainer>
    </DefaultView>
  );
}

export default App;
