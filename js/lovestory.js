$(document).ready(function() {

    $('.photoset').click(function() {
        var jsonID = $(this).data('json-id');
        $.getJSON('js/json/lovestory/'+jsonID+'.json', function(data) {
            if(data.hasOwnProperty('photos')) {
                data.photos.forEach(function(url) {
                    var gridItemWrapper = $('<div class="col-xs-4 grid-item"></div>');
                    var gridItem = gridItemWrapper.append('<img src="'+url+'" />');
                    $('.grid-container').append(gridItem);
                });
                $('.grid-container').imagesLoaded(function() {
                    $('.grid-container').masonry({
                        itemSelector: '.grid-item',
                        gutter: 0
                    }).fadeIn().masonry('layout');
                });
            }
        });
        $('.photosets').fadeOut(300);
    });
});