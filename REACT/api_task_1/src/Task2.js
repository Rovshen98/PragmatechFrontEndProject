import axios from 'axios';
import React, { useState } from 'react';
import "./task2.css";

function App() {
   
      const [img, setimg] = useState("https://cataas.com/cat")
       const url = "https://api.thecatapi.com/v1/images/search"
      
        const changeimage = ()=>{
            fetch(url)
            .then(response => response.json())
            .then(data => {
                setimg(data[0].url) 
            });

            

        }

      
      
      

    return (
        <div className='task2'>
            <div className="image">
                <img src={img} alt="" />
           </div>
            <button onClick={changeimage} >Şəkli dəyiş</button>

        </div>
    )
}

export default App