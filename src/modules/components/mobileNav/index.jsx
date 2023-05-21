import React from "react";
import * as s from "../../styles/header";
import * as c from "../../styles/common";
import { Link } from "react-router-dom";
function App({ toggleDropdown, loggedIn }) {
  return (
    <s.IconContainer>
      <s.Icon>
        {loggedIn ? (
          <c.CleanButton onClick={() => toggleDropdown("account")}>
            <span className="material-symbols-outlined">account_circle</span>
          </c.CleanButton>
        ) : (
          <Link to="/login" className="login">
            <c.SecondaryButton>Log in</c.SecondaryButton>
          </Link>
        )}
      </s.Icon>
      <s.Icon>
        <c.CleanButton onClick={() => toggleDropdown("menu")}>
          <span className="material-symbols-outlined">menu</span>
        </c.CleanButton>
      </s.Icon>
    </s.IconContainer>
  );
}

export default App;
