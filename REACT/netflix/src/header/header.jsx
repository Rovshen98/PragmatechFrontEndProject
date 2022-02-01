import React from 'react';
import './header.css';
function Header() {
  return (
      <div className='header'>
          <a className="header__logo"><img src={"/img/index.png"} alt="" /></a>
        <a className="header__register">Register</a>

      </div>
  );
}

export default Header;
