import React, { useState, useRef, useEffect } from 'react'
import "./task3.css";
function App() {
    const [info, setinfo] = useState("")
    const [vaccine, setvaccine] = useState("")

    const [percentage, setpercentage] = useState("")




    const inputvalue = useRef(null)

    const show = () => {
        const inputval = inputvalue.current.value

        fetch("https://covid-api.mmediagroup.fr/v1/cases")
            .then(response => response.json())
            .then(data => {
                setinfo(data[inputval].All)

            });
        fetch(" https://covid-api.mmediagroup.fr/v1/vaccines")
            .then(response => response.json())
            .then(data => {
                setvaccine(data[inputval].All)

            });

           



    }
    useEffect(() => {
        if (info && vaccine) {
            setpercentage(Math.round(vaccine.people_vaccinated / info.population  * 100) + "%")
        }

    }, [info, vaccine])


    return (
        <div className='task3'>
            <div className="info">
                <div className="info__item">Ölüm sayı: {info.deaths}</div>
                <div className="info__item">Vaksinasiya faizi: {percentage}</div>
                <div className="info__item">Vaksinasiya sayı: {vaccine.people_vaccinated}</div>
            </div>
            <input ref={inputvalue} type="text" />
            <button onClick={show} >Göstər</button>
        </div>
    )
}

export default App