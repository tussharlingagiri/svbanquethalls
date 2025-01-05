import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./BottomBar.css";  // Importing the BottomBar.css

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="cta-buttons">
        {/* Call Button */}
        <a
          href="tel:+1234567890" // Replace with actual phone number
          className="cta-button phone"
          aria-label="Call us"
        >
          <FaPhoneAlt size={30} color="white" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890" // Replace with WhatsApp number
          className="cta-button whatsapp"
          aria-label="WhatsApp us"
        >
          <FaWhatsapp size={30} color="white" />
          <span>WhatsApp Now</span>
        </a>
      </div>
    </div>
  );
};

export default BottomBar;
