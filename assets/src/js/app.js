(function() {
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

	app.device = function () {
		var width = window.innerWidth;

		if(width < 480) return 'phone';
		if(width < 768) return 'tablet';

		return 'desktop';
	}

	app.masonry_config = {
		itemSelector : '.masonry-grid-item',
		containerStyle: {
			position: 'relative',
			overflow: 'visible'
		},
		columnWidth: '.masonry-grid-item',
		percentPosition: true,
		transitionDuration: '0.4s'
	};

	app.initMasonry = function() {
		$('#masonry-grid').imagesLoaded( function(){
			$('#masonry-grid').masonry(app.masonry_config);
		});
	};

	app.reLayoutMasonry = function() {
		$('#masonry-grid').masonry();
	}

	window.App = app;
})();