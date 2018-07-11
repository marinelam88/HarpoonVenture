$(document).ready(function(){
    $.scrollIt({
        upKey: 38,             
        downKey: 40,          
        easing: 'linear',      
        scrollTime: 600,       
        activeClass: 'active', 
        onPageChange: null,    
        topOffset: 0           
    });

    var initializeSlider = function(id){
        var slider = tns({
            container: id,
            items: 1,
            slideBy: 'page',
            autoplay: false,
            axis: "vertical",
            controls: false,
            autoHeight: true,
            nav: true,
            mouseDrag: true,
            useLocalStorage: false
          });

        return slider;
    }

    initializeSlider("#slider1");
    initializeSlider("#slider2");
    initializeSlider("#slider3");
    initializeSlider("#slider4");
    initializeSlider("#slider5");

    $(".profile").on("mouseenter", function(event){
        event.stopImmediatePropagation();
        $(this).find("img").css("filter", "brightness(55%)");
        $(this).find(".upper-content").fadeIn(500);
    });

    $(".profile").on("mouseleave", function(event){
        event.stopImmediatePropagation();
        $(this).find(".upper-content").fadeOut(500);
        $(this).find("img").css("filter", "brightness(100%)");
    });

});
