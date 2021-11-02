
const mouseWheel = document.querySelector('.container');

mouseWheel.addEventListener('wheel', function(e) {
    const race = 50; // How many pixels to scroll

    if (e.deltaY > 0) // Scroll right
        mouseWheel.scrollLeft += race;
    else // Scroll left
        mouseWheel.scrollLeft -= race;
		e.preventDefault();
        document.querySelector(mouseWheel).scrollIntoView({
            behavior: 'smooth'
        });
});
let main = document.querySelector(".main")

let item=document.querySelectorAll('.item')
let img = document.querySelectorAll("img")
let itemCount=document.querySelectorAll('.item').length
let wbody=window.innerWidth;



function scrollFest(){
    
    let w=window.innerWidth/2;
    mouseWheel.style.width=`${wbody*3}px`;
    for(i=0;i<itemCount;i++){
        var rectright = (item[i].getBoundingClientRect().left-w)/w;
        var rectleft = (item[i].getBoundingClientRect().left/w);
        
        if(rectright > -(0.2) && rectright<0.7){
            item[i].style.transform = `scale(${.8 - rectright})`;
            
         }
         else if(rectleft< 0.8  && rectleft>0.15){
            item[i].style.transform = `scale(${rectleft })`
            
            
         }
        
         else{
             item[i].style.transform = 'scale(0.1)'
         }
        
    }

    
    
};


var cursor = document.querySelector('.cursor');



document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});



