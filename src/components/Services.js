import React from "react";
import './StickyCTA.css'; // Make sure to import the CSS

const StickyCTA = () => {
  return (
    <div className="sticky-cta">
      <a href="tel:+1234567890" className="phone">
        <i className="fas fa-phone-alt"></i>
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default StickyCTA;
