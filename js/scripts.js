$(function(){
    'use strict';
     // banner-part slider start
     $('#banner-part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    
    // Gallery js here
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: 'red',
        arrowsColor: 'green',
        closeColor: 'red',
        closeBackground: 'gray',
    });

    // Counter up js here
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

     // back to top

     $('.back-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        });
    });

    $(window).scroll(function () {
        var scrolling2 = $(this).scrollTop();

        if (scrolling2 > 150) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut()
        }
    });
    










})