
let home = document.querySelector(".home");
let gameover = document.querySelector(".gameover");
let main = document.querySelector(".main");
let choices = document.querySelectorAll("#choice");
let question = document.querySelector(".question");
let progress__bar = document.querySelector(".progress__bar");
let butn1 = document.querySelector(".butn1")
let butn2 = document.querySelector(".butn2")
let butn3 = document.querySelector(".butn3")
let butn4 = document.querySelector(".butn4")
let scoretext = document.querySelector(".scoretext")

class Question{
    constructor(text,options,answer){
            this.text = text;
            this.options = options;
            this.answer = answer;
    }



   };


//   suallar
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











   // timerin teyin olunmasi
 function progress(){
    let totaltime = 41
    localStorage.setItem("plus",totaltime)
    
   var x =  setInterval(() => {
        totaltime-=1
        let progress__bar__width= totaltime*2.5
        
        
        if(totaltime==-1){
            clearInterval(x);

            opengameoverpage()
        }
        progress__bar.style.width = `${progress__bar__width}%`

    }, 1000);

    }

    // home page  acilsin
 function openhomepage(){
    home.style.display="flex";
    main.style.display="none";
    gameover.style.display="none"
};

function pluscountdown(){
    var totaltime = localStorage.getItem("plus")
    totaltime=totaltime+5
}


// gameoverpage acilsin
function opengameoverpage(){
   home.style.display="none";
   main.style.display="none";
   gameover.style.display="flex"
   
};
var questionIndex
startGame =()=>{
    home.style.display="none";
    main.style.display="flex";
    gameover.style.display="none";
    progress();
    questionIndex=0
    
    
    
    geto()
    getqe()
    
    
   


    


};




   

function getqe(){
   
        question.innerHTML = questions[questionIndex].text 
        butn1.innerHTML= questions[questionIndex].options[0] 
        butn2.innerHTML= questions[questionIndex].options[1]
        butn3.innerHTML= questions[questionIndex].options[2]
        butn4.innerHTML= questions[questionIndex].options[3] 
       
        
        
        
}



var scored = 0
   function geto(){
    
        var True
        choices.forEach(choice => {
        choice.addEventListener("click", (e)=>{
        var buton= e.target
        var selectedAnswer= e.target.textContent
        if(selectedAnswer==questions[questionIndex].answer){
                True = 1
                upscore()
                localStorage.setItem("truevalue", True);
                buton.classList.add("green")
                pluscountdown()
                
        }else{
            True = 0
            buton.classList.add("red")
        }
        
            questionIndex++
        
        setTimeout(function(){
            getqe()
        },600)
        function clearclass(){
            setTimeout(function(){
                buton.classList.remove("green")
                buton.classList.remove("red")
            },600)
        }
        clearclass()
        
        
        
    
       
    })
});}



function upscore(){
    var truevalue =localStorage.getItem("truevalue")
    if(truevalue==1){
        scored+=5
        localStorage.setItem("score", scored);
    }
    scoretext.innerHTML=scored
    }



startGame()

  
   
   

    
// scorun teyin olunmasi
function Score(){
    var score=localStorage.getItem("score")
    console.log(score)

}

















