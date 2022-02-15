import React from 'react';
import "./Todoitem.css";
const Todoitem=({nametext, todoitem ,surnametext, todo, settodo})=> {

  const deleteitem =()=>{
      settodo(todo.filter((elem)=> todoitem.id !==elem.id))
}
  return <div className='todo'>
     <div className='text'>{nametext}</div>
     <div className='text'>{surnametext}</div>
     <i onClick={deleteitem} className="fas fa-trash-alt"></i>
      
  </div>;
}

export default Todoitem;
