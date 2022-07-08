import React from "react";
import "./Navbar.css";

const navbar = () => {
  return (
    <div className="navbar space-between">
      <div className="company-logo space-between">
        <i className="fas fa-bars " id="bar-small"></i>
        <img src="/assets/images/ellipseC.png" alt="logo" />
        <span>Crypto Tracker</span>
      </div>
      <div className="icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-bars" id="bar-big"></i>
      </div>
    </div>
  );
};

export default navbar;
