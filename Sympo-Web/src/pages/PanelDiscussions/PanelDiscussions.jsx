import React from 'react';
import './PanelDiscussions.css';

const PanelDiscussions = () => {
    return (
        <div className="panel-discussions-page">
            <div className="background-overlay">
                <h1 className="title">Panel Discussions</h1>
                <p className="subtitle">Engage in thought-provoking discussions with industry leaders and experts. Share your insights and gain new perspectives.</p>
                <a href="https://forms.gle/examplePanelDiscussions" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Expert Panels</h2>
                        <p>Participate in discussions led by renowned experts in various fields.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Interactive Q&A</h2>
                        <p>Ask questions and engage in lively discussions with panelists.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Networking Opportunities</h2>
                        <p>Network with industry professionals and fellow attendees.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PanelDiscussions;
