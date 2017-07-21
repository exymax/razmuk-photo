$(document).ready(function() {

    $('.photoset').click(function() {
        var jsonID = $(this).data('json-id');
        $.getJSON('js/json/wedding/'+jsonID+'.json', function(data) {
            if(data.hasOwnProperty('photos')) {
                data.photos.forEach(function(url) {
                    var gridItemWrapper = $('<div class="grid-item"></div>');
                    var gridItem = gridItemWrapper.append('<img src="'+url+'" />');
                    $('.grid-container').append(gridItem);
                });
                $('.grid-container').masonry({
                    itemSelector: '.grid-item'
                });
            }
        });
        $('.photosets').fadeOut(300);
    });
});