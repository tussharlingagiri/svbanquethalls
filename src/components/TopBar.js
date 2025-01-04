import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <a href="/">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="SV Banquet Halls" />

        </a>
      </div>
      <nav className="nav-menu">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="cta-button">
        <a href="#contact" className="button">Book Now</a>
      </div>
    </div>
  );
};

export default TopBar;
