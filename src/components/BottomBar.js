import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";  // Importing icons
import "./BottomBar.css";  // Importing the BottomBar.css

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      {/* Call Now Button */}
      <a
        href="tel:+1234567890" // Replace with actual phone number
        className="cta-button phone-button"
        aria-label="Call us"
      >
        <FaPhoneAlt size={20} color="white" /> {/* Icon for Call Now */}
        <span>Call Now</span>
      </a>

      {/* WhatsApp Now Button */}
      <a
        href="https://wa.me/1234567890" // Replace with actual WhatsApp number
        className="cta-button whatsapp-button"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp size={20} color="white" /> {/* Icon for WhatsApp */}
        <span>WhatsApp Now</span>
      </a>
    </div>
  );
};

export default BottomBar;
