import React from 'react';
import './CoinMedia.css';

const CoinMedia = () => {
    return (
        <div className="coin-media-page">
            <div className="background-overlay">
                <h1 className="title">Coin Media</h1>
                <p className="subtitle">Explore the latest trends and updates in the world of cryptocurrency. Join us for an immersive experience in digital finance.</p>
                <a href="https://forms.gle/exampleCoinMedia" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Trends</h2>
                        <p>Stay updated with the latest trends in cryptocurrency.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Insights</h2>
                        <p>Gain valuable insights from industry experts.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Networking</h2>
                        <p>Connect with fellow enthusiasts and professionals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoinMedia;
