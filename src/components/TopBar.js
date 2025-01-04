import React, { useState, useEffect } from "react";
import "./TopBar.css";

const TopBar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHidden(true); // Hide top bar when scrolling down
      } else {
        setHidden(false); // Show top bar when scrolling up
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`top-bar ${hidden ? "hidden" : ""}`}>
      <div className="logo">
        <a href="/">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="SV Banquet Halls"
          />
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
