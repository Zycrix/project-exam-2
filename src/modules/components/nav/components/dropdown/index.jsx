import React, { useState, useEffect } from "react";
import * as s from "../../../../styles/header";
import * as c from "../../../../styles/common";
import { NavLink } from "react-router-dom";

/**
 * Function that returns the dropdown component
 * @param {boolean} props.open Boolean for checking if the dropdown is open
 * @param {string} props.source String for checking what button opened the dropdown
 * @param {boolean} props.manager Boolean for checking if the user is a manager
 * @returns A dropdown component
 */
function App(props) {
  //Get the current path to set the active class
  const path = window.location.hash;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              className={path === "#/" ? "active" : ""}
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
          {props.manager ? (
            <li>
              <NavLink
                onClick={closeDropdown}
                to={`/new-venue`}
                className={path === "/new-venue" ? "active" : ""}
              >
                Create new venue
              </NavLink>
            </li>
          ) : null}
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
