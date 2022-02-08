import React from 'react';
import "./App.css";
import { useState } from 'react';
// components
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

function App() {
const [nametext, setnametext] = useState("");
const [surnametext, setsurnametext] = useState("");
const [todo, settodo] = useState([]);

  return (
    <div className="App">
      <div className="main">
        <div className="container">
          
          <Form todo={todo} settodo={settodo} nametext={nametext} setsurnametext={setsurnametext} surnametext={surnametext}  setnametext={setnametext} />
          <Todo todo={todo} settodo={settodo}/>

        </div>
      </div>
    </div>
  );
}

export default App;
