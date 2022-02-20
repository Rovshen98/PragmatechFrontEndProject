import React, { useRef, useEffect, useState } from 'react';

import Slidermini from "../slider/slider";
import '../home/Home.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

function Home() {
    const [data, setData] = useState(null)
    const [minislider, setminislider] = useState([
        {
            id: 1,
            name: "Romantic",
        },
        {
            id: 2,
            name: "Marvel"
        },
        {
            id: 3,
            name: "New Releases"
        },
        {
            id: 4,
            name: "New Movies"
        }
    ])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    };
    const fetchdata = async () => {
        const response = await axios.get("https://api.themoviedb.org/3/list/7112632?page=1&api_key=285a107f0c92cfda467db221ccc502f7")
        const slicedata = response.data.items.slice(0, 3)
        setData(slicedata)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    // main slider



    return <div className='homepage'>

        <Slider className='Slider-slick' {...settings}>
            {
                data && data.map((item) => {

                    return (
                        <div key={item.id} className="item">
                            <div className="item-left">
                                <h2>{item.title}</h2>

                                <p className='overview'>{item.overview}</p>
                                <div className="icons">
                                    <div className="thumb"><i className="far fa-thumbs-up"></i></div>
                                    <div className="thumb"><i className="far fa-thumbs-down"></i></div>
                                </div>
                                <p className="overview">{item.release_date}</p>


                            </div>
                            <img src={`https://www.themoviedb.org/t/p/w500${item.backdrop_path}`} alt="" />
                        </div>
                    )
                })
            }

        </Slider>


        <div className="moviessection">
            {
                 minislider.map((miniitem) => {
                    return <Slidermini miniitem={miniitem} key={miniitem.id} />
                })
            }
        </div>
    </div>;
}


export default Home;