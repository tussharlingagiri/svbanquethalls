import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Importing icons
import "./BottomBar.css"; // Importing the CSS

const BottomBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update `isMobile` state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only render the bottom bar if the screen size is mobile
  if (!isMobile) {
    return null;
  }

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
