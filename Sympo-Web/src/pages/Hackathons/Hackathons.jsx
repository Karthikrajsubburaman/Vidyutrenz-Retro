import React from 'react';
import './Hackathons.css';

const Hackathons = () => {
    return (
        <div className="hackathons-page">
            <div className="background-overlay">
                <h1 className="title">Hackathons</h1>
                <p className="subtitle">Join us for an exhilarating coding marathon! Compete with the best minds and bring your innovative ideas to life.</p>
                <a href="https://forms.gle/exampleHackathon" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
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

export default Hackathons;
