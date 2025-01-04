import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroVideo from "./components/HeroVideo";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";  // Import the BottomBar component

const App = () => (
  <>
    <TopBar />
    <Header />
    <main id="main-content">
      <HeroVideo />
      <About />
      <Services />
      <Testimonials />
    </main>
    <Footer />
    <BottomBar />  {/* Add the BottomBar here */}
  </>
);

export default App;
