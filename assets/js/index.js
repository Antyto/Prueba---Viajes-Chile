$(document).ready(function(){
    $(".nav-link").on("click",function(){  
        $(this).css({
        "color": "hotpink",
        });
    });  
    $('[data-toggle="tooltip"]').tooltip();
});
   