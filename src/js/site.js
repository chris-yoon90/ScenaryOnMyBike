"use strict";
(function() {
	$(document).ready(function() {

		$('.navbar-container').find('.navbar .nav-blog').click(function(e) {
			if(!App.showBlog() && App.isHomeContext()) {
				App.hideCoverAndShowBlog();
				App.initMasonry();
			} else if(App.showBlog() && App.isHomeContext()){
				e.preventDefault();
				location.reload();
			}
		});

		$('.nav-toggle-btn').click(toggleSideNav);

		if(App.showBlog() && App.isHomeContext()) {
			App.hideCoverAndShowBlog();
			App.initMasonry();
		}
	});

	// To prevent grids from overlapping. For some reason grids keep overlapping on masonry init. 
	// Need to find out why in the future.
	$(window).load(App.reLayoutMasonry);

	function toggleSideNav(e) {
		$('.side-nav, .mask-modal, .site-header').toggleClass('active');
		$('.nav-toggle-btn').toggleClass('close');
		$('body').toggleClass('no-overflow');

		if($('.side-nav').hasClass('active')) {
			$('.mask-modal').on('click.nav-bar-deactivate', function(event) {
				if(!$('.side-nav').is(event.target) && !$('.side-nav').has(event.target).length) {
					$('.side-nav, .mask-modal, .site-header').removeClass('active');
					$('.nav-toggle-btn').removeClass('close');
					$('body').removeClass('no-overflow');
					$('.mask-modal').off('click.nav-bar-deactivate');
				}
			});
		} else {
			$('.mask-modal').off('click.nav-bar-deactivate');
		}
	}
})();



