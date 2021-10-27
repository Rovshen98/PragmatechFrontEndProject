let bars = document.querySelector(".fa-bars");
let times = document.querySelector(".fa-times");
let menu = document.querySelector(".menu")

bars.addEventListener("click",()=>{
    menu.style.display="flex";
    times.style.display="block";
})

times.addEventListener("click",()=>{
    menu.style.display="none";
    
})