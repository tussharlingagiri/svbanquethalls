import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Importing icons
import "./BottomBar.css"; // Importing the CSS

const BottomBar = () => {
  return (
    <div className="bottom-bar">
    <a href="tel:+1234567890" className="cta-button phone-button">
      <FaPhoneAlt size={18} />
      <span>Call Now</span>
    </a>
    <a href="https://wa.me/1234567890" className="cta-button whatsapp-button">
      <FaWhatsapp size={18} />
      <span>WhatsApp Now</span>
    </a>
  </div>
  

  );
};

export default BottomBar;
