$(document).ready(function(){
    $('.carousel__inner').slick({ 
        // dots: true,      
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20%',
        variableWidth: true, 
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {               
                    dots: true,
                    arrows: false
                }
            }            
        ]
    });
});