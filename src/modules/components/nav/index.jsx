import React, { useState, useEffect } from "react";
import logo from "../../../media/logo/logo-no-background.png";
import { useNavigate } from "react-router-dom";
import * as s from "../../styles/header";
import Dropdown from "./components/dropdown";
import MobileNav from "../mobileNav";
import DesktopNav from "../desktopNav";

/**
 * Function that returns the header component
 * @returns The header component
 */
function App() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [source, setSource] = useState("");
  const [isVenueManager, setIsVenueManager] = useState(false);
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

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

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1100) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <s.Header>
        <s.Nav>
          <s.Wrapper>
            <s.LogoContainer onClick={() => navigate("/")}>
              <s.Logo src={logo} alt="logo" />
            </s.LogoContainer>
            {mobile ? (
              <MobileNav toggleDropdown={toggleDropdown} loggedIn={loggedIn} />
            ) : (
              <DesktopNav toggleDropdown={toggleDropdown} loggedIn={loggedIn} />
            )}
          </s.Wrapper>
        </s.Nav>
        <Dropdown open={open} source={source} manager={isVenueManager} />
      </s.Header>
    </>
  );
}

export default App;
