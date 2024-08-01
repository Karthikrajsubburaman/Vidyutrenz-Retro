import React from 'react';
import { Link } from 'react-router-dom';
import './EventPage.css';
import img_8 from '../../assets/img-8.png';
import Technical_img from '../../assets/Technical_img.png';
import Non_Technical_img from '../../assets/Non_Technical_img.png';
import Hybrid_img from '../../assets/Hybrid_img.png';

const EventPage = () => {
    return (
        <div className="eventpage" style={{ backgroundImage: `url(${img_8})` }} id='events'>
            <section className="eventpage-content">
                <h1>Events</h1>
                <div className="event-sections">
                    <Link to="/technical" className="event-section">
                        <img src={Technical_img} alt="Technical Events" className="event-img" />
                        <span>Technical Events</span>
                    </Link>
                    <Link to="/non-technical" className="event-section">
                        <img src={Non_Technical_img} alt="Non-Technical Events" className="event-img" />
                        <span>Non-Technical Events</span>
                    </Link>
                    <Link to="/hybrid" className="event-section">
                        <img src={Hybrid_img} alt="Hybrid Events" className="event-img" />
                        <span>Hybrid Events</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default EventPage;
