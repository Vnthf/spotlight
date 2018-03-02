
import {KEY_CODE, DEFAULT_OPTION} from "./config";
import "./polyfill"
import "./spotlight.css"

let $mask,
	$zoom,
	$zoomScroller,
	defaultTop,
	defaultLeft, x, y,
	option;

function SpotLight(_option) { //device detector 고려
	option = Object.assign({}, _option, DEFAULT_OPTION);
	if(!option.el) {
		option.el = document.body.firstElementChild;
	}
	window.getComputedStyle(document.getElementById('content'), null)['backgroundColor']
	if(!option.radius) {
		option.radius = option.el.getBoundingClientRect().height / 4
	}
	var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
	console.log(option)
	if (isMac) {
		KEY_CODE.CTRL = 91;
		option.zoomKey = 'metaKey';
	}

	document.addEventListener('keyup', function (e) {
		console.log(e)
		if (KEY_CODE.SHIFT === e.keyCode) {
			stopMask();
		}

		if (KEY_CODE.CTRL === e.keyCode) {
			// stopZoom();
		}
	});

	document.addEventListener('keydown', function (e) {
		if (KEY_CODE.SHIFT === e.keyCode) {
			startMask();
		}

		if (e.shiftKey && KEY_CODE.CTRL === e.keyCode) {
			startZoom(e);
		}
	});

	document.addEventListener('mousemove', setSpotLight);
}

function startMask() {
	if($mask) {
		return;
	}
	$mask = document.createElement('div');
	$mask.classList.add('spotlight-mask');
	document.body.appendChild($mask);
	setMask();
}

function stopMask() {
	$mask && $mask.remove();
	// stopZoom();
	$mask = null;
}

function startZoom() {
	if($zoom) {
		return;
	}
	$zoom = document.createElement('div');
	$zoom.classList.add('spotlight-zoom');
	$zoomScroller = option.el.cloneNode(true);
	$zoomScroller.classList.add('spotlight-zoom-scroller');
	$zoom.setAttribute('style', `
		width: ${option.radius}px; 
		height: ${option.radius}px;`
	);
	document.body.appendChild($zoom);
	$zoom.appendChild($zoomScroller);
	// $zoom.find('.remark-slide-content').scrollTop($document.find('.remark-slide-container.remark-visible .remark-slide-content').scrollTop());
	setZoom();
}

function stopZoom() {
	$zoom && $zoom.remove();
	$zoom = null;
}

function setSpotLight(e) {
	x = e.pageX;
	y = e.pageY;

	if(!$mask) {
		return;
	}

	if (!e.shiftKey) {
		stopMask();
	}

	if (!e[option.zoomKey] && $zoom) {
		// stopZoom();
	}

	setMask();

	if (e[option.zoomKey]) {
		setZoom();
	}
}

function setMask() {
	let imageCss = getBackGroundImageCss(x, y, option.radius);
	$mask.setAttribute('style', `background-image: ${imageCss}; background-image: -webkit-${imageCss};`)
}

function setZoom() {
	defaultTop = option.el.scrollTop;
	defaultLeft = option.el.scrollLeft;
	$zoom.style.top = `${y - option.radius / 2}px`;
	$zoom.style.left = `${x - option.radius / 2}px`;
	$zoomScroller.style.marginTop = -y + option.radius / 2 + parseInt(defaultTop, 10) + 'px';
	$zoomScroller.style.marginLeft = -x + option.radius/ 2 + parseInt(defaultLeft, 10) + 'px';
	console.log($zoomScroller)
	// $zoom.css({top: y - option.radius / 2, left: x - option.radius / 2});
	// defaultTop.css('top', -y + option.radius / 2 + parseInt(defaultTop, 10));
	// $zoom.find('.remark-slide-scaler').css('left', -x + option.radius/ 2 + parseInt(defaultLeft, 10));
}

function getBackGroundImageCss(x, y, radius) {
	return 'radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent ' + radius + 'px, '+ option.dimmedColor + ' 0)';
}

export {SpotLight}
