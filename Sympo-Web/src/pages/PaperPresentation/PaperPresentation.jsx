import React from 'react';
import './PaperPresentation.css';

const PaperPresentation = () => {
    return (
        <div className="paper-presentation-page">
            <div className="background-overlay">
                <h1 className="title">Paper Presentation</h1>
                <p className="subtitle">Showcase your research and ideas through an engaging paper presentation event. Gain valuable feedback and insights.</p>
                <a href="https://forms.gle/examplePaperPresentation" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Expert Panels</h2>
                        <p>Present your work to a panel of experts.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Valuable Feedback</h2>
                        <p>Receive constructive feedback on your research.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Networking Opportunities</h2>
                        <p>Connect with researchers and professionals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaperPresentation;
