import React from "react";
import { FaRing, FaBriefcase, FaBirthdayCake } from "react-icons/fa"; // Importing icons
import "./Services.css";

const Services = () => (
  <section className="services">
    <h2>Our Services</h2>
    <div className="service-list">
      <div className="service-item">
        <div className="icon">
          <FaRing />
        </div>
        <h3>Wedding Halls</h3>
        <p>Spacious and elegant wedding venues tailored for your big day.</p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="service-item">
        <div className="icon">
          <FaBriefcase />
        </div>
        <h3>Corporate Events</h3>
        <p>Professional setups for meetings, conferences, and team-building activities.</p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="service-item">
        <div className="icon">
          <FaBirthdayCake />
        </div>
        <h3>Birthday Parties</h3>
        <p>Celebrate milestones in style with themed decorations and catering options.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  </section>
);

export default Services;
