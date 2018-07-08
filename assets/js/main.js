$(document).ready(function(){
    var initializeSlider = function(id, beforeSlide){
        $(id).lightSlider({
            item: 1,
            autoWidth: false,
    
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////
            speed: 400, //ms'
            slideEndAnimation: true,
            controls: false,
            adaptiveHeight:false,
            vertical:true,
            pager: true,
            enableTouch:true,
            enableDrag:true,
            freeMove:true,
            swipeThreshold: 40,
            responsive : [],
            onBeforeSlide: beforeSlide
        });
    }

    var handleAboutSquaresInSlide = function(el){
        var currentSlide = el.getCurrentSlideCount();
        var $squares = el.find(".squares");
        if(currentSlide !== 1){
            $squares.fadeOut();
        }else{
            $squares.show();
        }
    }

    initializeSlider("#slider1");
    initializeSlider("#slider2", handleAboutSquaresInSlide);
});