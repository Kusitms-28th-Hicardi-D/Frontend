import "./App.css";
import DefaultView from "./customComponent/DefaultView";
import { EContainer } from "./customComponent/customComponents";
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
