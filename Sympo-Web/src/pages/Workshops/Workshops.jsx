import React from 'react';
import './Workshops.css';

const Workshops = () => {
    return (
        <div className="workshops-page">
            <div className="background-overlay">
                <h1 className="title">Workshops</h1>
                <p className="subtitle">Learn from industry experts through hands-on workshops. Enhance your skills and knowledge.</p>
                <a href="https://forms.gle/exampleWorkshop" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Interactive Sessions</h2>
                        <p>Engage in interactive sessions with professionals.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Expert Guidance</h2>
                        <p>Get guidance from industry experts.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Hands-on Experience</h2>
                        <p>Gain hands-on experience with real-world projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workshops;
