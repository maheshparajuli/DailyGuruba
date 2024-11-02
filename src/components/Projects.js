import React, { useState } from 'react';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "E-Commerce Website",
      overview: "A full-stack e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration. Implemented responsive design and REST API.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      duration: "3 months",
      role: "Full Stack Developer"
    },
    {
      id: 2,
      name: "Weather Dashboard",
      overview: "Real-time weather application that provides current weather data and forecasts. Integrated with OpenWeatherMap API, featuring dynamic updates and location-based services.",
      tech: ["JavaScript", "API Integration", "HTML5", "CSS3"],
      duration: "1 month",
      role: "Frontend Developer"
    },
    {
      id: 3,
      name: "Task Management System",
      overview: "A collaborative task management tool with features like task creation, assignment, progress tracking, and team collaboration. Includes real-time updates and notification system.",
      tech: ["React", "Firebase", "Material-UI", "Redux"],
      duration: "2 months",
      role: "Lead Developer"
    },
    {
      id: 4,
      name: "Portfolio Website",
      overview: "Personal portfolio website showcasing projects and skills. Features smooth animations, responsive design, and contact form integration.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      duration: "3 weeks",
      role: "Designer & Developer"
    }
  ];

  const toggleProject = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <button
              className={`project-name ${activeProject === project.id ? 'active' : ''}`}
              onClick={() => toggleProject(project.id)}
            >
              {project.name}
            </button>
            
            <div className={`project-details ${activeProject === project.id ? 'show' : ''}`}>
              <h3>Overview</h3>
              <p>{project.overview}</p>
              
              <div className="project-meta">
                <div>
                  <h4>Technologies</h4>
                  <div className="tech-stack">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-info">
                  <p><strong>Duration:</strong> {project.duration}</p>
                  <p><strong>Role:</strong> {project.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;