$(document).ready(function () {

    var headerHeight = $('.header-row').outerHeight(),
        navHeight = $('.nav-links-row').outerHeight(),
        footerHeight = $('.footer-row').outerHeight(),
        slider = $('.main-slider-col');


    function resizeGallery() {
        var galleryImages = $('.main-slider-col .slick-slide img');
        var windowHeight = $(window).height();
        galleryImages.height(windowHeight - headerHeight - navHeight - footerHeight);
    }

    $.ajax({
        url: 'getGalleryData.php',
        method: 'POST',
        data: {
            type: 'index'
        },
        dataType: 'json',
        success: function(data) {
            data.photos.forEach(function(url) {
                url = 'images/index/'+url;
                var img = $('<img src="'+url+'">');
                var container = $('<div></div>');
                container.append(img);
                slider.append(container);
            });
            slider.slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true,
                focusOnSelect: true,
            });
            setTimeout(function() {
                resizeGallery();
            }, 300);
        }
    });

    $(window).resize(function() {
        resizeGallery();
    });

    $(window).resize();
});