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

	app.showBlog = function() {
		return location.hash.indexOf('#blog') === 0;
	};

	app.isHomeContext = function() {
		return $('.site-cover').length > 0;
	};

	app.hideCoverAndShowBlog = function() {
		$('.site-cover').hide();
		$('.navbar-container').find('.navbar li').removeClass('nav-current');
		$('.navbar-container').find('.navbar .nav-blog').addClass('nav-current');
		$('body').removeClass('no-overflow');
	};

	window.App = app;
})();;$(function() {
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
		if(!App.showBlog() && App.isHomeContext()) {
			App.hideCoverAndShowBlog();
		} else if(App.showBlog && App.isHomeContext()){
			e.preventDefault();
			$('#site-header-toggle').trigger('click');
		}
	});

	if(App.showBlog() && App.isHomeContext()) {
		App.hideCoverAndShowBlog();
	}
	
});
