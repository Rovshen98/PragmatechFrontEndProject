var mains = document.querySelectorAll('.main');
var buton= document.querySelectorAll(".btn")
function anima(){
[].forEach.call(mains, function(main) {
  // do whatever
  main.style.display="block";
  main.style.opacity="0"

});

};
document.body.addEventListener('click',(e)=> {
    if (e.target.className!=="btn"){
    [].forEach.call(mains, function(main) {
        // do whatever
        main.style.display="none";
        main.style.opacity="0"
      
      });
    }      
})