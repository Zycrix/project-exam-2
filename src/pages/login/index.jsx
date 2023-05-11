import React, { useState } from "react";
import * as c from "../../modules/styles/common";
import * as s from "../../modules/styles/login";
import Login from "../../modules/components/login";
import Register from "../../modules/components/register";

function App() {
  const [login, setLogin] = useState(true);

  function toggleRegister(e) {
    e.preventDefault();
    setLogin(!login);
  }

  return (
    <s.LoginContainer>
      <c.MainHeading>Log in</c.MainHeading>
      {login ? <Login /> : <Register />}

      <c.RegisterButton onClick={(e) => toggleRegister(e)} state={login}>
        {login ? "Register" : "Log in"}
      </c.RegisterButton>
    </s.LoginContainer>
  );
}

export default App;
