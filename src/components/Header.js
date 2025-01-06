import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // For social icons
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoExists, setLogoExists] = useState(true); // Default to true for testing

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const checkLogoExists = () => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL}/logonew01.png`;
    img.onload = () => setLogoExists(true); // If the image loads, set to true
    img.onerror = () => setLogoExists(false); // If the image fails to load, set to false
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    checkLogoExists(); // Check if the logo exists on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Container */}
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        {/* Top Bar */}
        <div className="top-bar">
          <div className="contact-info">
            <span>📞 +91 6305 333 751</span>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/svbanquethalls" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/svbanquethalls/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/svbanquethalls/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Main Header */}
        <div className="main-header">
          <a href="/" className="logo">
            {logoExists ? (
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="S V Banquet Halls" />
            ) : (
              <span className="logo-text">S V Banquet Halls</span> // Fallback text when logo is missing
            )}
          </a>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <nav>
            <ul className={isMenuOpen ? "active" : ""}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // For social icons
// import "./Header.css";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 50);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Header Container */}
//       <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
//         {/* Top Bar */}
//         <div className="top-bar">
//           <div className="contact-info">
//             <span>📞 +91 6305 333 751</span>
//           </div>
//           <div className="social-icons">
//             <a href="https://www.facebook.com/svbanquethalls" target="_blank" rel="noopener noreferrer">
//               <FaFacebook />
//             </a>
//             <a href="https://www.instagram.com/svbanquethalls/" target="_blank" rel="noopener noreferrer">
//               <FaInstagram />
//             </a>
//             <a href="https://www.linkedin.com/in/svbanquethalls/" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>

//         {/* Main Header */}
//         <div className="main-header">
//           <a href="/" className="logo">
//           {/* <img src="/logo.png" alt="S V Banquet Halls" /> */}
//           <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="S V Banquet Halls" />


//           </a>
//           <button className="hamburger" onClick={toggleMenu}>
//             ☰
//           </button>
//           <nav>
//             <ul className={isMenuOpen ? "active" : ""}>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About Us</Link></li>
//               <li><Link to="/services">Services</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Hero Section */}
//       {/* <div className="hero-section">
//         <h1>Elevate Every Occasion</h1>
//         <p>Make your special events unforgettable at SV Banquets!</p>
//         <button className="hero-btn">Read More</button>
//       </div> */}
//     </>
//   );
// };

// export default Header;


