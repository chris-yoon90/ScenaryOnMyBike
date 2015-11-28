"use strict";

(function() {
	var app = window.App || {};

	app.showBlog = function() {
		return location.hash.indexOf('#blog') === 0;
	};

	app.isHomeContext = function() {
		return $('.site-cover').length > 0;
	};
	
	app.isContext = function(context, slug) {
		var body_context = $('body').attr('class');
		var context_lowercase = context.toLowerCase();
		
		if(context_lowercase === 'home') {
			return body_context.indexOf('home-template') !== -1;
		} else if(context_lowercase === 'index') {
			return body_context.indexOf('home-template') !== -1 || 
				(body_context.indexOf('paged') !== -1 && 
				body_context.indexOf('author-template') === -1 && 
				body_context.indexOf ('tag-template') === -1);
		} else if(context_lowercase === 'post') {
			return body_context.indexOf('post-template') !== -1 && body_context.indexOf('page-template') === -1;
		} else if (context_lowercase === 'tag') {
			if(slug) {
				return body_context.indexOf('tag-template') !== -1 && 
					body_context.indexOf('tag-' + slug.toLowerCase()) !== -1;
			} 
			
			return body_context.indexOf('tag-template') !== -1;
		} else  if (context_lowercase === 'page') {
			if(slug) {
				return  body_context.indexOf('page-template') !== -1 && 
					body_context.indexOf('page-' + slug.toLowerCase()) !== -1;
			}
			
			return body_context.indexOf('page-template') !== -1;
		} else if (context_lowercase === 'author') {
			if(slug) {
				return body_context.indexOf('author-template') !== -1 && 
					body_context.indexOf('author-' + slug.toLowerCase());
			}
			
			return body_context.indexOf('author-template') !== -1;
		}
	}

	app.hideCoverAndShowBlog = function() {
		$('.site-cover').hide();
		$('.navbar-container').find('.navbar li').removeClass('nav-current');
		$('.navbar-container').find('.navbar .nav-blog').addClass('nav-current');
		$('body').removeClass('no-overflow');
	};

	app.device = function () {
		var width = window.innerWidth;

		if(width < 768) return 'phone';
		if(width < 992) return 'tablet';

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
		transitionDuration: 0
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