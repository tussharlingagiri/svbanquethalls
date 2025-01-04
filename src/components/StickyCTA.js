import React from "react";
import "./StickyCTA.css"; // Import the CSS file for styling

const StickyCTA = () => {
  return (
    <div className="sticky-cta">
      <a href="tel:+1234567890" className="cta-button">
        <i className="fa fa-phone" aria-hidden="true"></i>
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
      >
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default StickyCTA;
