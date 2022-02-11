import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
    const [icon, seticon] = useState(false)
    const [button, setbutton] = useState(false)
    const [header, setheader] = useState(true)
    useEffect(() => {
       
    setTimeout(() => {
        setheader(false)
        
    }, 500);
    
      
    }, [])
   
    const checkicon = () => {
        seticon(!icon)
    }
    const showbutton =()=>{
        if(window.innerWidth <=1100){
            setbutton(true)
        }else{
            setbutton(false)
        }
    }
    window.addEventListener("load",showbutton)

    return (
        <header className={header ? "headeranima":""} >
            <div className="logo">Photosen</div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>GALLERY</Link>
                    </li>
                    <li>
                        <Link to='/services'>SERVICES</Link>
                    </li>
                    <li>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                    <li>
                        <Link to='/contact'>CONTACT</Link>
                    </li>
                </ul>
            </div>
            <div className="icons">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
            <div onClick={checkicon} className={button ? "menu__icon" : "passive"}>
                <i className={icon ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </header>
    )
}

export default Header