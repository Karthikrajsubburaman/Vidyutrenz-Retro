import React from 'react';
import './TreasureHunts.css';

const TreasureHunts = () => {
    return (
        <div className="treasure-hunts-page">
            <div className="background-overlay">
                <h1 className="title">Treasure Hunts</h1>
                <p className="subtitle">Embark on a thrilling treasure hunt! Solve clues, discover hidden secrets, and compete for exciting rewards.</p>
                <a href="https://forms.gle/exampleTreasureHunts" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Clues</h2>
                        <p>Decode challenging clues and advance through the hunt.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Rewards</h2>
                        <p>Win attractive prizes by being the first to find the treasure.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Adventure</h2>
                        <p>Enjoy an adventurous experience with friends and fellow participants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TreasureHunts;
