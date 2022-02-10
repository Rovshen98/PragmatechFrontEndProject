import React, {useContext}from 'react'
import { newcontext } from './App'

function Main() {

  const ctx =  useContext(newcontext)
  return (
    <div>{ctx.name.map((item)=> item.name)}</div>
  )
}

export default Main