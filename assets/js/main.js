$(document).ready(function(){
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
          });

        return slider;
    }

    initializeSlider("#slider1");
    initializeSlider("#slider2");
    initializeSlider("#slider3");
    initializeSlider("#slider4");
    initializeSlider("#slider5");

});