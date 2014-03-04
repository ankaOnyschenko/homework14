jQuery(document).ready(function($){

    $('body').append('<div class="modal">' +
        '<a class="left" href="#">&#8656;</a>' +
        '<img src=""/>' +
        '<a class="right" href="#">&#8658;</a>' +
        '</div>');

   var popup = $('.modal');
   var img = $('.popular li a img');
   var ancor = $('.popular li a');
    var preImg, nextImg, currentImg;

    ancor.click(function(event){

        event.preventDefault();
        var mySrc = $(this).find('img').attr('src');
        var parentPrev = $(this).parent().prev();
        var parentNext = $(this).parent().next();
		var currentImg = $(this).find('img');
       
	   if (parentPrev.length > 0) {
            preImg = parentPrev.find('img');
        } else {
            preImg = img.last();
        }

        if (parentNext.length > 0) {
            nextImg = parentNext.find('img');
        } else {
            nextImg = img.first();
        }


        if (popup.find('img').attr('src') !== mySrc) {
            popup.find('img').attr('src', mySrc);
        }


        if (!popup.hasClass('active')){
            popup.addClass('active');
        }

    });

    $('.modal .left').click(function(){
        event.preventDefault();

        popup.find('img').attr('src', preImg.attr('src'));
        nextImg = currentImg;
		currentImg = preImg;
        preImg = currentImg.parent().parent().prev().find('img');
        if (preImg.length === 0) {
            preImg = img.last();
        }
    });

    $('.modal .right').click(function(){
        event.preventDefault();

        popup.find('img').attr('src', nextImg.attr('src'));
		preImg = currentImg;
        currentImg = nextImg;
        nextImg = currentImg.parent().parent().next().find('img');
        if (nextImg.length === 0) {
            nextImg = img.first();
        }

    });

    popup.click(function(e){
        if (e.target.tagName == 'DIV') {
            $(this).removeClass('active');
        }
    });

});

