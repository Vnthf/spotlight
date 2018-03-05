import {KEY_CODE} from "./config";
import util from './util'
import "./polyfill"
import "./spotlight.css"

class SpotLight {
	constructor(option) {
		this.option = this._computeOption(option);
		this._attachEvent();
	}

	_computeOption(option) {
		let el = option.el || document.body.firstElementChild;

		let defaultOption = {
			dimmedColor: `rgba(0,0,0,0.4)`,
			zoomedColor: window.getComputedStyle(el, null)['backgroundColor'],
			zoomKey: util.isMac()? 'metaKey': 'ctrlKey',
			el: el,
			radius: option.el.getBoundingClientRect().height / 4
		};

		return Object.assign({}, option, defaultOption);
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
		let imageCss = util.getMaskBackground(this.x, this.y, this.option);
		this.$mask.setAttribute('style', `background-image: ${imageCss}; background-image: -webkit-${imageCss};`)
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
		this.$zoomScroller = this.option.el.cloneNode(true);
		this.$zoomScroller.classList.add('spotlight-zoom-scroller');
		this.$zoom.setAttribute('style', `
			width: ${this.option.radius}px; 
			height: ${this.option.radius}px;`
		);
		this.$zoomScroller.style.backgroundColor = this.option.zoomedColor;
		console.log(this.option)
		this.$zoomScroller.style.position = 'fixed';
		document.body.appendChild(this.$zoom);
		this.$zoom.appendChild(this.$zoomScroller);
		// $zoom.find('.remark-slide-content').scrollTop($document.find('.remark-slide-container.remark-visible .remark-slide-content').scrollTop());
		this.setZoom();
	}

	setZoom() {
		this.$zoom.style.top = `${this.y - this.option.radius / 2}px`;
		this.$zoom.style.left = `${this.x - this.option.radius / 2}px`;
		console.log(this.option.el.scrollTop)
		this.$zoomScroller.scrollTop = parseInt(this.option.el.scrollTop, 10);
		this.$zoomScroller.scrollLeft = parseInt(this.option.el.scrollLeft, 10);
		this.$zoomScroller.style.marginTop = -this.y + this.option.radius / 2 + 'px';
		this.$zoomScroller.style.marginLeft = -this.x + this.option.radius/ 2 + 'px';
	}

	stopZoom() {
		// this.$zoom && this.$zoom.remove();
		// this.$zoom = null;
	}

	onMove(e) {
		// console.log(e)
		this.x = e.pageX;
		this.y = e.pageY;

		if(!this.$mask) {
			return;
		}

		if (!e.shiftKey) {
			this.stopMask();
		}

		console.log(this.option.zoomKey)
		if (!e[this.option.zoomKey] && this.$zoom) {
			this.stopZoom();
		}

		this.setMask();

		if (e[this.option.zoomKey]) {
			this.setZoom();
		}
	}
}

export {SpotLight}
