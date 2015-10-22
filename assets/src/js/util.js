(function() {
	var util = {
		//Throttle implementation copied from Underscore.js.
		//For more info please visit http://underscorejs.org/
		throttle: function(func, wait, options) {
			var context, args, result;
			var timeout = null;
			var previous = 0;
			if (!options) options = {};
			var later = function() {
				previous = options.leading === false ? 0 : _util.now();
				timeout = null;
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			};
			return function() {
				var now = _util.now();
				if (!previous && options.leading === false) previous = now;
				var remaining = wait - (now - previous);
				context = this;
				args = arguments;
				if (remaining <= 0 || remaining > wait) {
					if (timeout) {
						clearTimeout(timeout);
						timeout = null;
					}
					previous = now;
					result = func.apply(context, args);
					if (!timeout) context = args = null;
				} else if (!timeout && options.trailing !== false) {
					timeout = setTimeout(later, remaining);
				}
				return result;
			};
		},

		//now implementation copied from Underscore.js.
		//For more info please visit http://underscorejs.org/
		now: Date.now || function() {
    		return new Date().getTime();
  		},
	};

	window._util = util;
})();