import React,{useState} from 'react';
import './About.css';
import About_card from './About_card/About_card';
function About() {
  const [about, setabout] = useState([
    {
      id:Math.random()*1000,
      img:"about",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?",

    },
    {
      id:Math.random()*1000,
      img:"about1",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?",
      
    },
    {
      id:Math.random()*1000,
      img:"about2",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?",
      
    }
  ])
  return (
    <div className='About'>
      <h1>My Services</h1>
      <div className="About__wrapper">
        <div className="container">
          <div className="container__left"><img src={ '/img/Home/home2.jpg'} alt="" /></div>
          <div className="container__right">
            <h2>My Mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus, ad soluta consectetur illo qui voluptatem. Quis soluta maiores eum. Iste modi voluptatum in repudiandae fugiat suscipit dolorum harum, porro voluptate quis? Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor architecto excepturi aliquid minus nostrum dicta labore iusto obcaecati fugit cupiditate</p>
          </div>
        </div>

        <div className="About__card">
              {about.map((item)=>(
                <About_card item={item} key={item.id}/>
              ))}
        </div>
      </div>
    </div>
  )
}

export default About