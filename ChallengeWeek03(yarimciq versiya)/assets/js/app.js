
let home = document.querySelector(".home");
let gameover = document.querySelector(".gameover");
let main = document.querySelector(".main");
let option = document.querySelectorAll("#option");
let question = document.querySelector(".question");
let progress__bar = document.querySelector(".progress__bar");
let selectedAnswer;
let i =0;
class Question{
    constructor(text,options,answer){
            this.text = text;
            this.options = options;
            this.answer = answer;
    }



   };

 //  suallar
 let questions = [
    new Question (
         "Web pages are designed using?",
          [  "HTML",
             "CSS",
             "Javascript",
             "Jquery",],
             
         "HTML"
         
     ), 
     new Question (
         "____ makes websites dynamic",
          [  "CSS",
             "HTML",
             "Javascript",
             "Bootstrap",],
             
         "Javascript"
         
     ),
     new Question (
         "What is HTML used for?",
          [  "Skeleton of website",
             "Design a website",
             "Make website dynamic",
             "Database of a website",],
             
         "Skeleton of website"
         
     ),
     new Question (
         "Which CSS property changes background color?",
          [  "color",
             "bgcolor",
             "colour",
             "background-color",],
             
         "background-color"
         
     ),
     new Question (
         "Which selector selects all the elements in CSS?",
          [  "+",
             "$",
             "*",
             "-",],
             
         "*"
         
     ),
     new Question (
         "What is the value of a in a+=b where a=10 & b=5?",
          [  "10",
             "5",
             "15",
             "20",],
             
         "15"
         
     ),
     new Question (
         "What does 'document' denote in a javascript statement?",
          [  "Javascript file",
             "Css file",
             "HTML page",
             "XML document",],
             
         "HTML page"
         
     ),
     new Question (
         "Which function is used to calculate an expression?",
          [  "calculate()",
             "calc()",
             "evaluate()",
             "eval()",],
             
         "eval()"
         
     ),
     new Question (
         "How do you call a function? ",
          [  "call.function_name",
             "function_name.call",
             "call(function_name)",
             "function_name()"],
             
         "function_name()"
         
     ),
     new Question (
         "Javascript statements should end with a ... ",
          [   
             "Comma",
             "Semicolon",
             "Period",
             "Exclamation",],
             
         "Semicolon"
         
     ),
     
 ];


 class Functions{

    
   // timerin teyin olunmasi
 progress(){
    let totaltime = 41
    
   var x =  setInterval(() => {
        totaltime-=1
        let progress__bar__width= totaltime*2.5
        
        if(totaltime==-1){
            clearInterval(x);
            
            this.opengameoverpage()
        }
        progress__bar.style.width = `${progress__bar__width}%`
           
    }, 1000);
    
    }   
          
    // home page  acilsin
  openhomepage(){
    home.style.display="flex";
    main.style.display="none";
    gameover.style.display="none"
};

// mainpage acilsin
 openmainpage(){
   home.style.display="none";
   main.style.display="flex";
   gameover.style.display="none";
   this.progress();
   this.setclick();
   this.rightAnswer();
  
   
};

// gameoverpage acilsin
 opengameoverpage(){
   home.style.display="none";
   main.style.display="none";
   gameover.style.display="flex"
};


// i-nin artmasi
//  function plus(){
//     i++
//  }     
    

// cavabin secilmesi
setclick(){
    i++
    
 for(let talora=0;talora<option.length;talora++){
     option[talora].addEventListener("click", (e)=>{
         selectedAnswer=e.target.textContent;
         i++;
        
         
        
     })

 }

 console.log(i)
}
// duzgun cavabin tapilmasi
     rightAnswer(param){
        if(selectedAnswer == questions[i].answer){
            return true
        }
        else{
            return false
        }
           
    
        
    }

// duzguncavab verilende timerin artmasi
     pluscountdown(){}

// duzguncavab verilende bonus timerin aktiv olmasi
     setbonuscountdown(){}

// duzgun ve ya sehv cavab verilende rengin deyismesi
     changeColor(){pass}

// her hansi cavab verilende sualin deyismesi
     changeNextQuestion(){pass}

// scorun teyin olunmasi
     Score(){}

// Xallarin teyin olunmasi
     Life(){}


 }




  

let met = new Functions
 met.openmainpage()



  





   








 
// function changeQuestion(){
//     for(let i=0;i<option.length;i++){
        
//         option[i].addEventListener("click",(e)=>{
//             console.log(x)
//             console.log(questions[x].answer)
//             x++
//            var setduringtime= setTimeout(function(){
          
           
            
           
            
           
            
             
           
            
//         });

       

    
// function settime(){
//     setTimeout(function(){
    
//         x++
//     if(x==10){
//         x=0;
//     }

   
       
// },2000)
// }

 // setTimeout(function(){
            //     option[i].style.backgroundColor="#3498db";
            //     option[i].addEventListener("mouseover", function( event ) {
                    
            //         event.target.style.backgroundColor = "#3190d0";})
            // },2000);
            // },0);



