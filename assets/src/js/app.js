(function() {
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
})();