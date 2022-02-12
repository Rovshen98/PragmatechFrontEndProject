import React from 'react';
import "./About_card.css";
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
function About_card({item}) {
    return (
        <div className='About__card__item'>
            <img src={`/img/About/${item.img}.jpg`} alt="" />
            <p>{`${item.text}`}</p>
            <div className="about__icons">
                <div className="icon"><FaTwitter size='16px' /></div>
                <div className="icon"><FaInstagram size='16px' /></div>
                <div className="icon"><FaFacebookF size='16px' /></div>

            </div>
        </div>
    )
}

export default About_card