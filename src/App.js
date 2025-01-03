// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
