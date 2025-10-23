$(document).ready(function(){
    $(".minue").click(function(){
    
      
        $(".header ul").css("display","block");
          $(".header ul").slideDown();
        $(".minue div").css("background","rgb(117, 241, 225)");
        
    }
    );

    $(".header ul").mouseleave(function(){

        $(".header ul").slideUp();
        $(".minue div").css("background","white")
    })  





    $("div .log").animate({ 
        top:'53%'},1100)

        $("div .log").animate({ 
            height:'380px'},1200,function(){
                $(".hide").fadeIn(2000)

            })

           
    
           
    

    

    
})