let header_drop = document.querySelector(".dropdown")
let header_select = document.querySelector(".header__search__option")

header_select.addEventListener("click", ()=>{
    header_drop.classList.toggle("toogle")
})

let navbar = document.querySelector(".navbar__categories")
let navbar_active = document.querySelector(".navbar__ul")
navbar.addEventListener("click", ()=>{
    navbar_active.classList.toggle("toogle__active")
})

// first slider/////////////////////////////////////////

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        items:3,
        nav:true,
        
        
        
        
    });
  });
