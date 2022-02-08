import React from 'react';
import "./Form.css";
function Form({setnametext, nametext,todo, surnametext, settodo, setsurnametext}) {

    const namehandler = (e) => {
       setnametext(e.target.value)
       
    }
    const surnamehandler = (e)=>{
        setsurnametext(e.target.value)
    }
    const submithandler = (e)=>{
        e.preventDefault()
        settodo([
            ...todo,{
                nametext:nametext,
                surnametext:surnametext,
                id:Math.random()*1000
            }
        ])
        setnametext("")
        setsurnametext("")
    }

    return <form className='inputfield'>
        <div className="username"> <input value={nametext} onChange={namehandler} required placeholder='name' type="text" /> </div>
        <div className="usersurname"><input value={surnametext} onChange={surnamehandler} required placeholder='surname' type="text" /></div>
        <button onClick={submithandler} type='submit' className="btnsubmit">Əlavə et</button>
    </form>;
}

export default Form;
