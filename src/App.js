import React from "react";
import Header from "./components/Header"; // Import Header component
import Footer from "./components/Footer"; // Import Footer component
import HeroVideo from "./components/HeroVideo"; // Import HeroVideo component
import Services from "./components/Services"; // Import Services component
import Testimonials from "./components/Testimonials"; // Import Testimonials component
import ContactForm from "./components/ContactForm"; // Import ContactForm component
import BottomBar from "./components/BottomBar"; // Import BottomBar component
import StickyCTA from "./components/StickyCTA"; // Import StickyCTA component
import "./App.css"; // Import styles

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header />

      {/* Content sections with corresponding component IDs for scrolling */}
      <main id="main-content">
        <section id="hero-video">
          <HeroVideo /> {/* Hero video section */}
        </section>
        <section id="services">
          <Services /> {/* Services section */}
        </section>
        <section id="testimonials">
          <Testimonials /> {/* Testimonials section */}
        </section>
        <section id="contact">
          <ContactForm /> {/* Contact section */}
        </section>
      </main>

      {/* Footer, BottomBar, and StickyCTA */}
      <Footer />
      <BottomBar /> {/* Bottom Bar for mobile */}
      <StickyCTA /> {/* Sticky Call-to-Action */}
    </div>
  );
}

export default App;
