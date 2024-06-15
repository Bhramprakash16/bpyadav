// src/Carousel.js
import React from 'react';
import './Carousel.css';

const images = [
  '3.jpg',
  '1.png',
  '2.jpg',
  '3.jpg',
  '1.png',
  '3.jpg',
  '1.png',
  '2.jpg',
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        {images.map((src, index) => (
          <img src={src} alt={`Image ${index + 1}`} key={index} />
        ))}
      </div>
      <div className="carousel-slide">
        {images.map((src, index) => (
          <img src={src} alt={`Image ${index + 1}`} key={index + images.length} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
