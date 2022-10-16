import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import logo from "../assets/LogoOwnItAll.png";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="left-side">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className={!openMenu ? "right-side" : "mobile-menu"}>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/packages" className="link">
          Packages
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <div id="btn">
          <Link to="/booking" className="bookBtn">
            Book Now
          </Link>
        </div>
      </div>
      <i
        class="fa fa-bars"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      ></i>
    </div>
  );
};
export default Navbar;
