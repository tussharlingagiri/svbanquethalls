import React from "react";
import "./ContactForm.css";

const ContactForm = () => (
  <section className="contact-form" id="contact">
    <h2>Contact Us</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Write your message" required></textarea>
      </div>

      <button type="submit" className="submit-button">Send Message</button>
    </form>
  </section>
);

export default ContactForm;
