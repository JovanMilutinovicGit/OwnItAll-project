import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import logo from "../assets/LogoOwnItAll.png";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-side">
        <img src={logo} />
      </div>
      <div className="right-side">
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
        <Link to="/booking" id="btn">
          Book Now
        </Link>
      </div>
      <i class="fa fa-bars"></i>
    </div>
  );
};
export default Navbar;
