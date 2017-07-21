$(document).ready(function() {

    $('.photoset').click(function() {
        var jsonID = $(this).data('json-id');
        $.getJSON('js/json/wedding/'+jsonID+'.json', function(data) {
            if(data.hasOwnProperty('photos')) {
                console.log(data.photos);
                data.photos.forEach(function(url) {
                    var gridItemWrapper = $('<div class="col-xs-4 grid-item"></div>');
                    var gridItem = gridItemWrapper.append('<img src="'+url+'" />');
                    $('.grid-container').append(gridItem);
                });
                $('.grid-container').masonry({
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer'
                }).fadeIn();
                setTimeout(function() {
                    $('.grid-container').masonry('layout');
                }, 0);
            }
        });
        $('.photosets').fadeOut(300);
    });
});