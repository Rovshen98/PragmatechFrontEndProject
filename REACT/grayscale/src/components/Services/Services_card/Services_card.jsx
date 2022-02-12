import React from 'react';
import "./Services_card.css";

function Services_card({item}) {
  
  return (
    <div className="services__card">
           {item.icon}
           <h2>{item.h2}</h2>
           <p>{item.text}</p>
           <span>{item.dollar}</span>
    </div>
  )
}

export default Services_card