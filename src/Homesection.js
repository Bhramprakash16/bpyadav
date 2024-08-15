// src/Homesection.js
import React from 'react';
import './Homesection.css';

const Homesection = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I'm Bhramprakash</h1>
        <h3>Video Editor</h3>
        <p>
          I am a professional Video Editor specializing in creating and editing video content for various platforms. I have extensive experience in video production, including scripting, shooting, and post-production editing.
        </p>
        <div className="btn-box">
        <a href="mailto:bhramprakshyadav16@gmail,com.com" className="btn">Hire Me</a>
        <a href="https://www.linkedin.com/in/bhramprakash-yadav/" target="_blank" rel="noopener noreferrer" className="btn">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default Homesection;
