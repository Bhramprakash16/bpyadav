// src/App.js
import React from 'react';
import './App.css'; // Import the App.css for general styles
import Navbar from './Navbar'; // Import the Navbar component
import Homesection from './Homesection';
import Aboutsection from './Aboutsection'; 
import Worksection from './Worksection';
import ServiceSection from './ServiceSection';
import Carousel from './Carousel';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Use the Navbar component */}
      <div>
        <Homesection /> 
        <Aboutsection />
        <Worksection />
        <ServiceSection />
        <Carousel />
        <Contact />  
      </div>
  </div>
  );
}

export default App;
