$(document).ready(function () {

    var headerHeight = $('.header-row').outerHeight(),
        navHeight = $('.nav-links-row').outerHeight(),
        footerHeight = $('.footer-row').outerHeight();


    function resizeGallery() {
        var windowHeight = $(window).height();

        galleryImages.height(windowHeight - headerHeight - navHeight - footerHeight - slickDotsHeight);
    }

    $('.main-slider-col').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true
    });

    var galleryImages = $('.main-slider-col .slick-slide img'),
        slickDotsHeight = $('.slick-dots').outerHeight();

    resizeGallery();

    $(window).resize(function() {
        resizeGallery();
    });

    $(window).resize();

});