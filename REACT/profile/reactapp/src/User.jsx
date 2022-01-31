import React from 'react';
import { useParams, useResolvedPath } from 'react-router-dom';
import {data} from './App';
import "./User.css"
export default function User() {
 const {id} = useParams()
 const user = data.find(u =>u.id===Number(id))
 return(<div className="main">
          <div><div>Name: </div>{user.name}</div>
          <div><div>Surname:</div> {user.username}</div>
          <div><div>Email: </div> {user.email}</div>
          <div><div>Phone:</div> {user.phone}</div>
          <div><div>Website:</div>{user.website}</div>

   </div>
 )
   
  
 
 

  
}


