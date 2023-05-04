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
`;
export const LoginInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid lightgray;
  border-radius: 2rem;
`;
export const CheckboxLabel = styled.label``;
export const LoginCheckbox = styled.input`
  width: 1rem;
`;
