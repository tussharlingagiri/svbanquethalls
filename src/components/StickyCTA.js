import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Importing icons

const StickyCTA = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px", // 80px from the bottom for mobile-friendly position
        right: "20px", // Place on the right side of the screen
        transform: "translateY(0)", // Maintain no vertical shift
        display: "flex",
        flexDirection: "column", // Align buttons vertically for mobile
        gap: "15px", // Adds space between buttons
        zIndex: 9999,
      }}
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890" // Replace with WhatsApp number
        style={{
          ...ctaButtonStyle,
          backgroundColor: "#25D366", // WhatsApp color
        }}
        aria-label="WhatsApp us"
      >
        <FaWhatsapp size={30} color="white" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+1234567890" // Replace with actual phone number
        style={{
          ...ctaButtonStyle,
          backgroundColor: "#34b7f1", // Phone color
        }}
        aria-label="Call us"
      >
        <FaPhoneAlt size={30} color="white" />
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
  borderRadius: "50%",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  textDecoration: "none",
  color: "white",
  transition: "all 0.3s ease",
};

export default StickyCTA;
