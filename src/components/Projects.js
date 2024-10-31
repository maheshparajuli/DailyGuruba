import React, { useState } from 'react';


const Projects = () => {
    const [selectedSemester, setSelectedSemester] = useState(null);
    const projects = {
        2: ['Project A2', 'Project B2', 'Project C2'],
        3: ['Project A3', 'Project B3', 'Project C3'],
        4: ['Project A4', 'Project B4', 'Project C4'],
        5: ['Project A5', 'Project B5', 'Project C5'],
        6: ['Project A6', 'Project B6', 'Project C6'],
        7: ['Project A7', 'Project B7', 'Project C7'],
        8: ['Project A8', 'Project B8', 'Project C8'],
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
            <div className="semester-container">
                {/* First Row: Sem 2, Sem 3, Sem 4 */}
                <div className="semester-row">
                    {[2, 3, 4].map((num) => (
                        <div
                            key={num}
                            className="sem-box"
                            onClick={() => handleClick(num)}
                        >
                            Sem {num}
                        </div>
                    ))}
                </div>
                {/* Second Row: Sem 5, Sem 6, Sem 7 */}
                <div className="semester-row">
                    {[5, 6, 7].map((num) => (
                        <div
                            key={num}
                            className="sem-box"
                            onClick={() => handleClick(num)}
                        >
                            Sem {num}
                        </div>
                    ))}
                </div>
                {/* Third Row: Sem 8 */}
                <div className="semester-row">
                    <div
                        className="sem-box"
                        onClick={() => handleClick(8)}
                    >
                        Sem 8
                    </div>
                </div>
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
