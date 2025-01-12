import React from "react";
import Header from "./components/Header"; // Import Header component
import Footer from "./components/Footer"; // Import Footer component
import HeroVideo from "./components/HeroVideo"; // Import HeroVideo component
import Services from "./components/Services"; // Import Services component
import Testimonials from "./components/Testimonials"; // Import Testimonials component
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
        <HeroVideo id="hero-video" /> {/* Hero video section */}
        <Services id="services" /> {/* Services section */}
        <Testimonials id="testimonials" /> {/* Testimonials section */}
      </main>

      {/* Footer, BottomBar, and StickyCTA */}
      <Footer />
      <BottomBar />  {/* Bottom Bar for mobile */}
      <StickyCTA />  {/* Sticky Call-to-Action */}
    </div>
  );
}

export default App;
