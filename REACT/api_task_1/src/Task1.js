import React, { useState, useEffect, useRef } from 'react';
import './App.css';



function App() {
  const [inputvalue, setinputvalue] = useState()
 const [color, setcolor] = useState("")
  const inputdata = useRef(null)
  const redinput = useRef(null)
  const greeninput = useRef(null)
  const yellowinput = useRef(null)

  const submitdata = (e) => {
    e.preventDefault()
    setinputvalue(inputdata.current.value)
    if(redinput.current.checked){
      setcolor("FF0000")
    }else if(greeninput.current.checked){
      setcolor("008000")
    }else if (yellowinput.current.checked){
      setcolor("FFFF00")
    }
  }

  
  

  return (
    <div className="App">
      <div className="qrcode">
        <img src={`http://api.qrserver.com/v1/create-qr-code/?data="${inputvalue}"&size=150x150&bgcolor=${color}`} alt="" />
      </div>

      <form action="#">
        <input ref={inputdata} id='inputdata' placeholder="Məlumatı daxil edin" type="text" />
        <div className="radio__wrapper">
          <div>

            <input ref={redinput} id='red' type="radio" name="color" value="red" />

          </div>

          <div>
            <input ref={greeninput} id="green" type="radio" name="color" value="green" />

          </div>

          <div>
            <input ref={yellowinput} id='yellow' type="radio" name="color" value="yellow" />

          </div>
        </div>
        <button onClick={submitdata} type='submit'>Göndər</button>

      </form>


    </div>
  );
}

export default App;
