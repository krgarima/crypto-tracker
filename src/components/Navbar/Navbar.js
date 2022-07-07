import React from "react";
import "./Navbar.css";

const navbar = () => {
  return (
    <div className="navbar space-between">
      <div className="company-logo">
        <span>
          <img src="/assets/images/ellipseC.png" alt="" srcset="" />
        </span>
        <span>Crypto Tracker</span>
      </div>
      <div className="">
        <i className="fas fa-search"></i>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
};

export default navbar;
