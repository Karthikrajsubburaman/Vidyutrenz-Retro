import React from 'react';
import { Link } from 'react-router-dom';
import './Technical.css';
import img_2 from '../../assets/img-2.png'; 
import tech_img_1 from '../../assets/tech_img_1.png'
import tech_img_2 from '../../assets/tech_img_2.png'
import tech_img_3 from '../../assets/tech_img_3.png'
import tech_img_4 from '../../assets/tech_img_4.png'
import tech_img_5 from '../../assets/tech_img_5.png'
import tech_img_6 from '../../assets/tech_img_6.png'

const events = [
    { id: 1, title: 'Hackathons', img: tech_img_1, link: '/hackathons' },
    { id: 2, title: 'Coding Competitions', img: tech_img_2, link: '/coding_competitions'},
    { id: 3, title: 'Workshops', img: tech_img_3, link: '/workshops' },
    { id: 4, title: 'Paper Presentations', img: tech_img_4, link:'/paper_presentations' },
    { id: 5, title: 'Project Exhibitions', img: tech_img_5, link:'/project_exhibitions' },
    { id: 6, title: 'Algorithm Competitions', img: tech_img_6, link:'/algorithm_competitions' },
];

const Technical = () => {
    return (
        <div className="technical-page" style={{ backgroundImage: `url(${img_2})` }}>
            <h1>Technical Events</h1>
            <div className="events-container">
                {events.map(event => (
                    <Link key={event.id} to={event.link || "#"} className="event-box">
                        <img src={event.img} alt={event.title} className="event-img" />
                        <span className="event-title">{event.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Technical;
