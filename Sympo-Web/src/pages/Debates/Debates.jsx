import React from 'react';
import './Debates.css';

const Debates = () => {
    return (
        <div className="debates-page">
            <div className="background-overlay">
                <h1 className="title">Debates</h1>
                <p className="subtitle">Engage in thought-provoking debates and articulate your viewpoints on various topics. Showcase your oratory skills and stand out in the crowd.</p>
                <a href="https://forms.gle/exampleDebates" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Topics</h2>
                        <p>Discuss a wide range of contemporary issues.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Judging</h2>
                        <p>Be evaluated by experienced judges and receive constructive feedback.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Recognition</h2>
                        <p>Earn accolades and build your reputation as a skilled debater.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Debates;
