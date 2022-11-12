let request; //request for image
let $current; //current image shown
const cache = {};
const $frame = $('.photo-box'); 

function crossfade($img) {
	if ($current) {

		$current.stop().fadeOut('slow'); //to stop animation
	}

	$img.css({ //applying css
		marginLeft: -$img.width() / 2,
		marginTop: -$img.height() / 2,
	});
	$img.stop().fadeTo('slow', 1); 
	$current = $img; //current image
}

$.fn.customPhotoViewer = function () {
	$(document).on('click', '.thumbnail-anchor', function (e) {
		var $img; //local variable
		var src = this.href; 

		request = src; 

		e.preventDefault(); 
        $(".photo-thumbnails>a.active").removeClass("active");
		$(this).addClass('active'); 

		if (cache.hasOwnProperty(src)) {

			if (cache[src].isLoading === false) { //false is loading
				crossfade(cache[src].$img); 
			}
		} else {
			$img = $('<img/>'); 

			cache[src] = {
				$img: $img, 
				isLoading: true, //true is loading property
			};
		
			$img.on('load', function () {
				$img.hide(); //to hide image
				$frame.removeClass('is-loading').append($img); 
				cache[src].isLoading = false; 
				if (request === src) {
					crossfade($(this));
				} 
			});
			$frame.addClass('is-loading'); 
			$img.attr({
				src: src, //to load the image
				alt: this.title || '', 
			});
			$img.css({ padding: 10, border: '1px solid blue' }); // apply css for image
		}
		return this;
	});
	return this;
};
