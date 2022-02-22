import React, { useState, useContext, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MyContext } from "../App";
import axios from 'axios';

export const header = {
    "Content-Type": "application/json;charset=utf-8",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
}

function Slidermini() {

    const ctx = useContext(MyContext)
    const minislider__settings = {
        dots: true,
    }

    useEffect(() => {
      
            ctx.listdata.forEach(element => {
                axios.get(`https://api.themoviedb.org/4/list/${element.id}`,
                    {
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
    
                        }
                    }
                ).then((response) => {
                    ctx.setcategory([...ctx.category,
                    response.data
                    ])
    
                })
            });  
       
       



    }, [])

useEffect(() => {
  
}, [])



    return (
        <>
            {ctx.category && ctx.category.map((item) => {

                <div className="slidermini__section">
                    <h2>{item.name}</h2>
                    <Slider
                        className="section"
                        {...minislider__settings}
                    >

                    </Slider>

                </div>

            })



            }

        </>

    )
}




export default Slidermini;
