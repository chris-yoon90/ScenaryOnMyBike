$(function() {
	scrollHandler();
	$(window).scroll(_util.throttle(scrollHandler, 100))

	$('.navbar-container').find('.navbar .nav-blog').click(function(e) {
		if(!App.showBlog() && App.isHomeContext()) {
			App.hideCoverAndShowBlog();
		} else if(App.showBlog() && App.isHomeContext()){
			e.preventDefault();
			toggleSideNav();
		}
	});

	if(App.showBlog() && App.isHomeContext()) {
		App.hideCoverAndShowBlog();
	}

	$('.nav-toggle-btn').click(toggleSideNav);

	function toggleSideNav(e) {
		$('.side-nav').toggleClass('active');
		$('.mask-modal').toggleClass('active');
		$('body').toggleClass('noscroll');

		if($('.side-nav').hasClass('active')) {
			$('.mask-modal').on('click.nav-bar-deactivate', function(event) {
				if(!$('.side-nav').is(event.target) && !$('.side-nav').has(event.target).length) {
					$('.side-nav').removeClass('active');
					$('.mask-modal').removeClass('active');
					$('body').removeClass('noscroll');
					$('.mask-modal').off('click.nav-bar-deactivate');
				}
			});
		} else {
			$('.mask-modal').off('click.nav-bar-deactivate');
		}
	}

	function scrollHandler() {
		var offsetFromTop = $(window).scrollTop();

		if(offsetFromTop > 0) {
			$('.site-header').addClass('box-shadow-1');
			return;
		}

		$('.site-header').removeClass('box-shadow-1');
	}
});
