import React, { useState, useContext } from 'react';

import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { MoviesContext } from '../Context';

export function Slider({ title, movies }) {
     


    const [transform, settransform] = useState(null);
    const [count, setcount] = useState(1);

    const sliderprev = (e) => {
        
        if (count >= 1) {
            setcount(count - 1)
            settransform(-27 * count)
            
        } else if(count==movies.length) {
            setcount(count - 1)
            settransform(-27 * count)
        }
        else{
            
            setcount(0)
            settransform(-27 * count)
        }
        



    }
    const slidernext = () => {
         
        if(count<movies.length){
            setcount(count + 1)
             settransform(-27 * count)
             
        }else if(count>=movies.length){
            setcount(movies.length)
            settransform(-27 * count)
        }
     

    }
    return (
        <div className="section">
            <h2 className="slider_title">{title}</h2>
            <div style={{transform: `translateX(${transform}rem)`, transition: 'transform 0.5s linear'}} className="section-slider">
                {movies.map((movieitem) => {

                    return <Link to={`/movieitem/${movies.id}`}><div className="item"><img src={`/img/${movieitem.mainimg}.jpg`} alt="" />
                        <div>
                            <h2>{movieitem.moviename}</h2>
                            <div> <span>{movieitem.match}</span><div>{movieitem.TV}</div>{movieitem.text}  </div>
                        </div>

                    </div></Link>

                })}



            </div>
            <div onClick={sliderprev} className="sliderprevbtn"><i className="fas fa-angle-left"></i></div>
            <div onClick={slidernext} className="slidernextbtn"><i className="fas fa-angle-right"></i></div>
        </div>
    )
}

 
export default Slider;
