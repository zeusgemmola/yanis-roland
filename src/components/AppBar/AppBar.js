import React from "react";
import "./AppBar.css";
import logo from "./AppBar.logo.svg";

const AppBar = () => {
  return (
    <nav className="AppBar">
      <img
        className="AppBar-logo"
        src={logo}
        aria-label="people"
        alt="People"
      />
    </nav>
  );
};

export default AppBar;
