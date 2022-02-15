import { useEffect, useState, createContext, useRef } from "react";
import './App.css';



function App() {
 
   const senddata = ()=>{

     fetch("https://api.themoviedb.org/4//list/7112632/items",{
       method:"POST",
       headers:{
        "Content-Type":"application/json;charset=utf-8",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U"
       },
       body:JSON.stringify({
        
          "items": [
            {
              "media_type": "tv",
              "media_id": 85552,
            },
            {
              "media_type": "movie",
              "media_id": 634649
            },
           
          ]
        
       })
     })

     .then((response)=> response.json())
     .then((data)=>{
       console.log(data)
     })
   }

  return (
    <div className="App">
     <input type="text"/><button onClick={senddata}>Gonder</button>
    </div>
  );
}

export default App;
