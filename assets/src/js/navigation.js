$(function() {
	var NAV_HEIGHT = 80;

	darkenNavbarBackgroundColour();
	$(window).resize(darkenNavbarBackgroundColour);

	function darkenNavbarBackgroundColour() {
		var $header = $('.main-header');
		var $navbar = $('.navbar-container');

		if($header.length > 0) {
			$(window).scroll(_util.throttle(scrollHandler, 100));
		}

		function scrollHandler() {
			var offsetFromTop = $(window).scrollTop();
			var headerHeight = $header.outerHeight();

			if(offsetFromTop + NAV_HEIGHT > headerHeight) {
				$navbar.addClass('darken');
				return;
			}

		$navbar.removeClass('darken');
		}
	}
});
