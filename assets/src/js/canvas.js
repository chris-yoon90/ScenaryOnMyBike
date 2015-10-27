$(window).load(function() {
	var IMG_PATH = "assets/images/";

	var $canvasContainer = $('#canvas-container');
	var $navbar = $('.site-cover .navbar-container');

	$.when(loadImage(IMG_PATH + 'canvas_test.png'))
		.then(function(image) {

			var canvas = document.createElement('canvas');
			canvas.className = 'canvas';
			canvas.width = 300;
			canvas.height = 350;

			context = canvas.getContext('2d');

			context.drawImage(image, 0, 0, canvas.width, canvas.height);

			$canvasContainer.append(canvas);
			$navbar.addClass('visible');
		});

	function loadImage(src) {
		var deferred = $.Deferred();
		var image = new Image();

		image.onload = function() {
			deferred.resolve(image);
		};

		image.src = src;
		return deferred.promise();
	}
});