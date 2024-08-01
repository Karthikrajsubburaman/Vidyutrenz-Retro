import React from 'react';
import NavBar from '../NavBar/NavBar';
import './VenuePage.css';
import img_10 from '../../assets/img-10.png';

const VenuePage = () => {
    return (
        <div className="venue-page" style={{ backgroundImage: `url(${img_10})` }} id='venue'>
            <div className="venue-page-content">
                <h1>Venues</h1>
                <div className="venue-info">
                    <div className="info-section">
                        <div className="info-header">
                            <span className="info-number">1</span>
                            <h2>Venue</h2>
                        </div>
                        <p>The symposium will be held at [Venue name], [Venue address].</p>
                    </div>
                    <div className="info-section">
                        <div className="info-header">
                            <span className="info-number">2</span>
                            <h2>Food Stalls</h2>
                        </div>
                        <p>Enjoy a variety of food stalls at the venue offering delicious meals and snacks throughout the day.</p>
                    </div>
                    <div className="info-section">
                        <div className="info-header">
                            <span className="info-number">3</span>
                            <h2>Transportation</h2>
                        </div>
                        <p>[Transportation information for getting to the venue and accommodation options].</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenuePage;
