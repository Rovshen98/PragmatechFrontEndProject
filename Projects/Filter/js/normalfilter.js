let main = document.querySelector(".main")
let boxAll = document.querySelectorAll(".main__box")
let inputs = document.querySelectorAll("input")

inputs.forEach(input => {
    
    input.addEventListener("keyup",(e)=>{
        
        if(input.value>150){input.value=150;}
        else if(input.value<0){input.value=0;};
        if ((e.keyCode > 46 && e.keyCode < 58)|| (e.keyCode < 106 && e.keyCode > 95) || e.keyCode==8) { 
                
           }else{
               input.value=""
           }

          for(let x = 0;x<boxAll.length;x++){
          
            if(parseInt(boxAll[x].dataset.filter)>=parseInt( inputs[0].value) && parseInt(boxAll[x].dataset.filter)<= parseInt( inputs[1].value)){
                boxAll[x].style.display="flex"
                
                
            }else if(input.value==""){
                boxAll[x].style.display="flex"
            }
            else{
                boxAll[x].style.display="none"
            }
          }
       })


       
});


// hover

let boxwidth =boxAll[0].offsetWidth
let boxheight= boxAll[0].offsetHeight
let p = document.querySelectorAll("p")
let div = document.createElement("div")
div.style.width=boxwidth + "px"
div.style.height=boxheight +"px"
div.style.position="absolute"
div.style.backgroundColor="rgba(0, 0, 0, 0.3)"
div.style.zIndex="1"
div.style.transition="0.2s"
div.style.opacity="0"
div.style.left=boxAll[0].offsetLeft + "px"
div.style.top=boxAll[0].offsetTop + "px"
    main.appendChild(div)

    boxAll.forEach(box => {
        
        
       
        box.addEventListener("mouseover",()=>{
        let width = box.offsetWidth
        let height = box.offsetHeight
        let x= box.offsetLeft
        let y= box.offsetTop
        div.style.left=x + "px"
        div.style.top = y + "px"
        div.style.width=width + "px"
        div.style.height=height + "px"
        div.style.zIndex="1"
        div.style.opacity="1"
        div.style.transition="0.3s"
            
            
  })
        box.addEventListener("mouseout",()=>{
            
            div.style.opacity="0"
            
    
        })
    });
    
    p.forEach(pitem => {
        
        pitem.addEventListener("mouseover",()=>{
            div.style.opacity="1"
            pitem.style.zIndex="999999"
            pitem.style.opacity="1"
            
            
            
        })
        pitem.addEventListener("mouseout",()=>{
        
            div.style.opacity="0"
            pitem.style.zIndex="999999"
            pitem.style.opacity="0"
            
        })
    });
    


