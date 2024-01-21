import React from "react";
//import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>
    </header>
  );
}
export default Header;
