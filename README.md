# SPOT LIGHT (beta)

## Spot light works on any dom and image. Pressing the shift key activates the spotlight and pressing and holding ctrl/cmd zooms in.

option (default)
```javascript
{	
		dimmedColor: `rgba(0,0,0,0.4)`,
		zoomedColor: '#fff',
		zoomKey: util.isMac()? 'metaKey': 'ctrlKey',
		zoomScale: 2,
		zIndex: 1000,
		el: el,
		radius: options.el.getBoundingClientRect().width / 4
}

```


spotlight (press shift)

![spotlight](https://github.com/Vnthf/spotlight/images/spotlight.png)

zoom (press shift + ctrl(command))

![zoom](https://github.com/Vnthf/spotlight/images/zoom.png)