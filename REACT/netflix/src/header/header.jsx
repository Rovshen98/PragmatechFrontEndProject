import React,{useContext} from 'react';
import './header.css';
import {AiFillPlusSquare} from "react-icons/ai"
import {MyContext} from "../App";

function Header() {
  const ctx = useContext(MyContext)
  const openmodallist =()=>{
    ctx.setopenmodallist(true)
  }
  return (
      <div className='header'>
          <a className="header__logo"><img src={"/img/index.png"} alt="" /></a>
          <input placeholder="Filmi axtar" type="search" />
          <div onClick={openmodallist} className='createlist'>List əlavə et <AiFillPlusSquare size="16px"  color="#b81d24"/></div>
      </div>
  );
}

export default Header;
