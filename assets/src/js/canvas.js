$(window).load(function() {
	var IMG_PATH = "assets/images/";

	var $canvasContainer = $('#canvas-container');
	var $navbar = $('.site-cover .navbar-container');

	$.when(loadImage(IMG_PATH + 'wanted_poster_bg.png'))
		.then(function(image) {

			var canvas = document.createElement('canvas');
			canvas.className = 'canvas';


			var canvasDimension = getCanvasDimension();

			canvas.width = canvasDimension.width;
			canvas.height = canvasDimension.height;

			context = canvas.getContext('2d');

			context.drawImage(image, 0, 0, canvas.width, canvas.height);

			$canvasContainer.append(canvas);
			$navbar.addClass('animate');
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

	function getCanvasDimension() {
		var dimensions = {};
		switch(App.device) {
			case 'phone':
				dimensions.width = 300;
				dimensions.height = 400;
				break;
			case 'tablet':
				dimensions.width = 300;
				dimensions.height = 350;
				break;
			case 'desktop':
				dimensions.width = 300;
				dimensions.height = 350;
				break;
		}
		return dimensions;
	}
});