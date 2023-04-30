import React from "react";
import * as s from "../../../../styles/header";
import { Link } from "react-router-dom";

function App(props) {
  const path = window.location.pathname;

  return (
    <s.Dropdown open={props.open}>
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
    </s.Dropdown>
  );
}

export default App;
