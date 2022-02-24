import React from 'react';
import "./Movieitem.css";
function Movieitem({movieitem}) {

    return <div className='movieitem'>
        <img src={`https://www.themoviedb.org/t/p/w500${movieitem.backdrop_path}`} alt="" />
        <h3>{movieitem.title}</h3>
    </div>
}

export default Movieitem;
