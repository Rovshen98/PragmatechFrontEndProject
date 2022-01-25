$(function () {
$('.box').hoverDirection();
});

// ///
let select =$("select")

let box= $(".box")
let markoption = $("#Mark > option")
let modeloption =$("#Model > option")
let yearoption =$("#Year > option")
let markselect = $(":selected", $("select")[0]);

$("header").click(function(e){
   if(e.target.tagName=="header"){
       console.log("sdf")
    $(e.target).find("#Mark")[0].focus()
       console.log(e.target)
   }
})


$("#Model").prop("selectedIndex", -1);
$("#Year").prop("selectedIndex", -1);
modeloption.each(function(){
    $(this).hide()

})

yearoption.each(function(){
     $(this).hide()
})



$("#Mark").change(function(){
   
    let markselect = $(":selected", $("select")[0]);
    $("#Model").prop("selectedIndex", -1);
    $("#Year").prop("selectedIndex", -1);

    

    modeloption.each(function(){
        if ($(this).data("mark") == markselect.data("mark")){
            $(this).show()
           
        }else if(markselect.data("mark")=="All"){
            $("#Model").prop("selectedIndex", -1);
            $("#Year").prop("selectedIndex", -1);
            $(this).hide()

            
            box.each(function(){
                $(this).fadeIn()
                 
              })
           
        }
        else if($(this).val()=="null"){
            $(this).show()
        }
       
        else{
            $(this).hide()
            box.each(function(){
                $(this).fadeOut()
              
              })
        }

    })

    yearoption.each(function(){
         if(markselect.data("mark")=="All"){
            $(this).hide()}
            else{
                $(this).show()
            }
    })  
    
    
    box.each(function(){
        if($(this).data("mark")==markselect.data("mark")){
            $(this).fadeIn()
            
        }
    })
        
});

$("#Model").change(function(){
    let markselect = $(":selected", $("select")[0]);
    let modelselect = $(":selected", $("select")[1]);
    let yearselect = $(":selected", $("select")[2]);
   
    box.each(function(){
        if(markselect.data("mark")==$(this).data("mark") && modelselect.data("model")==$(this).data("model") && yearselect.data("year")==null){
            $(this).fadeIn()
        }else if(markselect.data("mark")==$(this).data("mark") && modelselect.data("model")==null && yearselect.data("year")==$(this).data("year")){
            $(this).fadeIn()
        }
        else if(markselect.data("mark")==$(this).data("mark") && modelselect.data("model")==null && yearselect.data("year")==null){
            $(this).fadeIn()
        } else if(markselect.data("mark")==$(this).data("mark") && modelselect.data("model")==$(this).data("model") && yearselect.data("year")==$(this).data("year")){
            $(this).fadeIn()
        }
        else{
            $(this).fadeOut()
        }
    })
       
})

$("#Year").change(function(){
    let markselect = $(":selected", $("select")[0]);
    let modelselect = $(":selected", $("select")[1]);
    let yearselect = $(":selected", $("select")[2]);
    box.each(function(){
        if(markselect.data("mark")==$(this).data("mark") && modelselect.data("model")==$(this).data("model") && yearselect.data("year")==$(this).data("year")){
            $(this).fadeIn()
        }
        else if (markselect.data("mark")==$(this).data("mark")&& modelselect.data("model")==null  && yearselect.data("year")==$(this).data("year")){
            $(this).fadeIn()
        }else if(markselect.data("mark")==$(this).data("mark") && modelselect.data("model")==$(this).data("model") && yearselect.data("year")==null){
            $(this).fadeIn()
        }else if(markselect.data("mark")==$(this).data("mark") && modelselect.data("model")==null && yearselect.data("year")==null){

        }
        else{
            $(this).fadeOut()
        }
    })
})




