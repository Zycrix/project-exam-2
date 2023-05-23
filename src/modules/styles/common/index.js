import styled from "styled-components";

export const colors = {
  primary: "#65E4FF",
  secondary: "#3CB0C9",
  third: "#FF80B1",
  fourth: "#FFEF4D",
  fifth: "#CFC348",
};
export const fonts = {
  strong: "'Anton', 'sans-serif'",
  regular: "'Fira Sans Extra Condensed', 'sans-serif'",
  classy: "'Instrument Serif', 'serif'",
  text: "'Montserrat', 'sans-serif'",
};
export const PrimaryButton = styled.button`
  background-color: ${colors.primary};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
  width: 100%;
`;
export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${colors.fourth};
  color: black !important;
`;
export const FormButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: 0.3rem;
  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.3);
`;
export const RegisterButton = styled(FormButton)`
  background-color: ${colors.fourth};
  width: 60%;
`;
export const CleanButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
export const CardButton = styled(SecondaryButton)`
  width: 100%;
`;
export const ViewMoreButton = styled(PrimaryButton)`
  width: 60%;
  @media (min-width: 1200px) {
    width: 30%;
  }
`;
export const Main = styled.main`
  min-height: calc(100vh - 84px);
  box-sizing: border-box;
  overflow: hidden;
  p {
    font-family: ${fonts.text};
    font-style: medium;
    font-weight: 500;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .error {
    color: red;
  }
  @media (min-width: 1200px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (min-width: 1500px) {
    max-width: 1100px;
  }
`;

export const MainHeading = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  font-family: ${fonts.regular};
`;
export const SecondaryHeading = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  font-family: ${fonts.regular};
  /* margin-top: 2.5rem; */
`;
export const Text = styled.p`
  font-size: 1rem;
  font-family: ${fonts.text};
`;
export const CenteredText = styled(Text)`
  text-align: center;
`;
export const StandardInput = styled.input`
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  font-family: ${fonts.text};
  width: 100%;
  box-sizing: border-box;
`;
export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 84px);
  div {
    width: 20%;
  }
`;
