import React from "react";
import "./HeroVideo.css"; // Ensure this matches the name of your CSS file

const HeroVideo = () => {
  return (
    <div className="hero-video-container">
      <video
        className="hero-video"
        src={`${process.env.PUBLIC_URL}/video01.mp4`} // Update this path
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="video-overlay">
        <h1>Celebrate Life’s Special Moments</h1>
        <p>Perfect venue for birthdays, receptions, and more.</p>
      </div>
    </div>
  );
};

export default HeroVideo;
