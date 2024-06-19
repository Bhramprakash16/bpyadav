import React from 'react';
import './Worksection.css'; // Import the CSS file

const Worksection = () => {
  const projects = [
    {
      id: 1,
      title: 'CHHALAVA',
      description: 'This is the annual short film of PAIGAM - Dramatics & Film Society of MANAV RACHNA COLLEGE',
      image: process.env.PUBLIC_URL + '/1.png',
      link: 'https://drive.google.com/drive/folders/10hsZKEWcq8nzHGLMGL1yriZxm2rU8m9-',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2. Explain the project, your role, and the tools or techniques you used.',
      image: process.env.PUBLIC_URL + '/2.jpg',
      link: 'project2.html',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3. Explain the project, your role, and the tools or techniques you used.',
      image: process.env.PUBLIC_URL + '/3.jpg',
      link: 'project3.html',
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
