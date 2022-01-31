import React, { useRef, useEffect, useState } from 'react';
import '../home/Home.css';


function Home() {

    // main slider
    const [data, setData] = useState([
        {
            id: 1,
            imgSrc: "stepbro",
            itemid:"lastclone",
            h2:"Step Brothers",
            h3:"92% Match 2008 R",
            overview:"Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.",
            starring:"Starring: Will Ferrell, John C. Reilly, Mary Steenburgen",
            genre:"Genre: Comedy, Late Night Comedies, Slapstick Comedy"
        },
        {
            id: 2,
            imgSrc: "intertellar.5fc9d0d2",
            h2:"Interstellar",
            h3:"99% Match 2009-2011 2 Seasons",
            overview:"With Humanity Teetering on the bring of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
            starring:"Starring: Mathew McConaughey, Anne Hathaway, Jessica Chastain",
            genre:"Genre: Sci-fi, Fantasy, Mystery",
           
        },
        {
            id: 3,
            imgSrc: "stargate.6af5cff1",
            h2:"Stargate Universe",
            h3:"99% Match 2009-2011 2 Seasons",
            overview:"Trapped on an Ancient spaceship billions of light-years from home, a group of soldiers and civilians struggle to survive and find their way back to Earth.",
            starring:"Starring: Robert Carlyle, Louis Ferreira, Brian J. Smith",
            genre:"Genre:Sci-fi,Fantasy,Drama",
          
        },
        {
            id: 4,
            imgSrc: "stepbro",
            h2:"Step Brothers",
            h3:"92% Match 2008 R",
            overview:"Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.",
            starring:"Starring: Will Ferrell, John C. Reilly, Mary Steenburgen",
            genre:"Genre: Comedy, Late Night Comedies, Slapstick Comedy"
        
            
        },
        {
            id: 5,
            imgSrc: "intertellar.5fc9d0d2",
            itemid:"firstclone",
            h2:"Interstellar",
            h3:"99% Match 2009-2011 2 Seasons",
            overview:"With Humanity Teetering on the bring of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
            starring:"Starring: Mathew McConaughey, Anne Hathaway, Jessica Chastain",
            genre:"Genre: Sci-fi, Fantasy, Mystery",
        }
    ])
    
    const sliderWrap = useRef()
    const slider = useRef()
    const sliderItem = useRef()
    // counter
    let counter = 1
    let size = "120"

    const prevpage = () => {
        if(counter <=0) return;
        slider.current.style.transition = "transform 0.4s ease-in-out"
        counter--
        slider.current.style.transform = `translateX(${-size * counter}rem)`
        
    }
    const nextpage = () => {
        if(counter >= data.length-1) return;
        slider.current.style.transition = "transform 0.4s ease-in-out"
        counter++
        slider.current.style.transform = `translateX(${-size * counter}rem)`
        
    }


    const whenload = ()=>{
            slider.current.style.transform = `translateX(${-size * counter}rem)`
        }
    const transitionend = () => {
       
                if(data[counter].itemid==="firstclone"){
                    slider.current.style.transition="unset"
                    counter= counter -3;
                    slider.current.style.transform = `translateX(${-size * counter}rem)`
                   
                }else if(data[counter].itemid==="lastclone"){
                    slider.current.style.transition="unset"
                    
                    counter = counter+3
                   
                    slider.current.style.transform = `translateX(${-size * counter}rem)`
                }
           
        
    }

    // main slider end

 
    


    return <div className='homepage'>
        <div  ref={sliderWrap} onLoad={whenload} className="slider-wrap">
            <div onTransitionEnd={transitionend} ref={slider} className="slider">
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} id={item.itemid} ref={sliderItem} className="slider-item">
                                <div className="slider-item-left">
                                    <h2>{item.h2}</h2>
                                    <h3>{item.h3}</h3>
                                    <p className='overview'>{item.overview}</p>
                                    <div className="icons">
                                    <div className="thumb"><i className="far fa-thumbs-up"></i></div>
                                    <div className="thumb"><i className="far fa-thumbs-down"></i></div>
                                    </div>
                                    <p className="overview">{item.starring}</p>
                                    <p className="overview">{item.genre}</p>

                                </div>
                                <img src={`/img/${item.imgSrc}.jpg`} alt="" /> 
                                </div>
                        )
                    })
                }
                {

                }
            </div>
            <button className='prevbtn' onClick={prevpage}><i class="fas fa-caret-left"></i></button>
            <button className='nextbtn' onClick={nextpage}><i class="fas fa-caret-right"></i></button>
        </div>

    </div>;
}


export default Home;
