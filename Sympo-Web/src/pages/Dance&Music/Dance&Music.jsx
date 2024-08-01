import React from 'react';
import './Dance&Music.css';

const DanceAndMusic = () => {
    return (
        <div className="dance-music-page">
            <div className="background-overlay">
                <h1 className="title">Dance & Music</h1>
                <p className="subtitle">Experience the rhythm of dance and the harmony of music! Join us for a celebration of talent and creativity.</p>
                <a href="https://forms.gle/exampleDanceAndMusic" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Live Performances</h2>
                        <p>Enjoy live performances from talented artists and bands.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Dance Shows</h2>
                        <p>Be captivated by energetic dance shows and routines.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Music Sessions</h2>
                        <p>Participate in interactive music sessions and workshops.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DanceAndMusic;
