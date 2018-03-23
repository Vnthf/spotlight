import {KEY_CODE} from "./config";
import util from './util'
import "./polyfill"

class SpotLight {
	constructor(options) {
		this.changeOption(options);
		this._attachEvent();
	}

	_computeOptions(options) {
		let el = options.el || document.body.firstElementChild;

		let defaultOptions = {
			dimmedColor: `rgba(0,0,0,0.4)`,
			zoomedColor: '#fff' || window.getComputedStyle(el, null)['backgroundColor'], //임시 코드
			zoomKey: util.isMac()? 'metaKey': 'ctrlKey',
			zoomScale: 2,
			zIndex: 1000,
			el: el,
			radius: options.el.getBoundingClientRect().width / 4,
		};

		return Object.assign({}, options, defaultOptions);
	}

	changeOption(options) {
		this.options = this._computeOptions(options);
	}

	_attachEvent() {
		document.addEventListener('keyup', (e) => {
			if (KEY_CODE.SHIFT === e.keyCode) {
				this.stopMask();
			}

			if (KEY_CODE.CTRL === e.keyCode) {
				this.stopZoom();
			}
		});

		document.addEventListener('keydown', (e) => {
			if (KEY_CODE.SHIFT === e.keyCode) {
				this.startMask();
			}

			if (e.shiftKey && KEY_CODE.CTRL === e.keyCode) {
				this.startZoom(e);
			}
		});

		document.addEventListener('mousemove', this.onMove.bind(this));
	}

	remove() {

	}

	startMask() {
		if(this.$mask) {
			return;
		}
		this.$mask = document.createElement('div');
		this.$mask.classList.add('spotlight-mask');
		document.body.appendChild(this.$mask);
		this.setMask();
	}

	setMask() {
		let imageCss = util.getMaskBackground(this.x, this.y, this.options);
		this.$mask.setAttribute('style', `
			background-image: ${imageCss}; 
			background-image: -webkit-${imageCss};
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			cursor: none;
			z-index: ${this.options.zIndex}`)
	}

	stopMask() {
		this.$mask && this.$mask.remove();
		this.stopZoom();
		this.$mask = null;
	}
	startZoom() {
		if(this.$zoom) {
			return;
		}
		this.$zoom = document.createElement('div');
		this.$zoom.classList.add('spotlight-zoom');
		this.$zoomContent = this.options.el.cloneNode(true);
		this.$zoomContent.classList.add('spotlight-zoom-content');
		this.$zoom.setAttribute('style', `
			width: ${this.options.radius * 2}px; 
			height: ${this.options.radius * 2}px;
			overflow: hidden;
			border-radius: 50%;
			position: fixed;`
		);
		this.$zoomContent.setAttribute('style', `
			width: ${this.options.el.offsetWidth}px; 
			height: ${this.options.el.offsetHeight}px;
			background-color: ${this.options.zoomedColor};
			position: fixed;
			transform: scale(${this.options.zoomScale});
			overflow: ${this.options.el.style.overflow};
			z-index: ${this.options.zIndex + 1}`
		);
		document.body.appendChild(this.$zoom);
		this.$zoom.appendChild(this.$zoomContent);
		this.elRect = this.options.el.getBoundingClientRect();
		this.setZoom();
	}

	setZoom() {
		let scale = this.options.zoomScale;
		this.$zoom.style.top = `${this.y - this.options.radius }px`;
		this.$zoom.style.left = `${this.x - this.options.radius }px`;
		this.$zoomContent.style.top = `${this.y - this.options.radius}px`;
		this.$zoomContent.style.left = `${this.x - this.options.radius}px`;
		this.$zoomContent.scrollTop = parseInt(this.options.el.scrollTop, 10);
		this.$zoomContent.scrollLeft = parseInt(this.options.el.scrollLeft, 10);
		this.$zoomContent.style.marginTop = - scale * (this.y - this.elRect.top) + this.options.el.offsetHeight * (scale -1)/2 + this.options.radius + 'px';
		this.$zoomContent.style.marginLeft = - scale * (this.x - this.elRect.left) + this.options.el.offsetWidth * (scale -1)/2 + this.options.radius + 'px';
	}

	stopZoom() {
		this.$zoom && this.$zoom.remove();
		this.$zoom = null;
	}

	onMove(e) {
		this.x = e.clientX;
		this.y = e.clientY;

		if(!this.$mask) {
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
