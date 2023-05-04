import React, { useState } from "react";
import * as c from "../../modules/styles/common";
import * as s from "../../modules/styles/login";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useApi from "../../modules/hooks/useApi";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [register, setRegister] = useState(false);

  function toggleRegister(e) {
    e.preventDefault();
    setRegister(!register);
  }

  return (
    <div>
      {register !== true ? (
        <>
          <c.MainHeading>Log in</c.MainHeading>
          <s.LoginForm>
            <s.LoginInput
              value={username}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <s.LoginInput type="password" placeholder="Password" />
            <div class="checkbox">
              <s.CheckboxLabel>Remember me:</s.CheckboxLabel>
              <s.LoginCheckbox type="checkbox" />
            </div>
            <div class="button-container">
              <c.FormButton>Log in</c.FormButton>
              <c.RegisterButton onClick={(e) => toggleRegister(e)}>
                Register
              </c.RegisterButton>
            </div>
          </s.LoginForm>
        </>
      ) : (
        <c.MainHeading>Register</c.MainHeading>
      )}
    </div>
  );
}

export default App;
