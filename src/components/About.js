import React from 'react';


const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hello! I'm a passionate undergraduate student in
                        Computational Mathematics at Kathmandu University. I have a
                        keen interest in various areas of mathematics, including
                        linear programming, differential equations, and graph
                        theory. I aspire to explore the applications of
                        mathematics in real-world problems, particularly in
                        bioinformatics and machine learning.
                    </p>
                    <p>
                        In my free time, I enjoy working on projects that involve
                        data analysis and machine learning. I believe in continuous
                        learning and seek opportunities to collaborate with others
                        to expand my knowledge and skills.
                    </p>
                </div>
            </div>
            <div className="skills-section">
                <h3>Skills & Interests</h3>
                <ul>
                    <li>Graph Theory</li>
                    <li>Machine Learning</li>
                    <li>Bioinformatics</li>
                    <li>Numerical Methods</li>
                    <li>Operational Research</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
