let container= document.querySelectorAll(".container div")
let main = document.querySelectorAll(".item")

container.forEach(containeritem => {
    containeritem.addEventListener("click",(e)=>{
            main.forEach(mainitem => {
                function callBack(){
                    if(window.innerWidth>899){
                    mainitem.style.transform="scale(1)"
                    mainitem.style.width="22.6%"
                    mainitem.style.height="22rem"}
                    else if(window.innerWidth<899 &&window.innerWidth>700){
                        mainitem.style.transform="scale(1)"
                        mainitem.style.width="31%"
                        mainitem.style.height="22rem"
                    }
                    else if(window.innerWidth<=700){
                        mainitem.style.transform="scale(1)"
                        mainitem.style.width="48%"
                        mainitem.style.height="22rem"
                    }
                }
                

                if(e.target.dataset.menu == mainitem.dataset.menu ){
                    clearInterval(x)
                    $(mainitem).show()
                    callBack()
                   
                    
                }
                else if(e.target.dataset.menu=="all"){
                    clearInterval(x)
                    $(mainitem).show()
                    callBack()
                    
                   
                   
                   
                    
                   
                }else if(e.target.className!="container__wrapper"){
                    mainitem.style.transform="scale(0.6)"
                    mainitem.style.margin="0"
                    
                    mainitem.style.width="0"
                    mainitem.style.height="0"
                   var x=  setTimeout(() => {
                        mainitem.style.display="none"
                    }, 100);
                   
                }
            });

           
            
           
    })
});

