$(document).ready(function(){
    
    $('.content').mouseenter(function() {
        $(".content-overlay").css({"opacity": "1"});
            
        $(".content-details").css({"top": "50%", "left": "50%", "opacity": "1"});
    });
    $('.content').mouseleave(function() {
        $(".content-overlay").css({"opacity": "0"});
            
        $(".content-details").css({"top": "0", "left": "0", "opacity": "0"});
    });
});

