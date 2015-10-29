"use strict";

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

			drawWantedPoster(canvas, image, 'CHRIS YOON', 'secret message');

			$canvasContainer.append(canvas);
			$navbar.addClass('animate');

			$(window).resize(_util.debounce(function() {
				var dimensions = getCanvasDimension();
				canvas.width = dimensions.width;
				canvas.height = dimensions.height;

				drawWantedPoster(canvas, image, 'CHRIS YOON', 'secret message');
			}, 250));

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
		var MIN_HEIGHT = 400;
		var ASPECT_RATIO = 1.445; // width * ASPECT_RATIO = height
		var dimensions = {};

		var windowHeight = window.innerHeight;
		dimensions.height = windowHeight * 0.85;

		if(dimensions.height < MIN_HEIGHT) dimensions.Height = MIN_HEIGHT;

		dimensions.width = dimensions.height / ASPECT_RATIO;
		return dimensions;
	}

	function drawWantedPoster(canvas, image, name, encodedMessage) {
		var context = canvas.getContext('2d');

		context.drawImage(image, 0, 0, canvas.width, canvas.height);

		drawText(context, '3.7rem', 'WANTED', canvas.width / 2, canvas.height * 0.15);
		drawText(context, '1.6rem', 'O N L Y  A L I V E', canvas.width / 2, canvas.height * 0.69);
		drawText(context, '2.3rem', name, canvas.width / 2, canvas.height * 0.81);
		drawText(context, '1rem', encodedMessage, canvas.width * 0.3, canvas.height * 0.9);
	}

	function drawText(canvasContext, fontSize, text, x, y, options) {
		var fontFamily = 'Playfiar Display';
		var DEFAULT_OPTIONS = {
			"fillStyle": '#3A302C',
			"textAlign": 'center'
		};
		var fontFamily;

		for(var key in DEFAULT_OPTIONS) {
			if(DEFAULT_OPTIONS.hasOwnProperty(key)) {
				canvasContext[key] = DEFAULT_OPTIONS[key];
			}
		}

		for(var key in options) {
			if(options.hasOwnProperty(key)) {
				if(key === 'fontFamily') {
					fontFamily = options[key];
				} else {
					canvasContext[key] = options[key];
				}
			}
		}

		canvasContext.font = fontSize + ' ' + fontFamily;
		// canvasContext.fillStyle = text_color;
		// canvasContext.textAlign = text_align;
		canvasContext.fillText(text, x, y);
	}
});