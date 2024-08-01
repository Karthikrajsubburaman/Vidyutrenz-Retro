import React from 'react';
import './StartupCompetitions.css';

const StartupCompetitions = () => {
    return (
        <div className="startup-competitions-page">
            <div className="background-overlay">
                <h1 className="title">Startup Competitions</h1>
                <p className="subtitle">Showcase your innovative startup ideas and compete for top honors! Join us for a thrilling competition and get noticed.</p>
                <a href="https://forms.gle/exampleStartupCompetitions" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Pitch Your Idea</h2>
                        <p>Present your startup idea to a panel of judges and industry leaders.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Win Prizes</h2>
                        <p>Compete for exciting prizes and funding opportunities.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Networking</h2>
                        <p>Connect with potential investors and collaborators.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartupCompetitions;
