import React from 'react';
import './MovieScreenings.css';

const MovieScreenings = () => {
    return (
        <div className="movie-screenings-page">
            <div className="background-overlay">
                <h1 className="title">Movie Screenings</h1>
                <p className="subtitle">Enjoy a curated selection of films and discuss them with fellow enthusiasts. Experience the magic of cinema in a unique setting.</p>
                <a href="https://forms.gle/exampleMovieScreenings" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
                <div className="features">
                    <div className="feature-card">
                        <h2>Film Selection</h2>
                        <p>Watch a diverse range of movies, from classics to recent releases.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Discussion</h2>
                        <p>Participate in engaging discussions and share your thoughts on the films.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Networking</h2>
                        <p>Connect with other film lovers and make new friends.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieScreenings;
