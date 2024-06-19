// src/ServiceSection.js
import React from 'react';
import './ServiceSection.css'; // Import the CSS file

const services = [
  {
    id: 1,
    title: 'Corporate Video Production',
    description: 'Enhance your business with professional corporate videos. Whether you need a promotional video, a training video, or a presentation, I provide tailored solutions to meet your business goals. My services include:',
    image: process.env.PUBLIC_URL + '/corporate-video-production.jpg',
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
    image: process.env.PUBLIC_URL + '/social-media-content.jpeg',
    list: [
      'Instagram stories and reels',
      'Facebook and YouTube videos',
      'Short promotional clips',
      'Custom animations and graphics',
    ],
  },
  {
    id: 3,
    title: '3-D Animation',
    description: "Unlock the power of storytelling with our state-of-the-art 3D animation services. Whether you need to bring your products to life, captivate your audience with stunning visuals, or simplify complex ideas, we’ve got you covered. Our expert animators craft immersive and realistic animations that elevate your brand and engage your audience like never before. Let’s create something amazing together!",
    video: process.env.PUBLIC_URL + '/Comp 1.mp4',
    list: [
      'Product animations',
      'Architectural visualization',
      'Character animation',
      'Technical animations',
    ],
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className={`service-item ${index % 2 === 0 ? 'text-left' : 'text-right'}`} key={service.id}>
            <div className="service-content">
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-media">
                {service.image && <img src={service.image} alt={service.title} />}
                {service.video && (
                  <div className="video-container">
                    <video width="100%" controls>
                      <source src={service.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
