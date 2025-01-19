import React from "react";
import "./ContactForm.css"; // Optional: Add styles for the form

const ContactForm = () => (
  <section className="contact-form" id="contact">
    <div className="section-divider"></div>
    <h2>Contact Us</h2>
    <p>
      We’d love to hear from you! For immediate assistance, please reach out to us directly via WhatsApp or phone.
    </p>
    <div className="contact-actions">
      <a href="tel:+916305333751" className="cta-button call-now">
        📞 Call Us
      </a>
      <a
        href="https://wa.me/916305333751"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button whatsapp"
      >
        💬 WhatsApp Us
      </a>
    </div>
    <p>
      Prefer email? Send us a message at{" "}
      <a href="mailto:svfunctionhalls@gmail.com" className="email-link">
      svfunctionhalls@gmail.com
      </a>
    </p>
  </section>
);

export default ContactForm;
