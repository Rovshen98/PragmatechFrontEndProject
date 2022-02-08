import React from 'react';
import Todoitem from "../Todoitem/Todoitem";
import "./Todo.css";
const Todo = ({ todo,settodo}) => {
    return <div className="todowrapper">
            
                {todo.map((todoitem)=>(
                    <Todoitem todo={todo} todoitem={todoitem} settodo={settodo} nametext={todoitem.nametext} surnametext={todoitem.surnametext} key={todoitem.id} />
                )
                
                )}

            
        </div>
    
}

export default Todo;
