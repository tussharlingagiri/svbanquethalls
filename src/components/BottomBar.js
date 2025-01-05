import React from "react";
import "./BottomBar.css"; // Importing the BottomBar.css
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Importing icons

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890" // Replace with WhatsApp number
        className="bottom-bar-button whatsapp"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+1234567890" // Replace with actual phone number
        className="bottom-bar-button phone"
        aria-label="Call us"
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default BottomBar;
