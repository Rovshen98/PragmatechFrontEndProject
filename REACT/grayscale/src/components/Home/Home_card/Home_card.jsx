import React from 'react';
import "./Home_card.css";
import { Link } from 'react-router-dom';

function Home_card({item}) {


    return (
        <div className='Home__card'>
            <img src={`img/Home/${item.img}`} alt="" />
           <h2>{item.name}</h2>
           <Link to='/gallery'>MORE PHOTOS</Link>
          
        </div>
    )
}

export default Home_card