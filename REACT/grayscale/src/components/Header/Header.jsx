import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";

import { FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';

import "./Header.css"
function Header() {
    const [icon, seticon] = useState(false)
    const [button, setbutton] = useState(false)
    const [header, setheader] = useState(false)
    const location = useLocation();

    const checkicon = () => {
        seticon(!icon)
    }
    const showbutton = () => {
        if (window.innerWidth <= 1100) {
            setbutton(true)
        } else {
            setbutton(false)
        }
    }
    window.addEventListener("load", showbutton)
    const makeanima = () => {
        setheader(true)
        setTimeout(() => {
            setheader(false)
        }, 700);
    }
    
    useEffect(() => {
        makeanima()
        window.scrollTo(0, 0)

    }, [location.pathname])

    return (
        <header className={header ? "headeranima" : ""} >
            <div className="logo">Photosen</div>
            <div className="menu">
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "#20c997" : '',

                        })} to='/'>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "#20c997" : '',

                        })} to='/gallery'>GALLERY</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "#20c997" : '',

                        })} to='/services'>SERVICES</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "#20c997" : '',

                        })} to='/about'>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "#20c997" : '',

                        })} to='/contact'>CONTACT</NavLink>
                    </li>
                </ul>
            </div>
            <div className="icons">
                <div className="icon"><FaFacebookF size='16px' /></div>
                <div className="icon"><FaTwitter size='16px' /></div>
                <div className="icon"><FaInstagram size='16px' /></div>
                <div className="icon"><FaYoutube size='16px' /></div>
            </div>
            <div onClick={checkicon} className={button ? "menu__icon" : "passive"}>
                <i className={icon ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </header>
    )
}

export default Header