$(document).ready(function() {
    $('.photoset').each(function() {
        var jsonID = $(this).data('json-id');
        $(this).prepend('<img src="images/lovestory/'+jsonID+'/1.webp">');
    });

    $('.photoset').click(function() {
        var jsonID = $(this).data('json-id');
        $.ajax({
            url: 'getGalleryData.php',
            method: 'POST',
            data: {
                type: 'lovestory',
                id: jsonID
            },
            dataType: 'json',
            success: function(data) {
                if(data.hasOwnProperty('photos')) {
                    data.photos.forEach(function(url) {
                        url = 'images/lovestory/'+jsonID+'/'+url;
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
        $('.photosets').fadeOut(300);
    });
});