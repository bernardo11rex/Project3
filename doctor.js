$(document).ready(function (){
           $("#toPhar").click(function (){
               $('html, body').animate({
                   scrollTop: $("#team").offset().top
               }, 1000);
           });
       });

       $(window).scroll(function(){
         if($(document).scrollTop() > 200){
           $('#toPhar').fadeOut();
         }
         else{
           $('#toPhar').fadeIn();
         }
       });
