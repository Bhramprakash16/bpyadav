// src/ServiceSection.js
import React, { useState } from 'react';
import './ServiceSection.css';

const services = [
  {
    id: 1,
    title: 'Corporate Video Production',
    description: 'Enhance your business with professional corporate videos. Whether you need a promotional video, a training video, or a presentation, I provide tailored solutions to meet your business goals. My services include:',
    image: process.env.PUBLIC_URL + '/corporate.gif',
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
    image: process.env.PUBLIC_URL + '/social1.gif',
    list: [
      'Instagram stories and reels',
      'Facebook and YouTube videos',
      'Short promotional clips',
      'Custom animations and graphics',
    ],
  },
  {
    id: 3,
    title: 'Video Editing for Gamers',
    description: 'Level up your gaming content with professional video editing. Whether you are a streamer or a content creator, I offer services that cater to the gaming community. My services include:',
    image: process.env.PUBLIC_URL + '/gaming.gif',
    list: [
      'Highlight reels',
      'Montages',
      'Stream overlays',
      'Custom transitions',
    ],
  },
  {
    id: 4,
    title: '3D Animation',
    description: 'Bring your ideas to life with stunning 3D animations. I specialize in creating high-quality animations for various purposes. My services include:',
    image: process.env.PUBLIC_URL + '/10_text.gif',
    list: [
      'Character animations',
      'Product modeling',
      'Architectural visualizations',
      'Motion graphics',
    ],
  },
];

const ServiceSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-container">
        {services.map(service => (
          <div
            className="service-item"
            key={service.id}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="service-media">
              <img src={service.image} alt={service.title} />
            </div>
            <div className={`service-text ${hoveredService === service.id ? 'hovered' : ''}`}>
              <h3>{service.title}</h3>
              <p>{hoveredService === service.id ? '' : service.description}</p>
              {hoveredService === service.id && (
                <ul>
                  {service.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
