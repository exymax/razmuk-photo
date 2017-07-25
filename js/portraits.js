$(document).ready(function() {
    $.ajax({
        url: 'getGalleryData.php',
        method: 'POST',
        data: {
            type: 'portraits'
        },
        dataType: 'json',
        success: function(data) {
            if(data.hasOwnProperty('photos')) {
                data.photos.forEach(function(url) {
                    url = 'images/portraits/'+url;
                    var gridItemWrapper = $('<div class="col-xs-4 grid-item"></div>');
                    var gridItem = gridItemWrapper.append('<img src="'+url+'" />');
                    $('.grid-container').append(gridItem);
                });
                $('.grid-container').imagesLoaded(function() {
                    var freewall = new Freewall('.grid-container');
                    freewall.reset({
                        selector: '.grid-item',
                        animate: true,
                        cellW: 200,
                        cellH: 150,
                        onResize: function() {
                            freewall.fitWidth();
                        }
                    });
                    freewall.fitWidth();
                });
                $('.grid-container').fadeIn();
            }
        }
    });
});