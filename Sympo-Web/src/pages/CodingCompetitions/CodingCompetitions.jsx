import React from 'react';
import './CodingCompetitions.css';

const CodingCompetitions = () => {
    return (
        <div className="coding-competitions-page">
            <div className="background-overlay">
                <h1 className="title">Coding Competitions</h1>
                <p className="subtitle">Showcase your coding skills and compete with the brightest minds. Win exciting prizes and recognition.</p>
                <a href="https://forms.gle/exampleCodingCompetition" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Workshops</h2>
                        <p>Learn from industry experts through hands-on workshops.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Prizes</h2>
                        <p>Win exciting prizes and showcase your skills.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Networking</h2>
                        <p>Connect with peers and professionals in the field.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodingCompetitions;
