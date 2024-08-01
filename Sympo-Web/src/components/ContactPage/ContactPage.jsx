import React from 'react';
import './ContactPage.css';
import emailIcon from '../../assets/email-icon.png'; // replace with your icon path
import phoneIcon from '../../assets/phone-icon.png'; // replace with your icon path
import websiteIcon from '../../assets/website-icon.png'; // replace with your icon path
import socialMediaIcon from '../../assets/social-media-icon.png'; // replace with your icon path

const ContactPage = () => {
    return (
        <div className="contact-page" id='contact'>
            <div className="contact-container">
                <h2>Contact Us</h2>
                <div className='contact-containers'>
                <div className="contact-item">
                    <img src={emailIcon} alt="Email" />
                    <span>vidyutrenz@citchennai.com</span>
                </div>
                <div className="contact-item">
                    <img src={phoneIcon} alt="Phone" />
                    <span>+919876543210</span>
                </div>
                <div className="contact-item">
                    <img src={websiteIcon} alt="Website" />
                    <span>www.vidyutrenz.com</span>
                </div>
                <div className="contact-item">
                    <img src={socialMediaIcon} alt="Social Media" />
                    <span>@vidyutrenz</span>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
