import React from 'react';
import './InnovationShowcases.css';

const InnovationShowcases = () => {
    return (
        <div className="innovation-showcases-page">
            <div className="background-overlay">
                <h1 className="title">Innovation Showcases</h1>
                <p className="subtitle">Present your groundbreaking innovations and compete for recognition! Join us for a dynamic showcase of creativity and cutting-edge ideas.</p>
                <a href="https://forms.gle/exampleInnovationShowcases" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Showcase Your Idea</h2>
                        <p>Exhibit your innovative projects and solutions to a wide audience.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Win Recognition</h2>
                        <p>Earn recognition and accolades for your outstanding contributions.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Network with Innovators</h2>
                        <p>Connect with other innovators and industry leaders.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InnovationShowcases;
