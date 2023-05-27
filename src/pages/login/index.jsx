import React, { useState } from "react";
import * as c from "../../modules/styles/common";
import * as s from "../../modules/styles/login";
import Login from "../../modules/components/login";
import Register from "../../modules/components/register";

function App() {
  const title = document.querySelector("title");
  title.innerHTML = "Holidaze | Login";
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleInfo(email, password) {
    setEmail(email);
    setPassword(password);
  }

  function toggleRegister(e) {
    if (e) {
      e.preventDefault();
    }
    setLogin(!login);
  }

  return (
    <s.LoginContainer>
      <c.MainHeading>{login ? "Log in" : "Register"}</c.MainHeading>
      {login ? (
        <Login email={email} password={password} />
      ) : (
        <Register toggle={toggleRegister} info={handleInfo} />
      )}

      <c.RegisterButton onClick={(e) => toggleRegister(e)} state={login}>
        {login ? "Register" : "Log in"}
      </c.RegisterButton>
    </s.LoginContainer>
  );
}

export default App;
