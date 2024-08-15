import React from 'react';
import './Worksection.css'; // Import the CSS file

const Worksection = () => {
  const projects = [
    {
      id: 1,
      title: 'CHHALAVA',
      description: 'This is the annual short film of PAIGAM - Dramatics & Film Society of MANAV RACHNA COLLEGE',
      image: process.env.PUBLIC_URL + '/1.png',
      link: 'https://drive.google.com/drive/folders/1RqmoNONRkfpbhVBDX5i09qugYmWfTHmx',
    },
    {
      id: 2,
      title: 'Animations',
      description: 'These are some animation made by me in blender',
      image: process.env.PUBLIC_URL + '/3d.jpg',
      link: 'https://drive.google.com/drive/folders/1wA-Jshxq_OuB7hSB4zN3ztZWL3g-HMjC?usp=drive_link',
    },
    {
      id: 3,
      title: 'Marcaids',
      description: 'Currently working for "MARCAIDS - Digital marketing agency" ',
      image: process.env.PUBLIC_URL + '/3.jpg',
      link: 'https://www.instagram.com/marcaidss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    },
  ];

  return (
    <section id="work" className="work">
      <div className="work-container">
        <h2>My Work</h2>
        <div className="work-items">
          {projects.map(project => (
            <div className="work-item" key={project.id}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
              <div className="work-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Worksection;
