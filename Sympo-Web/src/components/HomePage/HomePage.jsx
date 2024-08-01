import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './HomePage.css';
import img_9 from '../../assets/img-9.png';

const HomePage = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date('2024-09-14T00:00:00'); 
        const currentTime = new Date();
        const difference = eventDate - currentTime;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="homepage" style={{ backgroundImage: `url(${img_9})` }} id='home'>
            <NavBar />
            <header className="homepage-header">
                <div className="homepage-overlay">
                    <h1>Welcome to Symposium 2024</h1>
                    <p>Join us for a dynamic and enriching symposium, designed to inspire and connect.</p>
                    <div className="countdown">
                        <h2>Countdown to Event</h2>
                        <div className="timer">
                            <span>{timeLeft.days || '0'}</span> days <span>{timeLeft.hours || '0'}</span> hours <span>{timeLeft.minutes || '0'}</span> minutes <span>{timeLeft.seconds || '0'}</span> seconds
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
