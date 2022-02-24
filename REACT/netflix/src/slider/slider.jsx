import React, { useState, useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { MyContext } from "../App";
import axios from 'axios';
import "./slider.css";
import Movieitem from '../movieitem/Movieitem';
export const header = {
    "Content-Type": "application/json;charset=utf-8",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
}

function Slidermini() {
    const [category, setcategory] = useState([])
    const ctx = useContext(MyContext)
    const minislider__settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true

    }

    useEffect(() => {

        (
            async () => {
                const arr = []
                for (let element of ctx.listdata) {
                    const response = await axios.get(`https://api.themoviedb.org/4/list/${element.id}`,
                        {
                            headers: {
                                "Content-Type": "application/json;charset=utf-8",
                                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"

                            }
                        }
                    )
                    arr.push(response.data)
                }
                setcategory(arr)
            }
        )()


    }, [ctx.listdata])


    return (
        <>
            {

                category && category.map((item) => {
                   
                    return <div key={item.id} className="slidermini__section">
                        <h2>{item.name}</h2>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={4}
                           
                            
                        >
                            {item.results.map((movieitem) => {
                                return <SwiperSlide key={movieitem.id}> <Movieitem movieitem={movieitem}  /></SwiperSlide>

                            })}



                        </Swiper>

                    </div>
                }



                )



            }

        </>

    )
}




export default Slidermini;
