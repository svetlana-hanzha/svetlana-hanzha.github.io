   
$(document).ready(function(){

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });

    // slick 
    $('.reviews__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../glopt/icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../glopt/icons/arrow_right.png"></button>',
        speed: 700
        // responsive: [ 
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             dots: true,
        //             arrows: false
        //         }
        //     }
        // ]
    }); 
    
});

// hamburger
const hamburger = document.querySelector('.header__hamburger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
menu.classList.remove('active');
});