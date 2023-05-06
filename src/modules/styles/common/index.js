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
  background-color: ${(props) =>
    props.state === true ? colors.fourth : "red"};
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
`;

export const MainHeading = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  font-family: ${fonts.strong};
`;
export const SecondaryHeading = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  font-family: ${fonts.regular};
  margin-top: 2.5rem;
`;
export const Text = styled.p`
  font-size: 1rem;
  font-family: ${fonts.text};
`;
export const CenteredText = styled(Text)`
  text-align: center;
`;
