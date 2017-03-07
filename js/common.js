$(document).ready(function(){
    window.onscroll = function() {
          if (window.pageYOffset > 410) {
            $("section#banner").fadeIn("slow");
          } 
    };
});