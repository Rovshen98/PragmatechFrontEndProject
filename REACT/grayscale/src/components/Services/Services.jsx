import React, { useState } from 'react';
import Services_card from './Services_card/Services_card';
import "./Services.css";
import { FaCamera,FaDog,FaVideo} from 'react-icons/fa';
import {MdFamilyRestroom,MdOutlinePortrait} from 'react-icons/md';
import {GiCongress} from 'react-icons/gi';

function Services() {
  const [services, setservices] = useState([
    {
      id:Math.random()*1000,
      icon:<FaCamera className='services__icon' color='#20c997'/>,
      h2:"Camera",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.",
      dollar:"$29"
    },
    {
      id:Math.random()*1000,
      icon:<MdFamilyRestroom className='services__icon' color='#20c997'/>,
      h2:"Wedding Photography",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.",
      dollar:"$46"
    },
    {
      id:Math.random()*1000,
      icon:<FaDog className='services__icon' color='#20c997'/>,
      h2:"Animal",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.",
      dollar:"$24"
    },
    {
      id:Math.random()*1000,
      icon:<MdOutlinePortrait className='services__icon' color='#20c997'/>,
      h2:"Portrait",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.",
      dollar:"$40"
    },
    {
      id:Math.random()*1000,
      icon:<GiCongress className='services__icon' color='#20c997'/>,
      h2:"Travel",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.",
      dollar:"$35"
    },
    {
      id:Math.random()*1000,
      icon:<FaVideo className='services__icon' color='#20c997'/>,
      h2:"Video Editing",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.",
      dollar:"$15"
    }
    
  ])
  return (
    <div className='Services'>
      <h1>My Services</h1>
      <div className="Services__wrapper">
        
        {services.map((item)=>(
            <Services_card item={item} key={item.id}/>
        ))}
      </div>

    </div>
  )
}

export default Services