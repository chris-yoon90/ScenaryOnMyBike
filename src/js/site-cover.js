"use strict";

(function() {
    var COMMON_OPTIONS = {
        contentType: 'html',
        showCursor: false,
        startDelay: 500,
        typeSpeed: 10,
    };
    
	$(document).ready(function() {
		if(App.isContext('home') && $('.site-cover').length > 0 && !App.showBlog()) {

            $('#line-1').show();
            typeLine($('#typed-1'), 'Hello there!', function() {
                $('#typed-1').after('<br/>');
            }).then(function() {
               $('#line-2').show();
               return typeLine($('#typed-2'), 'I\'m Chris.', function() {
                   $('#typed-2').after('<br/>');
               });
            }).then(function() {
               $('#line-3').show();
               return typeLine($('#typed-3'), 'I\'m a software developer.', function() {
                   $('#typed-3').after('<br/>');
               });
            }).then(function() {
                $('#line-4').show();
                return typeLine('#typed-4', 'Find more about me by clicking on the links below!', function() {
                    $('#typed-4').after('<br/>');
                });
            }).then(function() {
                $('#line-5').show();
            });
            
            var $navbar = $('.site-cover .navbar-container');
            var $sns_links = $('.site-cover .site-cover-sns-links');
            $navbar.addClass('animate');
            $sns_links.addClass('animate'); 
		}
	});
    
    function typeLine(element, text, callback) {
        var $element = $(element);
        var deferred = $.Deferred();
        var options = Object.create(COMMON_OPTIONS);
        
        options.strings = [ text ];
        options.callback = function() {
            setTimeout(function() {
                callback();
                deferred.resolve();
            }, 500);
        }

        $element.typed(options);
        
        return deferred.promise();
    }
})();

