import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Importing icons

const StickyCTA = () => {
  return (
    <div style={stickyContainerStyle}>
      {/* Phone Button */}
      <a
        href="tel:+1234567890" // Replace with actual phone number
        style={{ ...ctaButtonStyle, backgroundColor: "#34b7f1" }} // Phone color
        aria-label="Call us"
      >
        <FaPhoneAlt size={30} color="white" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890" // Replace with WhatsApp number
        style={{ ...ctaButtonStyle, backgroundColor: "#25D366" }} // WhatsApp color
        aria-label="WhatsApp us"
      >
        <FaWhatsapp size={30} color="white" />
      </a>
    </div>
  );
};

// Container for sticky buttons
const stickyContainerStyle = {
  position: "fixed",
  bottom: "20px", 
  right: "20px",
  display: "flex",
  flexDirection: "row", // Align buttons horizontally
  gap: "15px", // Adds a gap between buttons
  zIndex: 9999,
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

// Media queries for mobile responsiveness
const stylesForMobile = `
  @media (max-width: 768px) {
    .sticky-cta {
      bottom: 15px;
      right: 15px;
      gap: 10px;
    }

    .sticky-cta a {
      font-size: 20px;  // Adjust icon size for mobile
      padding: 10px;  // Adjust padding for mobile
    }
  }
`;

export default StickyCTA;
