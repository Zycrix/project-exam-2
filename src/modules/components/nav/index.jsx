import React, { useState, useEffect } from "react";
import logo from "../../../media/logo/logo-no-background.png";
import { Link, useNavigate } from "react-router-dom";
import * as s from "../../styles/header";
import * as c from "../../styles/common";
import Dropdown from "./components/dropdown";

function App() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [source, setSource] = useState("");
  const [isVenueManager, setIsVenueManager] = useState(false);

  const navigate = useNavigate();

  function toggleDropdown(source) {
    setOpen(!open);
    setSource(source);
  }

  useEffect(() => {
    function loginStatus() {
      if (localStorage.getItem("token")) {
        setLoggedIn(true);
        setIsVenueManager(JSON.parse(localStorage.getItem("manager")));
      } else if (sessionStorage.getItem("token")) {
        setLoggedIn(true);
        setIsVenueManager(JSON.parse(sessionStorage.getItem("manager")));
      } else {
        setLoggedIn(false);
        setIsVenueManager(false);
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
                <c.CleanButton onClick={() => toggleDropdown("account")}>
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
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
        </s.Nav>
      </s.Header>
      <Dropdown open={open} source={source} manager={isVenueManager} />
    </>
  );
}

export default App;
