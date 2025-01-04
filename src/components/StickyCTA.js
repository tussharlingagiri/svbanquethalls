// src/components/StickyCTA.js
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Importing icons

const StickyCTA = () => {
  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}>
      {/* Phone Button */}
      <a
        href="tel:+1234567890" // Replace with actual phone number
        style={ctaButtonStyle}
        aria-label="Call us"
      >
        <FaPhoneAlt size={30} color="white" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890" // Replace with WhatsApp number
        style={{ ...ctaButtonStyle, marginTop: "10px" }}
        aria-label="WhatsApp us"
      >
        <FaWhatsapp size={30} color="white" />
      </a>
    </div>
  );
};

// Shared style for buttons
const ctaButtonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50px",
  height: "50px",
  backgroundColor: "#34b7f1", // Button color
  borderRadius: "50%",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  textDecoration: "none",
  color: "white",
  transition: "all 0.3s ease",
};

export default StickyCTA;
