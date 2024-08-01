import React from 'react';
import './AlgorithmCompetitions.css';

const AlgorithmCompetitions = () => {
    return (
        <div className="algorithm-competitions-page">
            <div className="background-overlay">
                <h1 className="title">Algorithm Competitions</h1>
                <p className="subtitle">Challenge your problem-solving skills and compete in intense algorithm competitions. Sharpen your coding abilities and aim for the top.</p>
                <a href="https://forms.gle/exampleAlgorithmCompetitions" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Challenging Problems</h2>
                        <p>Tackle a variety of complex algorithmic challenges.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Competitive Environment</h2>
                        <p>Compete against the best minds in the field.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Recognition</h2>
                        <p>Gain recognition and boost your problem-solving profile.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlgorithmCompetitions;
