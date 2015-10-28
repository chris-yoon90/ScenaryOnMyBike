$(function() {
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
