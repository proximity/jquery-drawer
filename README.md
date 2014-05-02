# jQuery Drawer
jQuery Drawer is a plugin that helps you build off screen menus.
This [example](http://proximity.github.io/jquery-drawer/example/) shows
the very basics.

## Options

```js
$('.toggle').drawer({
	menu: '#menu', // Menu element
	push: '.push', // Container element to push
	side: 'left',
	speed: 400,
	class: 'open', // CSS class to apply to the menu element when it is open

	// Callback API
	open: function(settings) {},
	close: function(settings) {}
});
```

## Callback API

The settings object is passed down to the open/close callback functions. **Note:** We attach the width of the menu to the settings object to move other elements that may not be inside the container element, for example:

```js
$('.toggle').drawer({
	open: function(settings) {
		$('.your-element').css('left', settings.width);
	},
	close: function(settings) {
		$('.your-element').css('left', 0);
	}
});
```

