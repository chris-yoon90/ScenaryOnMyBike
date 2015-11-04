$(function() {
	scrollHandler();
	$(window).resize(_util.debounce(scrollHandler, 250));
	$(window).scroll(_util.throttle(scrollHandler, 100))

	$('.navbar-container').find('.navbar .nav-blog').click(function(e) {
		if(!App.showBlog() && App.isHomeContext()) {
			App.hideCoverAndShowBlog();
		} else if(App.showBlog() && App.isHomeContext()){
			e.preventDefault();
			$('#site-header-toggle').trigger('click');
		}
	});

	if(App.showBlog() && App.isHomeContext()) {
		App.hideCoverAndShowBlog();
	}

	function scrollHandler() {
		var offsetFromTop = $(window).scrollTop();

		if(offsetFromTop > 0) {
			$('.site-header').addClass('darken');
			return;
		}

		$('.site-header').removeClass('darken');
	}
});
