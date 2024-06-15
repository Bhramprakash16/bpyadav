// src/ServiceSection.js
import React from 'react';
import './ServiceSection.css'; // Import the CSS file

const services = [
  {
    id: 1,
    title: 'Corporate Video Production',
    description: 'Enhance your business with professional corporate videos. Whether you need a promotional video, a training video, or a presentation, I provide tailored solutions to meet your business goals. My services include:',
    image: 'corporate-video-production.jpg',
    list: [
      'Corporate interviews',
      'Product demonstrations',
      'Training videos',
      'Event coverage',
    ],
  },
  {
    id: 2,
    title: 'Social Media Content',
    description: 'Boost your online presence with engaging social media content. I specialize in creating videos that are optimized for various social media platforms, ensuring your content reaches the right audience. My services include:',
    image: 'social-media-content.jpeg',
    list: [
      'Instagram stories and reels',
      'Facebook and YouTube videos',
      'Short promotional clips',
      'Custom animations and graphics',
    ],
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-scroll-container">
        {services.map(service => (
          <div className="service-item" key={service.id}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
  