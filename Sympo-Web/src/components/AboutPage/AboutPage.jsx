import React from 'react';
import NavBar from '../NavBar/NavBar';
import './AboutPage.css';
import img_13 from '../../assets/img-13.png'; // Ensure the file extension is correct

const AboutPage = () => {
    return (
        <div className="aboutpage" style={{ backgroundImage: `url(${img_13})` }} id='about'>
            <section className="aboutpage-content">
                <h1>About the Symposium</h1>
                <div className="about-cards">
                    <div className="card">
                        <h2>Empowering Minds</h2>
                        <p>Our symposium is a platform for students, faculty, and professionals to share insights, explore new ideas, and collaborate on innovative projects.</p>
                    </div>
                    <div className="card">
                        <h2>Engaging Content</h2>
                        <p>We offer a diverse range of presentations, workshops, and panel discussions covering cutting-edge topics across various disciplines.</p>
                    </div>
                    <div className="card">
                        <h2>Networking Opportunities</h2>
                        <p>Connect with like-minded individuals, build valuable relationships, and expand your professional network.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
