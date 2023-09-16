import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  ImageContainer,
  ViewContainer,
  YesBtn,
} from "./patientStyle";

function PatientPage() {
  const navigate = useNavigate();
  return (
    <ViewContainer>
      <ImageContainer>
        <img
          src={require("../../../assets/image/Patient/Patientimage.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageContainer>
      <ButtonContainer>
        <YesBtn
          variant="outlined"
          style={{
            padding: "2rem 5rem 2rem 5rem",
            borderRadius: "30px",
            fontSize: "2rem",
          }}
          onClick={() => {
            navigate("/purchase");
          }}
        >
          환자모니터링 솔루션 구매하기
        </YesBtn>
      </ButtonContainer>
    </ViewContainer>
  );
}
export default PatientPage;
