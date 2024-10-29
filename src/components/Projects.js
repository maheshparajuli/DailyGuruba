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
            
            {/* Row 1 */}
            <div className="semester-row">
                {[1, 2, 3].map((num) => (
                    <div
                        key={num}
                        className={`semester-container color-${num}`}
                        onClick={() => handleClick(num)}
                    >
                        Sem {num}
                    </div>
                ))}
            </div>
            
            {/* Row 2 */}
            <div className="semester-row">
                {[4, 5, 6].map((num) => (
                    <div
                        key={num}
                        className={`semester-container color-${num}`}
                        onClick={() => handleClick(num)}
                    >
                        Sem {num}
                    </div>
                ))}
            </div>
            
            {/* Row 3 */}
            <div className="semester-row">
                {[7, 8].map((num) => (
                    <div
                        key={num}
                        className={`semester-container color-${num}`}
                        onClick={() => handleClick(num)}
                    >
                        Sem {num}
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
