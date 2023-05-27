import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  * {
    margin: 0.4rem 0;
  }
  .checkbox {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 0.6rem;
  }
  .button-container {
    margin-top: 1rem;
  }
  .password-container {
    position: relative;
    button {
      position: absolute;
      top: 4px;
      right: 10px;
    }
  }
`;
export const LoginInput = styled.input`
  width: 100%;
  padding: 0.7rem;
  box-sizing: border-box;
  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid lightgray;
  border-radius: 2rem;
  font-size: 1rem;
`;
export const CheckboxLabel = styled.label``;
export const LoginCheckbox = styled.input`
  width: 1rem;
`;
export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  input,
  label {
    margin: 0;
    padding: 0.5rem;
  }
`;
export const RoleContainer = styled.div`
  border: 1px solid lightgray;
  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1100px) {
    width: 70%;
    margin: 0 auto;
  }
`;
