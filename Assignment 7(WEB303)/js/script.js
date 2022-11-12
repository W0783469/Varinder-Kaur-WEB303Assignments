$(function () {
	$('#photo-viewer')
		.customPhotoViewer()
		.show()
		.on('click', '.photo-box', function (e) {
			var $content = $(this).clone().find('img').css({marginLeft: 0,marginTop: 0,width: '100%',height: 'auto', border: 'none', padding: 0});
			 e.preventDefault();
            modal.open({content:$content, width: 800, height: 450});
           modal.addHeading(); // Add a heading to the top of the modal with your gallery name

		});
});

function changeH1TagWithMyName() {
	$('h1').text('VARINDER KAUR PICTURES');
}

function setHrefForPhotoBox() { //set to photo box
	$(document).on('click', '.thumbnail-anchor', function (e) {
		const src = this.href;
		const $photoBox = $('a.photo-box');
		$photoBox.attr({ href: src });
	});
}

$(document).ready(function () {
	changeH1TagWithMyName();

	
	$('.photo-box').css({ margin: '0 auto' });
	$('.photo-thumbnails').css({ display: 'flex', justifyContent: 'center', marginTop: 20, gap: 10 });

	setHrefForPhotoBox();//Bind event
	$('.thumbnail-anchor').eq(0).click();
});
