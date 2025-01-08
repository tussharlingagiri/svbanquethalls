// Testimonials.js
import React from 'react';
import Testimonial from './Testimonial';  // Import the Testimonial component

const Testimonials = () => (
  <div className="testimonials">
    <Testimonial text="This is a great venue!" author="John Doe" />
    <Testimonial text="Perfect for our event!" author="Jane Smith" />
  </div>
);

export default Testimonials;
