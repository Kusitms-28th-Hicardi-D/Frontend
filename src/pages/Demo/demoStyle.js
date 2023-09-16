import styled from "@emotion/styled";
import { FlexBox, Words } from "../../styles/customComponents";
import { Button } from "@mui/material";

const sizes = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1440px",
};

const media = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

export const ViewContainer = styled(FlexBox)`
  margin: auto;
  width: 80%;
  flex-flow: column nowrap;
  align-items: center;
  align-self: center;
  @media ${media.desktop} {
    width: 90%;
    align-self: center;
  }
`;

export const BtnContainer = styled(FlexBox)`
  width: 100%;
  gap: 10px;
`;

export const SolutionBtn = styled(FlexBox)`
  display: flex;
  padding: 20px 16px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-radius: 8px;
  background: ${(props) =>
    props.clicked
      ? "var(--ui-surface-05, #c8ecf7)"
      : "var(--ui-surface-01, #F6F6F6)"};
  transition: background 0.2s ease-out;
`;

export const WordBox = styled(FlexBox)`
  margin-top: 3rem;
  margin-bottom: 2rem;
  align-items: center;
`;

export const Title = styled(Words)`
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 0.2rem;
`;
export const SubTitle = styled(Words)`
  font-size: 1.5rem;
  color: var(--text-text-03, #8b8b8b);
  letter-spacing: 0.1rem;
`;

export const FormBox = styled(FlexBox)`
  width: 80%;
  flex-flow: column nowrap;
`;

export const FormWrapper = styled(FlexBox)`
  margin-top: 1rem;
  flex-flow: column nowrap;
  margin-bottom: 1rem;
`;

export const FormLabel = styled(Words)`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  margin-left: 0.2rem;
`;

export const SubmitBtn = styled(Button)`
  margin-bottom: 3rem;
  border: 2px solid var(--ui-primary, #19afdd);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
