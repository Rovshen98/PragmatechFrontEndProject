let button = document.querySelector(".btn")
let hide = document.querySelector(".fa-times-circle")
let note = document.querySelector(".note")
button.addEventListener("click", ()=>{
    note.style.display="flex";
})
hide.addEventListener("click", ()=>{
    note.style.display="none";
})

// -------------------------------------------------

let main = document.querySelector(".main");




var input = document.querySelector("textarea");
// color-----------------------
var i = 0;    
var color = ["#c2ff3d","#3dc2ff","#04e022","#bc83e6","#ebb328","red","aqua"];
    
    
// z-index---------
var x = 1






input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
    //    ------------------
        var a = ["-2deg", "-1deg","-8deg","-5deg","-6deg","2deg"];
        var randomValue = a[Math.floor(a.length * Math.random())];
    // +++++++++++++++++++++++++++++++++++
    // ///////////////////////
        i++
        if (i===7){
            i=0;
        }
        
        
        x++
   
    

    // ++++++++++++++++++++++
        var div = document.createElement('div');
        div.classList.add("item");
        var text = document.createElement("h1");
        text.innerText= input.value;
        div.style.backgroundColor = color[i];
        div.style.width =  "300px";
        div.style.height =  "300px";
        div.style.transition =  "2s";
        div.style.cursor =  "pointer";
        div.style.overflowWrap= "break-word";
        div.style.boxShadow= "0px 10px 24px 0px rgba(0,0,0,0.75)";
        div.style.transform = "rotate(" + randomValue + ")";
        div.style.margin= "5px";
        div.style.padding= "10px 15px";
        div.style.zIndex = x;
        text.style.fontSize="1.5rem";
        text.style.height= "100%";
        text.style.zIndex= -1;
        main.appendChild(div);
        div.appendChild(text);

        
   
  }

});

var y = document.querySelector(".item")
function hiden(event){

        
    if(event.target.tagName == "H1" ){
     event.target.parentElement.style.display="none";
           
    }
    else if(event.target.className == "item" ){
        
        event.target.style.display="none";
              
       };
    
}
        

main.addEventListener('dblclick', hiden, false);




 



