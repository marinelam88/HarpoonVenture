$(document).ready(function(){
    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 600,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: 0           // offste (in px) for fixed top navigation
    });

    var initializeSlider = function(id){
        var slider = tns({
            container: id,
            items: 1,
            slideBy: 'page',
            autoplay: false,
            axis: "vertical",
            controls: false,
            autoHeight: false,
            nav: true,
            mouseDrag: true,
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
