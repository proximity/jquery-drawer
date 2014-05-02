# jQuery Drawer

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

