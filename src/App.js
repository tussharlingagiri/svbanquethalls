import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroVideo from "./components/HeroVideo"; // Updated import
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import TopBar from "./components/TopBar";

const App = () => (
  <>
    <TopBar />
    <Header />
    <main id="main-content">
      <HeroVideo /> {/* Replaced HeroSection with HeroVideo */}
      <About /> 
      <Services />
      <Testimonials />
    </main>
    <Footer />
    <div className="bottom-bar">
      <p>Call us now to book your event!</p>
    </div>
  </>
);

export default App;


