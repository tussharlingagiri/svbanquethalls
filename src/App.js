import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroVideo from "./components/HeroVideo"; // Updated import
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const App = () => (
  <>
    <Header />
    <main id="main-content">
      <HeroVideo /> {/* Replaced HeroSection with HeroVideo */}
      <About />
      <Services />
      <Testimonials />
    </main>
    <Footer />
  </>
);

export default App;
