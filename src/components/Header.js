import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure your CSS styles are linked.

const Header = () => (
  <>
    {/* Skip to Main Content Link */}
    <a href="#main-content" className="skip-link">Skip to main content</a>
    
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
