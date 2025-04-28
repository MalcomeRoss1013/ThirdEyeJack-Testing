import React, { useState } from 'react';
import './JumbotronSlider.css';

const JumbotronSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide data with title and subtitle (no image path here, it's defined in CSS)
  const slides = [
    {
      title: "Welcome to Our Site",
      subtitle: "Explore our amazing features.",
    },
    {
      title: "Great Offers Await",
      subtitle: "Don't miss out on special discounts.",
    },
    {
      title: "Join Us Today",
      subtitle: "Sign up and be part of something great.",
    }
  ];

  const showNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Loop back to first slide
  };

  const showPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length // Loop back to last slide
    );
  };

  return (
    <div className="jumbotron">
      <div className="slide-container">
        {/* Background image container */}
        <div className={`slide-background slide-${currentIndex}`}></div>

        {/* Text content */}
        <div className="slide-text">
          <h1>{slides[currentIndex].title}</h1>
          <p>{slides[currentIndex].subtitle}</p>
        </div>

        {/* Navigation buttons */}
        <div className="controls">
          <button className="prev" onClick={showPrevSlide}>
            &#8249;
          </button>
          <button className="next" onClick={showNextSlide}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default JumbotronSlider;
