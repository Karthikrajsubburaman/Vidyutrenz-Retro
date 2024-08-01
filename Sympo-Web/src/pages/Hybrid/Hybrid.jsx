import React from "react";
import "./Hybrid.css";
import img_2 from "../../assets/img-2.png";
import hybrid_img_1 from "../../assets/hybrid_img_1.png";
import hybrid_img_2 from "../../assets/hybrid_img_2.png";
import hybrid_img_3 from "../../assets/hybrid_img_3.png";
import hybrid_img_4 from "../../assets/hybrid_img_4.png";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Startup Pitch Competitions",
    img: hybrid_img_1,
    link: "/startup_competitions",
  },
  { id: 2, title: "Innovation Showcases", img: hybrid_img_2, link:'/innovation_showcases' },
  { id: 3, title: "Panel Discussions", img: hybrid_img_3, link:'/panel_discussions' },
  { id: 4, title: "Blockchain Treasure Hunts", img: hybrid_img_4, link:'/blockchain_hunts' },
];

const Technical = () => {
  return (
    <div
      className="technical-page"
      style={{ backgroundImage: `url(${img_2})` }}
    >
      <h1>Hybrid Events</h1>
      <div className="events-container">
        {events.map((event) => (
          <Link key={event.id} to={event.link || "#"} className="event-box">
            <img src={event.img} alt={event.title} className="event-img" />
            <span className="event-title">{event.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Technical;
