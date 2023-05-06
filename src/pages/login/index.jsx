import React, { useState } from "react";
import * as c from "../../modules/styles/common";
import * as s from "../../modules/styles/login";
import Login from "../../modules/components/login";

function App() {
  const [login, setLogin] = useState(true);

  function toggleRegister(e) {
    e.preventDefault();
    setLogin(!login);
  }

  return (
    <s.LoginContainer>
      <c.MainHeading>Log in</c.MainHeading>
      {login ? <Login /> : <h1>Register</h1>}

      <c.RegisterButton onClick={(e) => toggleRegister(e)} state={login}>
        {login ? "Register" : "Log in"}
      </c.RegisterButton>
    </s.LoginContainer>
  );
}

export default App;

/* 

function handleRoleChange(e) {
  setRole(e.target.value);
}

function handleLogin(e) {
  console.log("login");
  console.log(e);
}
function handleRegister(e) {
  e.preventDefault();
} */
{
  /* <c.RegisterButton onClick={(e) => toggleRegister(e)}>
      Register
    </c.RegisterButton> */
}
{
  /* <>
<s.LoginInput type="text" placeholder="Username" />
<s.LoginInput type="text" placeholder="Email" />
<s.LoginInput type="password" placeholder="Password" />
<s.LoginInput type="string" placeholder="Confirm password" />
<s.LoginInput type="string" placeholder="Avatar URL" />
<s.RoleContainer>
  <p>I want to:</p>
  <s.RadioContainer>
    <input
      type="radio"
      id="customer"
      name="role"
      value="customer"
      checked={role === "customer"}
      onChange={(e) => handleRoleChange(e)}
    />
    <label htmlFor="customer">Book venues</label>
  </s.RadioContainer>
  <s.RadioContainer>
    <input
      type="radio"
      id="manager"
      name="role"
      value="manager"
      checked={role === "manager"}
      onChange={(e) => handleRoleChange(e)}
    />
    <label htmlFor="manager">Create venues</label>
  </s.RadioContainer>
</s.RoleContainer>
<c.FormButton onClick={(e) => handleRegister(e)}>
  Register
</c.FormButton>
<c.RegisterButton onClick={(e) => toggleRegister(e)}>
  Back to log in
</c.RegisterButton>
</> */
}
