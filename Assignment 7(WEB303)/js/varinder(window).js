var modal = (function () {
	//Declare modal object
	var $window = $(window);
	var $modal = $('<div class="modal"></div>'); //create markup for modal
	var $content = $('<div class="modal-content"></div>');
	var $close = $('<button role="button" class="modal-close">CLOSE IT</button>'); //Create a close button

	$modal.append($content);

	return {
		center: function () {
			$modal.css({
				top: 0, //(vertical)
				left: 0, //(horizontal)
			});
		},
		//open method
		open: function (settings) {
			$content.empty().append(settings.content).append($close); //Set new content of modal
			$close.on('click', function (e) {
				e.preventDefault();
				modal.close();
			});
			$content.css({
				maxWidth: settings.width || 'auto',
				maxHeight: settings.height || 'auto',
				position: 'absolute',
				top: '30%',
				left: '50%',
				transform: 'translate(-50%, -30%)',
			});
              //modal dimensions
			$modal
				.css({
					
					width: '100vw',
					height: '100vh',
					background: 'rgba(153, 149, 149, 0.9)',
					position: 'fixed',
				})
				.appendTo('body'); 
            //center method
			modal.center(); 
			//to resize the window
			$(window).on('resize scroll', modal.center); 
		},
		//close method
		close: function () {
			$content.empty(); 
			$modal.detach();
			$window.off('resize', modal.center); 
		},
		addHeading: function (title) {
            const $heading = `<h1>${title || 'Varinder Kaur'} - Photo Gallery</h1>`
			$content.prepend($heading);
		},
	};
})();
