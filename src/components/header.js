import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="navbar">
        <div className="header">
          <div className="menu">
            {/*<h3>Logo</h3>*/}
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
