(function($) {
	$.fn.drawer = function(options) {
		var settings = $.extend({
			menu: '#menu',
			push: '.push',
			side: 'left',
			speed: 400,
			class: 'open',
			open: $.noop,
			close: $.noop
		}, options);

		var menuToggle = this,
			menu = $(settings.menu),
			push = $(settings.push);

		function toggleMenu(e) {
			e.preventDefault();
			e.stopPropagation();

			if (menu.isOpen) {
				menu.close();
			} else {
				menu.open();
			}
		}

		var pushCSS = {
			'-webkit-transition': 'left ' + settings.speed + 'ms ease',
			'-moz-transition': 'left ' + settings.speed + 'ms ease',
			'-ms-transition': 'left ' + settings.speed + 'ms ease',
			'-o-transition': 'left ' + settings.speed + 'ms ease',
			'transition': 'left ' + settings.speed + 'ms ease',
			'position': 'absolute',
			'left': 0
		};

		push.css(pushCSS);

		menu.isOpen = false;

		menu.open = function() {
			var width = menu.outerWidth(),
				left = settings.side === 'right' ? width * -1 : width,
				pushCSS = {
					left: left,
					overflow: 'hidden'
				};

			settings.width = width;
			settings.open(settings);

			menu.isOpen = true;
			menu.addClass(settings.class);

			push.css(pushCSS).on('click touchend', toggleMenu);
		};

		menu.close = function() {
			settings.close(settings);

			menu.isOpen = false;

			// as we are unable define a callback for after the css is applied,
			// we use a good old timeout that is set to the same speed as the transition
			setTimeout(function() {
				menu.removeClass(settings.class);
			}, settings.speed);

			var pushCSS = {
				left: 0,
				overflow: 'auto'
			};

			push.css(pushCSS).off('click touchend', toggleMenu);
		};

		$(document).on('click touchend', menuToggle.selector, toggleMenu);

		return menu;
	};
})(jQuery);
