import React,{ useContext } from 'react';

import { MoviesContext } from '../Context';
export function Slider({title, movies}) {
    const {sliderdata}=useContext(MoviesContext)
    return <div>
        <div className="section">
            <h2 className="slider_title">{title}</h2>
            <div className="section-slider">
                <div className="section-slider-wrapper">
                {sliderdata.map((movieitem)=>{
                
                    // movieitem.movies.map((card)=>{
                    //     console.log(card)
                    // })
                })}
                </div>
            </div>
        </div>
    </div>;
}

export default Slider;
