import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Importing icons

const StickyCTA = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Hook to track screen size and determine if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile size
    };
    handleResize(); // Run it once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: isMobile ? "15px" : "20px", // Adjust bottom positioning based on screen size
        right: "20px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Stack vertically for mobile, horizontal for desktop
        gap: isMobile ? "10px" : "15px", // Adjust spacing
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

      {/* Phone Button - Only for Desktop */}
      {!isMobile && (
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
      )}

      {/* Phone Button - For Mobile */}
      {isMobile && (
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
      )}
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
