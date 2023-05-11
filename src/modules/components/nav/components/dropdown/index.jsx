import React, { useState, useEffect } from "react";
import * as s from "../../../../styles/header";
import * as c from "../../../../styles/common";
import { NavLink } from "react-router-dom";

function App(props) {
  const path = window.location.pathname;
  const [open, setOpen] = useState(false);

  let name = "";
  if (window.localStorage.getItem("name")) {
    name = window.localStorage.getItem("name");
  } else if (window.sessionStorage.getItem("name")) {
    name = window.sessionStorage.getItem("name");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.reload();
  }

  useEffect(() => {
    setOpen(!open);
  }, [props.open]);

  useEffect(() => {
    setOpen(false);
  }, []);

  function closeDropdown() {
    setOpen(false);
  }

  return (
    <s.Dropdown open={open}>
      {props.source === "menu" ? (
        <ul>
          <li>
            <NavLink
              onClick={closeDropdown}
              to="/"
              className={path === "/" ? "active" : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeDropdown}
              to="/venues"
              className={path === "/venues" ? "active" : ""}
            >
              All venues
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeDropdown}
              to="/about"
              className={path === "/about" ? "active" : ""}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeDropdown}
              to="/contact"
              className={path === "/contact" ? "active" : ""}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink
              onClick={closeDropdown}
              to={`/profile/${name}`}
              className={path === "/profile" ? "active" : ""}
            >
              Profile
            </NavLink>
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
