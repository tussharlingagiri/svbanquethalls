import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-info">
          <span>📞 +91 6305 333 751</span>
          <a href="mailto:info@svbanquethalls.com" className="email-link">
            info@svbanquethalls.com
          </a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/svbanquethalls" target="_blank" rel="noopener noreferrer">
            FB
          </a>
          <a href="https://www.instagram.com/svbanquethalls/" target="_blank" rel="noopener noreferrer">
            IG
          </a>
          <a href="https://www.linkedin.com/in/svbanquethalls/" target="_blank" rel="noopener noreferrer">
            IN
          </a>
        </div>
      </div>
      <div className="main-header">
        <a href="/" className="logo">
          <img src="/logo.png" alt="S V Banquet Halls Logo" />
          <span>S V Banquet Halls</span>
        </a>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        <nav>
          <ul className={isMenuOpen ? "active" : ""}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <a href="/book" className="book-now-btn">Book Now</a>
      </div>
    </header>
  );
};

export default Header;
