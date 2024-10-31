import React, { useState } from 'react';


const Projects = () => {
    const [selectedSemester, setSelectedSemester] = useState(null);
    const projects = {
        2: ['Project A2', 'Project B2'],
        3: ['Project A3', 'Project B3'],
        4: ['Project A4', 'Project B4'],
        5: ['Project A5', 'Project B5'],
        6: ['Project A6', 'Project B6'],
        7: ['Project A7', 'Project B7'],
        8: ['Project A8', 'Project B8'],
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
            <div className="semester-row">
                {[2, 3, 4, 5, 6, 7, 8].map((num) => (
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
