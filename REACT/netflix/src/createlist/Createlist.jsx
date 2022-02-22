import React, { useEffect,useState, useRef, useContext } from 'react';
import { MyContext } from "../App";
import "./Createlist.css"
import axios from 'axios';


function Createlist() {
    
    const ctx = useContext(MyContext)
    const closemodal = (e) => {
        if (e.target.className == "createlistmodal") { ctx.setopenmodallist(false) }
    }

    const listId = useRef()
    const listName = useRef()
    const createlist = () => {

      axios.post("https://api.themoviedb.org/4/list", 

           {
                "name": listName.current.value,
                "iso_639_1": "en"
            }
        ,  {headers:{
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U"
                }
            }
            ).then((response)=>{
                ctx.setlistdata([...ctx.listdata,{id:response.data.id}])
            })
           
        ctx.setopenmodallist(false)

    }
    useEffect(() => {
      axios.get('https://api.themoviedb.org/4/account/5f198024a6d931003787052f/lists', {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"

            }
        })
    }, [])

   
   
   
    


    return (
        <div onClick={closemodal} className={ctx.openmodallist ? `createlistmodal` : "displaynone"}>
            <div className="createlistmodal__wrapper">
                <input ref={listId} placeholder='List Id-si' className='category__id' type="text" />
                <input ref={listName} placeholder='List adı' className='category__name' type="text" />
                <button onClick={createlist} className='listsubmit' >Əlavə et</button>
            </div>
        </div>
    )
}

export default Createlist