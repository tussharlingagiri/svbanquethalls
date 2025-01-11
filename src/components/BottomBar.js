import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./BottomBar.css";

const BottomBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <>
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
      {/* Sticky Footer */}
      <div className="sticky-footer">
        <p>© 2025 SV Banquet Halls | All Rights Reserved</p>
      </div>
    </>
  );
};

export default BottomBar;
