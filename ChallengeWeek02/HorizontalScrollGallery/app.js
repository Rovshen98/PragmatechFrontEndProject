let main = document.querySelector("main")
const item =document.querySelector('.item');

 let stagemiddle = window.innerWidth / 2
 main.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    main.scrollLeft += evt.deltaY;
    
});

main.addEventListener("scroll", function(e){
    console.log(refs[0].getBoundingClientRect().left)
    
    

}); 

scaleAmout=.5
for(let i=0;i<refs.length;i++){
    if(refs[i].getBoundingClientRect().left<stagemiddle){
        refs[i].style.transform=`scale(${scaleAmout})`
        scaleAmout+=.1
    }else{
        refs[i].style.transform=`scale(${})`
        scaleAmout-=.1
    }
}

