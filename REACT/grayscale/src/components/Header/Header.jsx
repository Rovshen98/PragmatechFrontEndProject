import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';
import {MdClose} from 'react-icons/md';
import "./Header.css"
function Header() {
    const [button, setbutton] = useState(false)
    const [header, setheader] = useState(false)
    const [menu, setmenu] = useState(false)
    const location = useLocation();

    const openmenubar =()=>{
        setmenu(true)
    }
    const closemenubar =()=>{
        setmenu(false)
    }

    
    const showbutton = () => {
        if (window.innerWidth <= 1199) {
            setbutton(true)
        } else {
            setbutton(false)
        }
    }
    window.addEventListener("load", showbutton)
    window.addEventListener("resize",showbutton)
    const makeanima = () => {
        setheader(true)
        setTimeout(() => {
            setheader(false)
        }, 700);
    }
    
    useEffect(() => {
        makeanima()
        window.scrollTo(0, 0)
        closemenubar()

    }, [location.pathname])

    return (
        <header className={header ? "headeranima" : ""} >
            <div className="logo">Photosen</div>
            <div className={menu ? 'menu menu__active' : "menu menu__passive"}>
            <MdClose onClick={closemenubar} className='close__icon' size='18px' color='black'/>
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
            <div className={button ? "passive" : "icons"}>
                <div className="icon"><FaFacebookF size='16px' /></div>
                <div className="icon"><FaTwitter size='16px' /></div>
                <div className="icon"><FaInstagram size='16px' /></div>
                <div className="icon"><FaYoutube size='16px' /></div>
            </div>
            <div onClick={openmenubar} className={button ? "icon__active" : "passive"}>
                     < GiHamburgerMenu size='16px' color='white'/>
            </div>
        </header>
    )
}

export default Header