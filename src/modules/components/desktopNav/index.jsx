import React from "react";
import * as s from "../../styles/header";
import * as c from "../../styles/common";
import { Link, NavLink } from "react-router-dom";
function App({ toggleDropdown, loggedIn }) {
  const path = window.location.hash;
  return (
    <>
      <s.DesktopList>
        <ul>
          <li>
            <NavLink to="/" className={path === "#/" ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/venues"
              className={path === "/venues" ? "active" : ""}
            >
              All venues
            </NavLink>
          </li>
        </ul>
      </s.DesktopList>
      <s.IconDesktop>
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
      </s.IconDesktop>
    </>
  );
}

export default App;
