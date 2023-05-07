import React, { useState, useEffect } from "react";
import logo from "../../../media/logo/logo-no-background.png";
import { Link, useNavigate } from "react-router-dom";
import * as s from "../../styles/header";
import * as c from "../../styles/common";
import Dropdown from "./components/dropdown";

function App() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function toggleDropdown() {
    setOpen(!open);
  }

  useEffect(() => {
    function loginStatus() {
      if (localStorage.getItem("token")) {
        setLoggedIn(true);
      } else if (sessionStorage.getItem("token")) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }
    loginStatus();
  }, [navigate]);

  return (
    <>
      <s.Header>
        <s.Nav>
          <s.LogoContainer onClick={() => navigate("/")}>
            <s.Logo src={logo} alt="logo" />
          </s.LogoContainer>
          <s.IconContainer>
            <s.Icon>
              {loggedIn ? (
                <Link to="/account">
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                </Link>
              ) : (
                <Link to="/login" className="login">
                  <c.SecondaryButton>Log in</c.SecondaryButton>
                </Link>
              )}
            </s.Icon>
            <s.Icon>
              <c.CleanButton onClick={toggleDropdown}>
                <span className="material-symbols-outlined">menu</span>
              </c.CleanButton>
            </s.Icon>
          </s.IconContainer>
        </s.Nav>
      </s.Header>
      <Dropdown open={open} />
    </>
  );
}

export default App;
