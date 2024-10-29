import React, { useState } from 'react';

const Projects = () => {
    const [selectedSemester, setSelectedSemester] = useState(null);
    const projects = {
        1: ['Project A1', 'Project B1'],
        2: ['Project A2', 'Project B2'],
        // Add more projects for each semester as needed
    };

    const handleClick = (semester) => {
        setSelectedSemester(semester);
    };

    const handleClosePopup = () => {
        setSelectedSemester(null);
    };

    return (
        <div className="projects-container">
            <h2>Projects by Semester</h2>
            <div className="semester-grid">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className={`semester-container color-${i + 1}`}
                        onClick={() => handleClick(i + 1)}
                    >
                        Sem {i + 1}
                    </div>
                ))}
            </div>

            {selectedSemester && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Projects in Sem {selectedSemester}</h3>
                        <ul>
                            {projects[selectedSemester]?.map((project, index) => (
                                <li key={index}>{project}</li>
                            )) || <li>No projects available</li>}
                        </ul>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
