$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        loop:true,
        nav:true,
        dots:true,
        margin:100,
        mouseDrag:false,
        touchDrag:false,
        autoplay:true,
        autoplayTimeout:8000,
        smartSpeed:500,

        responsive:{
            0:{
                items:1

            },

            1000:{
                items:1
            }
        }
    });

});