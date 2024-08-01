import React from 'react';
import './BlockchainHunts.css';

const BlockchainHunts = () => {
    return (
        <div className="blockchain-hunts-page">
            <div className="background-overlay">
                <h1 className="title">Blockchain Hunts</h1>
                <p className="subtitle">Dive into the world of blockchain technology and participate in exciting hunts to solve real-world problems using blockchain solutions.</p>
                <a href="https://forms.gle/exampleBlockchainHunts" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Blockchain Challenges</h2>
                        <p>Test your skills in blockchain with challenging problems and scenarios.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Innovative Solutions</h2>
                        <p>Develop and showcase innovative solutions using blockchain technology.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Networking</h2>
                        <p>Connect with blockchain enthusiasts and professionals in the field.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockchainHunts;
