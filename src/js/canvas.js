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
            typeLine($('#typed-1'), 'Hello visitor!', function() {
                $('#typed-1').after('<br/>');
            }).then(function() {
               $('#line-2').show();
               return typeLine($('#typed-2'), 'I am Chris.', function() {
                   $('#typed-2').after('<br/>');
               });
            }).then(function() {
               $('#line-3').show();
               return typeLine($('#typed-3'), 'I\'m a software developer.', function() {
                   $('#typed-3').after('<br/>');
               });
            }).then(function() {
                $('#line-4').show();
                return typeLine('#typed-4', 'ls', function() {
                    $('#typed-4').after('<br/>');
                    var $navbar = $('.site-cover .navbar-container');
                    $navbar.addClass('animate');
                });
            }).then(function() {
                $('#line-5').show();
            });

			
		}
	});
    
    function typeLine(element, text, callback) {
        var $element = $(element);
        var deferred = $.Deferred();
        var options = Object.create(COMMON_OPTIONS);
        
        options.strings = [ text ];
        options.callback = function() {
            callback();
            deferred.resolve();
        }

        $element.typed(options);
        
        return deferred.promise();
    }
})();

