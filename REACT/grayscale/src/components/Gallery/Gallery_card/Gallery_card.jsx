import React from 'react';
import "./Gallery_card.css";
function Gallery_card({item}) {
  return (
    <div className='gallery__card'>
                <img src={`/img/Gallery/${item.img}`} alt="" />
    </div>
  )
}

export default Gallery_card