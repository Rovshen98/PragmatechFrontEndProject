import React,{useContext} from 'react';
import Home_card from './Home_card/Home_card';
import "./Home.css";
import { homecontext } from '../../App';
function Home() {
  const ctx = useContext(homecontext)

  return (
    <div className='Home'>
      {ctx.homestate.map((item)=>(
        <Home_card item={item} key={item.id}/>
      ))}
        
        
    </div>
  )
}

export default Home