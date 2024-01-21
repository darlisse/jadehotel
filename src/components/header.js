import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "./jade-logo.png"

function Header() {
  return (
    <nav>
      <div className="navbar">
        <div className="header">
          <div className="menu">
            <Link className='nav-link' to="/">Home</Link>
            <img id="logo" src={logo} alt="Logo"/>
            <Link className='nav-link' to="/About">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
