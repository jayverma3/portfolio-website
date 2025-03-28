import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/dragon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <div>
      <header className="header">
        <div className="main-div">
          <Link to="/" className="hlogo">
            <img src={logo} alt="ACE Logo" />
          </Link>
          <div className="child-div-2">
            <div className="hamburger" onClick={toggleMenu}>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
            <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
              <li className="nav-item">
                <Link to="/aboutme"> About </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact"> Contact </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop"> Shop </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin"> Admin </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
