// Testimonial.js
import React from 'react';

const Testimonial = ({ text, author }) => (
  <div className="testimonial">
    <p>"{text}"</p>
    <h4>- {author}</h4>
  </div>
);

export default Testimonial;
