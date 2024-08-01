import React from "react";
import { Link } from "react-router-dom";
import "./NonTechnical.css";
import img_2 from "../../assets/img-2.png";
import non_tech_img_1 from "../../assets/non_tech_img_1.png";
import non_tech_img_2 from "../../assets/non_tech_img_2.png";
import non_tech_img_3 from "../../assets/non_tech_img_3.png";
import non_tech_img_4 from "../../assets/non_tech_img_4.png";
import non_tech_img_5 from "../../assets/non_tech_img_5.png";
import non_tech_img_6 from "../../assets/non_tech_img_6.png";

const events = [
  { id: 1, title: "Debates", img: non_tech_img_1, link:'/debates' },
  { id: 2, title: "Movie Screenings", img: non_tech_img_2, link:'/movie_screenings' },
  { id: 3, title: "Coin Mania", img: non_tech_img_3, link:'/coin_media' },
  { id: 4, title: "Photography Contests", img: non_tech_img_4, link:'/photography_contests' },
  { id: 5, title: "Treasure Hunts", img: non_tech_img_5, link:'/treasure_hunts' },
  { id: 6, title: "Dance and Music", img: non_tech_img_6, link:'/dance_music' },
];

const Technical = () => {
  return (
    <div
      className="technical-page"
      style={{ backgroundImage: `url(${img_2})` }}
    >
      <h1>Non-Technical Events</h1>
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
