import React, { useState, useEffect } from 'react';
import './Testimonial.css'; // Import the custom styles

const Testimonials = () => {
  const reviews = [
    {
      text: "Good one for birthday parties and small occasions, don't have enough car parking except that everything is fine with good dining space.",
      author: "Subrahmanyam Immaneni",
      rating: 5,
      googleReviewLink: "https://maps.app.goo.gl/KBk2dsgnBUxDk15aA"
    },
    {
      text: "Perfect for our event!",
      author: "Jane Smith",
      rating: 4,
      googleReviewLink: "https://maps.app.goo.gl/KBk2dsgnBUxDk15aA"
    },
    {
      text: "A memorable experience!",
      author: "Alice Johnson",
      rating: 4,
      googleReviewLink: "https://maps.app.goo.gl/KBk2dsgnBUxDk15aA"
    },
  ];

  return (
    <div id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-header">
              <div className="testimonial-author">
                <h4>{review.author}</h4>
                <div className="testimonial-rating">
                  {/* Display stars for rating */}
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < review.rating ? "star filled" : "star"}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="testimonial-text">"{review.text}"</p>
            <a 
              href={review.googleReviewLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="google-review-link"
            >
              View Review
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
