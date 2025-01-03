// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <nav className="nav">
      <div className="logo">
        <Link to="/">SV Banquet Halls</Link>
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

