import React from 'react';
import './ProjectExhibitions.css';

const ProjectExhibitions = () => {
    return (
        <div className="project-exhibitions-page">
            <div className="background-overlay">
                <h1 className="title">Project Exhibitions</h1>
                <p className="subtitle">Showcase your innovative projects and ideas. Gain exposure and receive valuable feedback from industry experts and peers.</p>
                <a href="https://forms.gle/exampleProjectExhibitions" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Innovative Projects</h2>
                        <p>Present your creative and groundbreaking projects.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Industry Feedback</h2>
                        <p>Receive insights and advice from industry professionals.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Networking</h2>
                        <p>Connect with like-minded innovators and professionals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectExhibitions;
