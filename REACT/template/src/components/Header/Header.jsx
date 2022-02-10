import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
const [click, setclick] = useState(false)
const changeicon =()=>{
    setclick(!click)
}

const closemobilemenu = ()=> setclick(false)
    return (
        <header className="header">
            <div className="header__container">
                <Link className='header__container__logo' to="/">Almond</Link>
                <div onClick={changeicon} className="menu__icon">
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={click ? "menu__list active" : "menu__list"}>
                    <li  className='menu__item'>
                        <Link to="/" className='menu__link' onClick={closemobilemenu}></Link>
                    </li>
                    <li  className='menu__item'>
                        <Link to="/services" className='menu__link' onClick={closemobilemenu}>Services</Link>
                    </li>
                    <li  className='menu__item'>
                        <Link to="/products" className='menu__link' onClick={closemobilemenu}>Products</Link>
                    </li>
                    <li  className='menu__item'>
                        <Link to="/signup" className='menu__link__mobile' onClick={closemobilemenu}>Sign Up</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header