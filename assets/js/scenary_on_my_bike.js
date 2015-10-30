(function() {
	var util = {
		//Throttle implementation copied from Underscore.js.
		//For more info please visit http://underscorejs.org/
		throttle: function(func, wait, options) {
			var context, args, result;
			var timeout = null;
			var previous = 0;
			if (!options) options = {};
			var later = function() {
				previous = options.leading === false ? 0 : _util.now();
				timeout = null;
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			};
			return function() {
				var now = _util.now();
				if (!previous && options.leading === false) previous = now;
				var remaining = wait - (now - previous);
				context = this;
				args = arguments;
				if (remaining <= 0 || remaining > wait) {
					if (timeout) {
						clearTimeout(timeout);
						timeout = null;
					}
					previous = now;
					result = func.apply(context, args);
					if (!timeout) context = args = null;
				} else if (!timeout && options.trailing !== false) {
					timeout = setTimeout(later, remaining);
				}
				return result;
			};
		},

		//Debounce implementation copied from Underscore.js.
		//For more info please visit http://underscorejs.org/
		debounce: function(func, wait, immediate) {
			var timeout, args, context, timestamp, result;

			var later = function() {
				var last = _util.now() - timestamp;

				if (last < wait && last >= 0) {
					timeout = setTimeout(later, wait - last);
				} else {
					timeout = null;
					if (!immediate) {
						result = func.apply(context, args);
						if (!timeout) context = args = null;
					}
				}
			};

			return function() {
				context = this;
				args = arguments;
				timestamp = _util.now();
				var callNow = immediate && !timeout;
				if (!timeout) timeout = setTimeout(later, wait);
				if (callNow) {
					result = func.apply(context, args);
					context = args = null;
				}

				return result;
			};
		},

		//now implementation copied from Underscore.js.
		//For more info please visit http://underscorejs.org/
		now: Date.now || function() {
			return new Date().getTime();
		},
	};

	window._util = util;
})();;(function() {
	var app = window.App || {};

	app.showBlog = (function() {
		return location.hash.indexOf('#blog') === 0;
	})();

	app.isHomeContext = function() {
		return $('.site-cover').length > 0;
	};

	app.hideCoverAndShowBlog = function() {
		$('.site-cover').hide();
		$('.navbar-container').find('.navbar li').removeClass('nav-current');
		$('.navbar-container').find('.navbar .nav-blog').addClass('nav-current');
		$('body').removeClass('no-overflow');
	};

	app.device = function () {
		var width = window.innerWidth;

		if(width < 480) return 'phone';
		if(width < 768) return 'tablet';

		return 'desktop';
	}

	window.App = app;
})();;"use strict";

$(window).load(function() {
	var IMG_PATH = "assets/images/";
	var NAME = "CHRIS YOON";
	var MESSAGES = ['Welcome to my site!', 'Are you hiring?', 'Let\'s talk'];

	var $canvasContainer = $('#canvas-container');
	var $navbar = $('.site-cover .navbar-container');

	$.when(loadImage(IMG_PATH + 'wanted_poster_bg.png'))
		.then(function(image) {

			var canvas = document.createElement('canvas');
			canvas.className = 'canvas';

			var canvasDimension = getCanvasDimension();

			canvas.width = canvasDimension.width;
			canvas.height = canvasDimension.height;

			drawWantedPoster(canvas, image, NAME, MESSAGES);

			$canvasContainer.append(canvas);
			$navbar.addClass('animate');

			$(window).resize(_util.debounce(function() {
				var dimensions = getCanvasDimension();
				canvas.width = dimensions.width;
				canvas.height = dimensions.height;

				drawWantedPoster(canvas, image, NAME, MESSAGES);
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

		if(dimensions.height < MIN_HEIGHT) dimensions.height = MIN_HEIGHT;

		dimensions.width = dimensions.height / ASPECT_RATIO;
		return dimensions;
	}

	function drawWantedPoster(canvas, image, name, messages) {
		var context = canvas.getContext('2d');

		context.drawImage(image, 0, 0, canvas.width, canvas.height);

		drawText(context, 0.147 * canvas.height, 'WANTED', canvas.width / 2, canvas.height * 0.16);
		drawText(context, 0.063 * canvas.height, 'O N L Y  A L I V E', canvas.width / 2, canvas.height * 0.69);
		drawText(context, 0.09 * canvas.height, name, canvas.width / 2, canvas.height * 0.81);
		drawText(context, 0.023 * canvas.height, base64Encode(messages), canvas.width * 0.1, canvas.height * 0.895, {textAlign: 'left'});
		drawText(context, 0.055 * canvas.height, 'MARINE', canvas.width * 0.93, canvas.height * 0.94, {textAlign: 'right'});
	}

	function drawText(canvasContext, fontSizeInPixel, texts, x, y, options) {
		var fontFamily = 'Playfiar Display';
		var lineHeight = fontSizeInPixel * 1.1;
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

		canvasContext.font = fontSizeInPixel + 'px ' + fontFamily;

		if(Array.isArray(texts)) {
			texts.forEach(function(text, index, array) {
				var yPosition = y + (lineHeight * index);
				canvasContext.fillText(text, x, y + (lineHeight * index));
			});
			return;
		}

		canvasContext.fillText(texts, x, y);
	}

	function base64Encode(messages) {
		if(Array.isArray(messages)) {
			return messages.map(btoa);
		}

		return btoa(messages);
	}
});;$(function() {
	var NAV_HEIGHT = 80;
	var $header = $('.main-header');
	var $site_header = $('.site-header');
	var $navbar = $('.navbar-container');

	darkenSiteHeaderBackgroundColour();
	$(window).resize(_util.debounce(darkenSiteHeaderBackgroundColour, 250));

	function darkenSiteHeaderBackgroundColour() {
		if($header.length > 0) {
			$(window).scroll(_util.throttle(scrollHandler, 100));
		}

		function scrollHandler() {
			var offsetFromTop = $(window).scrollTop();
			var headerHeight = $header.outerHeight();

			if(offsetFromTop + NAV_HEIGHT > headerHeight) {
				$site_header.addClass('darken');
				return;
			}

		$site_header.removeClass('darken');
		}
	}

	$navbar.find('.navbar .nav-blog').click(function(e) {
		if(!App.showBlog && App.isHomeContext()) {
			App.hideCoverAndShowBlog();
		} else if(App.showBlog && App.isHomeContext()){
			e.preventDefault();
			$('#site-header-toggle').trigger('click');
		}
	});

	if(App.showBlog && App.isHomeContext()) {
		App.hideCoverAndShowBlog();
	}
	
});
