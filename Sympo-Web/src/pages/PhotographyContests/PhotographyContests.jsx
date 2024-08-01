import React from 'react';
import './PhotographyContests.css';

const PhotographyContests = () => {
    return (
        <div className="photography-contests-page">
            <div className="background-overlay">
                <h1 className="title">Photography Contests</h1>
                <p className="subtitle">Showcase your photography skills and capture the essence of creativity. Join our contests and let your photos tell a story.</p>
                <a href="https://forms.gle/examplePhotographyContests" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Exhibition</h2>
                        <p>Display your work and gain exposure.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Judging</h2>
                        <p>Compete for awards judged by experts.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Networking</h2>
                        <p>Connect with fellow photographers and enthusiasts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotographyContests;
