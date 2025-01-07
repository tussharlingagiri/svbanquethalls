import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // For social icons
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [showTopBar, setShowTopBar] = useState(true); // Track visibility of top bar

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolling down
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show or hide the top bar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowTopBar(false); // Hide top bar when scrolling down
      } else {
        setShowTopBar(true); // Show top bar when scrolling up
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  return (
    <>
      {/* Header Container */}
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        {/* Top Bar - Visible based on scroll direction */}
        {showTopBar && (
          <div className="top-bar">
            <div className="contact-info">
              <span>📞 +91 6305 333 751</span>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/svbanquethalls" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/svbanquethalls/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/svbanquethalls/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        )}

        {/* Main Header - Always visible or after scrolling */}
        <div className={`main-header ${showTopBar ? "" : "main-replace"}`}>
          <a href="/" className="logo">
            <img src={`${process.env.PUBLIC_URL}/newlogo07.png`} alt="S V Banquet Halls" />
          </a>
          <button className="hamburger" onClick={toggleMenu}>
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
        </div>
      </div>
    </>
  );
};

export default Header;
