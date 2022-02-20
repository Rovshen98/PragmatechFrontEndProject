import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
export const header = {
    "Content-Type": "application/json;charset=utf-8",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
}
function Slidermini({ miniitem }) {


    const [minidata1, setminidata1] = useState(null)
    const fetchminidata1 = async () => {
        const response = await axios.get("https://api.themoviedb.org/3/list/7112724?page=1&api_key=285a107f0c92cfda467db221ccc502f7")
        setminidata1(response.data.items)
        // 7112724 New Releases
        // 7113004 Romantic
        // 8191391 Marvel
        // 8191807 new movies

    }

    useEffect(() => {
        fetchminidata1()

    }, [])

    console.log(setminidata1)

    const settings = {
        slidesToShow: 1,
    }


    return (


        <>

            <h2 className="slider_title">{miniitem.name}</h2>

            <Slider
                className="section"
                {...settings}

            >
                {minidata1 && minidata1.map((item) => {
                    return <a key={item.id} >
                        <div className="item"><img src={`https://www.themoviedb.org/t/p/w500${item.backdrop_path}`} alt="" />
                            <div>
                                <h2>{item.name}</h2>

                            </div>

                        </div></a>
                })}

            </Slider>





        </>

    )
}


export default Slidermini;
