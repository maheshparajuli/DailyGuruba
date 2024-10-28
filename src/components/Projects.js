import React, { useState } from 'react';


function Projects() {
  
  const [selectedProject, setSelectedProject] = useState(null);

  
const projectDocs = {
    project1: (
      <div className="doc-content">
        <h2>Project 1: Weather Prediction</h2>
        <p>This project utilizes machine learning techniques to predict weather patterns based on historical data. The main objectives are:</p>
        <ul>
          <li>Collect data from meteorological sources</li>
          <li>Implement a Hidden Markov Model to predict temperature trends</li>
          <li>Visualize the prediction results using charts</li>
        </ul>
      </div>
    ),
    project2: (
      <div className="doc-content">
        <h2>Project 2: DNA Methylation Analysis</h2>
        <p>This project focuses on analyzing DNA methylation to assess hereditary disease risk. Key components include:</p>
        <ul>
          <li>Feature extraction of GC content and CpG islands</li>
          <li>Classification using Hidden Markov Models</li>
          <li>Personalized risk assessment visualization</li>
        </ul>
      </div>
    ),
    project3: (
      <div className="doc-content">
        <h2>Project 3: Graph Coloring for Scheduling</h2>
        <p>This project applies graph coloring algorithms to solve scheduling conflicts. The steps involved are:</p>
        <ul>
          <li>Model scheduling as a graph problem</li>
          <li>Implement a coloring algorithm to avoid conflicts</li>
          <li>Test the solution on real-world scheduling scenarios</li>
        </ul>
      </div>
    ),
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-list">
        {/* List of projects */}
        <ul>
          <li onClick={() => setSelectedProject('project1')}>Weather Prediction</li>
          <li onClick={() => setSelectedProject('project2')}>DNA Methylation Analysis</li>
          <li onClick={() => setSelectedProject('project3')}>Graph Coloring for Scheduling</li>
        </ul>
      </div>

      {/* Popup for Documentation */}
      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setSelectedProject(null)}>&times;</span>
            {projectDocs[selectedProject]}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
