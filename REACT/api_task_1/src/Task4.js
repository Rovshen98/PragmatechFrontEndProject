import React, { useState, useEffect, useRef } from 'react';

import "./task4.css"
function App() {
  const inputval= useRef(null)
  const [datapaper, setdatapaper] = useState("")
  const [buttons, setbuttons] = useState([
    {
      id: 1,

    },
    {
      id: 2,

    },
    {
      id: 3,

    },
    {
      id: 4,

    },
    {
      id: 5,

    },
    {
      id: 6,

    },
    {
      id: 7,

    },
    {
      id: 8,

    },
    {
      id: 9,

    },
  ])
  const [selecteditem, setselecteditem] = useState(1)
  const [datafilter, setdatafilter] = useState("")

  useEffect(() => {

    fetch("https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=1")
      .then((response) => response.json())
      .then((data) => {
        setdatapaper(data.items)
      })

  }, [])

  useEffect(() => {
    fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${selecteditem}`)
      .then((response) => response.json())
      .then((data) => {
        setdatapaper(data.items)
      })


  }, [selecteditem])


  const changepaper = (e) => {
    setselecteditem(e.target.id)

  }


  const filterdata = (e) => {
      
      
    fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${datafilter}&format=json&page=${selecteditem}`)
      .then((response) => response.json())
      .then((data) => {
        setdatapaper(data.items)
        
      })
  }
  
  const catchdata=(e)=>{
        setdatafilter(e.target.value)
  }





  return (

    <div className='task4'>
      <div className="search"> <input onChange={catchdata} type="search" /><button onClick={filterdata} className='btn'>Axtar</button></div>
      <div className="boxes">

        {datapaper ? datapaper.map((item) => {
          return <div key={item.id} className="box">
            <h1>Title: {item.title}</h1>
            <h2>Year: {item.start_year}</h2>
            <div>Publisher: {item.publisher ? item.publisher : "Not Found"}</div>
            <div>Country: {item.country}</div>
            <div>City: {item.city[0] ? item.city[0] : "Not Found"}</div>
          </div>
        }) : <div className='loading'> </div>}

      </div>
      <div className="buttons">
        {buttons.map((item) => {
          return <button onClick={changepaper} id={item.id} key={item.id} className="pagination">{item.id}</button>
        })}



      </div>

    </div>
  )
}

export default App