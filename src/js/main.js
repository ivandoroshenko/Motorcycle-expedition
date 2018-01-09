$(function() {

    
    $('.testimonial__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: false
    });

    $('.parallax-window').parallax({ 
        imageSrc: '../img/paralax_bg.jpg' 
    });
}); 