import React from "react";
import * as s from "../../../../styles/header";
import * as c from "../../../../styles/common";
import { Link } from "react-router-dom";

function App(props) {
  const path = window.location.pathname;
  console.log(props.source);
  function handleLogout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <s.Dropdown open={props.open}>
      {props.source === "menu" ? (
        <ul>
          <li>
            <Link to="/" className={path === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/venues" className={path === "/venues" ? "active" : ""}>
              All venues
            </Link>
          </li>
          <li>
            <Link to="/about" className={path === "/about" ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={path === "/contact" ? "active" : ""}>
              Contact
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/account" className={path === "/account" ? "active" : ""}>
              Account
            </Link>
          </li>
          <li>
            <c.CleanButton onClick={handleLogout}>
              <s.Text>Log out</s.Text>
            </c.CleanButton>
          </li>
        </ul>
      )}
    </s.Dropdown>
  );
}

export default App;
