import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video autoPlay muted loop className="background-video">
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to SV Banquet Halls</h1>
        <p>Where Elegance Meets Perfection</p>
        <button className="cta-button">Explore More</button>
      </div>
    </section>
  );
};

export default HeroSection;
