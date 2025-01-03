// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} SV Banquet Halls. All Rights Reserved.</p>
      <ul className="social-links">
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;

