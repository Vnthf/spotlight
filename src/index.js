import {KEY_CODE} from "./config";
import util from './util'
import "./polyfill"

class SpotLight {
	constructor(options) {
		this.changeOption(options);
		this._attachEvent();
	}

	_computeOptions(_options) {
		let el = _options.el || document.body.firstElementChild;

		let defaultOptions = {
			dimmedColor: `rgba(0,0,0,0.4)`,
			zoomedColor: '#fff' || window.getComputedStyle(el, null)['backgroundColor'], //임시 코드
			zoomKey: util.isMac() ? 'metaKey' : 'ctrlKey',
			zoomScale: 2,
			zoomElClassName: ['spotlight-zoom'],
			zIndex: 1000,
			el: el,
			scrollEl: el,
			radius: options.el.getBoundingClientRect().width / 6,
			preventEvent: false,
			callback: {
				movedSpotLight: () => {},
				toggledMask: () => {},
				toggledZoom: () => {}
			}
		};

		let options = Object.assign({}, defaultOptions, this.options, _options);

		if(!options.scrollEl) {
			options.scrollEl = options.el;
		}

		return options;
	}

	changeOption(options) {
		this.options = this._computeOptions(options);
		this.cb = this.options.callback;
	}

	_attachEvent() {
		document.addEventListener('keyup', (e) => {
			if (this.options.preventEvent) {
				return;
			}
			if (KEY_CODE.SHIFT === e.keyCode) {
				this.stopMask();
			}

			if (KEY_CODE.CTRL === e.keyCode) {
				this.stopZoom();
			}
		});

		document.addEventListener('keydown', (e) => {
			if (this.options.preventEvent) {
				return;
			}
			if (KEY_CODE.SHIFT === e.keyCode) {
				this.startMask();
			}

			if (e.shiftKey && KEY_CODE.CTRL === e.keyCode) {
				this.startZoom(e);
			}
		});

		document.addEventListener('mousemove', (e) => {
			if (this.options.preventEvent) {
				return;
			}
			this.onMove(e)
		});
		document.addEventListener('resize', this.onResize.bind(this));
	}

	startMask() {
		if (this.$mask) {
			return;
		}
		this.cb.toggledMask({on: true});
		this.$mask = document.createElement('div');
		this.$mask.classList.add('spotlight-mask');
		document.body.appendChild(this.$mask);
		this.setMask();
	}

	setMask(x = this.x, y = this.y) {
		this.cb.movedSpotLight({x, y});
		let imageCss = util.getMaskBackground(x, y, this.options);
		this.$mask.setAttribute('style', `
			background-image: ${imageCss}; 
			background-image: -webkit-${imageCss};
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			cursor: none;
			z-index: ${this.options.zIndex}`);
	}

	stopMask() {
		this.cb.toggledMask({on: false});
		this.$mask && this.$mask.remove();
		this.stopZoom();
		this.$mask = null;
	}

	startZoom() {
		if (this.$zoom) {
			return;
		}
		this.cb.toggledZoom({on: true});
		this.$zoom = document.createElement('div');
		this.$zoom.classList.add(...this.options.zoomElClassName);
		this.$zoomContent = this.options.el.cloneNode(true);
		this.$zoomContent.classList.add('spotlight-zoom-content');
		this.$zoom.setAttribute('style', `
			width: ${this.options.radius * 2}px; 
			height: ${this.options.radius * 2}px;
			overflow: hidden;
			border-radius: 50%;
			display: block;
			position: fixed;`
		);
		this.$zoomContent.setAttribute('style', `
			width: ${this.options.el.offsetWidth}px; 
			height: ${this.options.el.offsetHeight}px;
			box-sizing: border-box;
			background-color: ${this.options.zoomedColor};
			position: fixed;
			transform-origin: 0 0;
			transform: scale(${this.options.zoomScale});
			overflow: ${this.options.el.style.overflow};
			z-index: ${this.options.zIndex + 1}`
		);

		this.options.el.parentNode.parentNode.appendChild(this.$zoom);
		this.$zoom.appendChild(this.$zoomContent);
		this.elRect = this.options.el.getBoundingClientRect();
		this.$zoomContent.scrollTop = parseInt(this.options.scrollEl.scrollTop, 10);
		this.$zoomContent.scrollLeft = parseInt(this.options.scrollEl.scrollLeft, 10);
		this.setZoom();
	}

	setZoom(x = this.x, y = this.y) {
		this.cb.movedSpotLight({
			x,
			y,
			radius: this.options.radius,
			scale: this.options.scale,
			position: {top: this.elRect.top, left: this.elRect.left}
		});
		let scale = this.options.zoomScale;
		this.$zoom.style.top = `${y - this.options.radius }px`;
		this.$zoom.style.left = `${x - this.options.radius }px`;
		this.$zoomContent.style.top = `${-(scale - 1) * (y - this.elRect.top)}px`;
		this.$zoomContent.style.left = `${-(scale - 1) * (x - this.elRect.left)}px`;
		this.$zoomContent.style.marginTop = this.elRect.top + 'px';
		this.$zoomContent.style.marginLeft = this.elRect.left + 'px';
	}

	stopZoom() {
		this.cb.toggledZoom({on: false});
		this.$zoom && this.$zoom.remove();
		this.$zoom = null;
	}

	onResize() {
		this.elRect = this.options.el.getBoundingClientRect();
	}

	onMove(e) {
		this.x = e.clientX;
		this.y = e.clientY;

		if (!this.$mask) {
			return;
		}

		if (!e.shiftKey) {
			this.stopMask();
		}

		if (!e[this.options.zoomKey] && this.$zoom) {
			this.stopZoom();
		}

		this.setMask();

		if (e[this.options.zoomKey]) {
			this.setZoom();
		}
	}
}

export {SpotLight}
