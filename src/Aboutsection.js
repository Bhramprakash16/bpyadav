// src/Aboutsection.js
import React from 'react';
import './Aboutsection.css'; // Import the CSS file

const Aboutsection = () => {
  return (
    <section id="about" className="about">
      <div className="video-container">
        <video autoPlay muted loop id="bg-video">
          <source src={process.env.PUBLIC_URL + '/IMG_5109.mp4'} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="about-content">
        <div className="about-container">
          <h2>About Me</h2>
          <p>Hello! I'm Bhramprakash, a passionate video editor with over 2 years of experience in creating compelling visual content. My journey in the world of video editing started with a deep interest in storytelling and a desire to bring stories to life through video.</p>
          <p>Over the years, I have honed my skills in various aspects of video editing, including:</p>
          <ul>
            <li>Creating engaging corporate videos for businesses.</li>
            <li>Producing social media content that resonates with audiences.</li>
          </ul>
          <p>I take pride in my attention to detail and my ability to work closely with clients to understand their vision and bring it to reality. Whether it's a personal project or a professional assignment, I strive to deliver high-quality work that exceeds expectations.</p>
          <p>Let's work together to create something amazing!</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
