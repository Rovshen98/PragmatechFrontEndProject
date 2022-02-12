import React, {useState} from 'react';
import Gallery_card from './Gallery_card/Gallery_card';
import "./Gallery.css";
function Gallery() {

  const [gallerycard, setgallerycard] = useState([
      {
        id:10,
        img:"gallery1.jpg"
      },
      {
        id:11,
        img:"gallery2.jpg"
      },
      {
        id:12,
        img:"gallery3.jpg"
      },
      {
        id:13,
        img:"gallery4.jpg"
      },
      {
        id:14,
        img:"gallery5.jpg"
      },
      {
        id:15,
        img:"gallery6.jpg"
      },
      {
        id:16,
        img:"gallery7.jpg"
      },
      {
        id:17,
        img:"gallery8.jpg"
      },
      {
        id:18,
        img:"gallery9.jpg"
      },
      {
        id:19,
        img:"gallery10.jpg"
      },
      {
        id:20,
        img:"gallery1.jpg"
      },
      {
        id:21,
        img:"gallery2.jpg"
      },
      {
        id:22,
        img:"gallery3.jpg"
      },
      {
        id:23,
        img:"gallery4.jpg"
      },
      {
        id:24,
        img:"gallery5.jpg"
      },
      {
        id:25,
        img:"gallery6.jpg"
      },
      {
        id:26,
        img:"gallery7.jpg"
      },
      {
        id:27,
        img:"gallery8.jpg"
      },
      {
        id:28,
        img:"gallery9.jpg"
      },
      {
        id:29,
        img:"gallery10.jpg"
      },
  ])
  return (
    <div className='Gallery'>
      <h1>Portrait Gallery</h1>
      <div className="Gallery__wrapper">
      {gallerycard.map((item)=>(
          <Gallery_card key={item.id} item={item}/>
      ))}
      </div>
    </div>
  )
}

export default Gallery