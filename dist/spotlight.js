(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
	arr.forEach(function (item) {
		if (item.hasOwnProperty('remove')) {
			return;
		}
		Object.defineProperty(item, 'remove', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function remove() {
				if (this.parentNode !== null) this.parentNode.removeChild(this);
			}
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/util.js
var isMac = function isMac() {
	return navigator && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
};

var getMaskBackground = function getMaskBackground(x, y, _ref) {
	var radius = _ref.radius,
	    dimmedColor = _ref.dimmedColor;

	return 'radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent ' + radius + 'px, ' + dimmedColor + ' 0)';
};

/* harmony default export */ var util = ({
	isMac: isMac,
	getMaskBackground: getMaskBackground
});
// CONCATENATED MODULE: ./src/config.js


var KEY_CODE = {
	ESC: 27,
	SHIFT: 16,
	CTRL: isMac() ? 91 : 17
};
// EXTERNAL MODULE: ./src/polyfill.js
var polyfill = __webpack_require__(0);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotLight", function() { return src_SpotLight; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var src_SpotLight = function () {
	function SpotLight(options) {
		_classCallCheck(this, SpotLight);

		this.changeOption(options);
		this._attachEvent();
	}

	_createClass(SpotLight, [{
		key: "_computeOptions",
		value: function _computeOptions(_options) {
			var el = _options.el || document.body.firstElementChild;

			var defaultOptions = {
				dimmedColor: "rgba(0,0,0,0.4)",
				zoomedColor: '#fff' || window.getComputedStyle(el, null)['backgroundColor'], //임시 코드
				zoomKey: util.isMac() ? 'metaKey' : 'ctrlKey',
				zoomScale: 2,
				zoomElClassName: ['spotlight-zoom'],
				zIndex: 1000,
				el: el,
				radius: el.getBoundingClientRect().width / 6,
				preventEvent: false,
				callback: {
					movedSpotLight: function movedSpotLight() {},
					toggledMask: function toggledMask() {},
					toggledZoom: function toggledZoom() {}
				}
			};

			var options = Object.assign({}, defaultOptions, this.options, _options);

			if (!_options.scrollEl) {
				options.scrollEl = options.el;
			}

			return options;
		}
	}, {
		key: "changeOption",
		value: function changeOption(options) {
			this.options = this._computeOptions(options);
			this.cb = this.options.callback;
		}
	}, {
		key: "_attachEvent",
		value: function _attachEvent() {
			var _this = this;

			document.addEventListener('keyup', function (e) {
				if (_this.options.preventEvent) {
					return;
				}
				if (KEY_CODE.SHIFT === e.keyCode) {
					_this.stopMask();
				}

				if (KEY_CODE.CTRL === e.keyCode) {
					// this.stopZoom();
				}
			});

			document.addEventListener('keydown', function (e) {
				if (_this.options.preventEvent) {
					return;
				}
				if (KEY_CODE.SHIFT === e.keyCode) {
					_this.startMask();
				}

				if (e.shiftKey && KEY_CODE.CTRL === e.keyCode) {
					_this.startZoom(e);
				}
			});

			document.addEventListener('mousemove', function (e) {
				if (_this.options.preventEvent) {
					return;
				}
				_this.onMove(e);
			});
			document.addEventListener('resize', this.onResize.bind(this));
		}
	}, {
		key: "startMask",
		value: function startMask() {
			if (this.$mask) {
				return;
			}
			this.cb.toggledMask({ on: true });
			this.$mask = document.createElement('div');
			this.$mask.classList.add('spotlight-mask');
			document.body.appendChild(this.$mask);
			this.setMask();
		}
	}, {
		key: "setMask",
		value: function setMask() {
			var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;
			var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;

			this.cb.movedSpotLight({ x: x, y: y });
			var imageCss = util.getMaskBackground(x, y, this.options);
			this.$mask.setAttribute('style', "\n\t\t\tbackground-image: " + imageCss + "; \n\t\t\tbackground-image: -webkit-" + imageCss + ";\n\t\t\tposition: fixed;\n\t\t\tleft: 0;\n\t\t\ttop: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tcursor: none;\n\t\t\tz-index: " + this.options.zIndex);
		}
	}, {
		key: "stopMask",
		value: function stopMask() {
			this.cb.toggledMask({ on: false });
			this.$mask && this.$mask.remove();
			// this.stopZoom();
			this.$mask = null;
		}
	}, {
		key: "startZoom",
		value: function startZoom() {
			var _$zoom$classList;

			if (this.$zoom) {
				return;
			}
			this.cb.toggledZoom({ on: true });
			this.$zoom = document.createElement('div');
			(_$zoom$classList = this.$zoom.classList).add.apply(_$zoom$classList, _toConsumableArray(this.options.zoomElClassName));
			this.$zoomContent = this.options.el.cloneNode(true);
			this.$zoomContent.classList.add('spotlight-zoom-content');
			this.$zoom.setAttribute('style', "\n\t\t\twidth: " + this.options.radius * 2 + "px; \n\t\t\theight: " + this.options.radius * 2 + "px;\n\t\t\toverflow: hidden;\n\t\t\tborder-radius: 50%;\n\t\t\tdisplay: block;\n\t\t\tposition: fixed;");
			this.$zoomContent.setAttribute('style', "\n\t\t\twidth: " + this.options.el.offsetWidth + "px; \n\t\t\theight: " + this.options.el.offsetHeight + "px;\n\t\t\tbox-sizing: border-box;\n\t\t\tbackground-color: " + this.options.zoomedColor + ";\n\t\t\tposition: absolute;\n\t\t\ttransform-origin: 0 0;\n\t\t\ttransform: scale(" + this.options.zoomScale + ");\n\t\t\toverflow: " + this.options.el.style.overflow + ";\n\t\t\tz-index: " + (this.options.zIndex + 1));

			this.options.el.parentNode.parentNode.appendChild(this.$zoom);
			this.$zoom.appendChild(this.$zoomContent);
			this.elRect = this.options.el.getBoundingClientRect();
			this.$zoomContent.scrollTop = parseInt(this.options.scrollEl.scrollTop, 10);
			this.$zoomContent.scrollLeft = parseInt(this.options.scrollEl.scrollLeft, 10);
			this.setZoom();
		}
	}, {
		key: "setZoom",
		value: function setZoom() {
			var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;
			var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;

			this.cb.movedSpotLight({
				x: x,
				y: y,
				radius: this.options.radius,
				scale: this.options.scale,
				position: { top: this.elRect.top, left: this.elRect.left }
			});
			var scale = this.options.zoomScale;
			this.$zoom.style.top = y - this.options.radius + "px";
			this.$zoom.style.left = x - this.options.radius + "px";
			this.$zoomContent.style.top = -scale * (y - this.elRect.top) + this.options.radius + "px";
			this.$zoomContent.style.left = -scale * (x - this.elRect.left) + this.options.radius + "px";
			// this.$zoomContent.style.top = `${-(scale - 1) * (y - this.elRect.top)}px`;
			// this.$zoomContent.style.left = `${-(scale - 1) * (x - this.elRect.left - this.options.radius)}px`;
			// this.$zoomContent.style.marginTop = this.elRect.top + 'px';
			// this.$zoomContent.style.marginLeft = this.elRect.left + 'px';
		}
	}, {
		key: "stopZoom",
		value: function stopZoom() {
			this.cb.toggledZoom({ on: false });
			this.$zoom && this.$zoom.remove();
			this.$zoom = null;
		}
	}, {
		key: "onResize",
		value: function onResize() {
			this.elRect = this.options.el.getBoundingClientRect();
		}
	}, {
		key: "onMove",
		value: function onMove(e) {
			this.x = e.clientX;
			this.y = e.clientY;

			if (!this.$mask) {
				return;
			}

			if (!e.shiftKey) {
				this.stopMask();
			}

			if (!e[this.options.zoomKey] && this.$zoom) {
				// this.stopZoom();
			}

			this.setMask();

			if (e[this.options.zoomKey]) {
				this.setZoom();
			}
		}
	}]);

	return SpotLight;
}();



/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYXJyIiwiZm9yRWFjaCIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJFbGVtZW50IiwicHJvdG90eXBlIiwiQ2hhcmFjdGVyRGF0YSIsIkRvY3VtZW50VHlwZSIsImlzTWFjIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImluZGV4T2YiLCJnZXRNYXNrQmFja2dyb3VuZCIsIngiLCJ5IiwicmFkaXVzIiwiZGltbWVkQ29sb3IiLCJLRVlfQ09ERSIsIkVTQyIsIlNISUZUIiwiQ1RSTCIsIm9wdGlvbnMiLCJjaGFuZ2VPcHRpb24iLCJfYXR0YWNoRXZlbnQiLCJfb3B0aW9ucyIsImVsIiwiZG9jdW1lbnQiLCJib2R5IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJkZWZhdWx0T3B0aW9ucyIsInpvb21lZENvbG9yIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInpvb21LZXkiLCJ1dGlsIiwiem9vbVNjYWxlIiwiem9vbUVsQ2xhc3NOYW1lIiwiekluZGV4IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJwcmV2ZW50RXZlbnQiLCJjYWxsYmFjayIsIm1vdmVkU3BvdExpZ2h0IiwidG9nZ2xlZE1hc2siLCJ0b2dnbGVkWm9vbSIsImFzc2lnbiIsInNjcm9sbEVsIiwiX2NvbXB1dGVPcHRpb25zIiwiY2IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJzdG9wTWFzayIsInN0YXJ0TWFzayIsInNoaWZ0S2V5Iiwic3RhcnRab29tIiwib25Nb3ZlIiwib25SZXNpemUiLCJiaW5kIiwiJG1hc2siLCJvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldE1hc2siLCJpbWFnZUNzcyIsInNldEF0dHJpYnV0ZSIsIiR6b29tIiwiJHpvb21Db250ZW50IiwiY2xvbmVOb2RlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm92ZXJmbG93IiwiZWxSZWN0Iiwic2Nyb2xsVG9wIiwicGFyc2VJbnQiLCJzY3JvbGxMZWZ0Iiwic2V0Wm9vbSIsInNjYWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiY2xpZW50WCIsImNsaWVudFkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7O0FDbEZBO0FBQ0EsQ0FBQyxVQUFVQSxHQUFWLEVBQWU7QUFDZkEsS0FBSUMsT0FBSixDQUFZLFVBQVVDLElBQVYsRUFBZ0I7QUFDM0IsTUFBSUEsS0FBS0MsY0FBTCxDQUFvQixRQUFwQixDQUFKLEVBQW1DO0FBQ2xDO0FBQ0E7QUFDREMsU0FBT0MsY0FBUCxDQUFzQkgsSUFBdEIsRUFBNEIsUUFBNUIsRUFBc0M7QUFDckNJLGlCQUFjLElBRHVCO0FBRXJDQyxlQUFZLElBRnlCO0FBR3JDQyxhQUFVLElBSDJCO0FBSXJDQyxVQUFPLFNBQVNDLE1BQVQsR0FBa0I7QUFDeEIsUUFBSSxLQUFLQyxVQUFMLEtBQW9CLElBQXhCLEVBQ0MsS0FBS0EsVUFBTCxDQUFnQkMsV0FBaEIsQ0FBNEIsSUFBNUI7QUFDRDtBQVBvQyxHQUF0QztBQVNBLEVBYkQ7QUFjQSxDQWZELEVBZUcsQ0FBQ0MsUUFBUUMsU0FBVCxFQUFvQkMsY0FBY0QsU0FBbEMsRUFBNkNFLGFBQWFGLFNBQTFELENBZkgsRTs7Ozs7Ozs7OztBQ0RPLElBQU1HLFFBQVEsU0FBUkEsS0FBUSxHQUFNO0FBQzFCLFFBQU9DLGFBQWFBLFVBQVVDLFFBQVYsQ0FBbUJDLFdBQW5CLEdBQWlDQyxPQUFqQyxDQUF5QyxLQUF6QyxLQUFtRCxDQUF2RTtBQUNBLENBRk07O0FBSUEsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLFFBQWlDO0FBQUEsS0FBekJDLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLEtBQWpCQyxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQ2pFLFFBQU8sK0JBQStCSCxDQUEvQixHQUFtQyxLQUFuQyxHQUEyQ0MsQ0FBM0MsR0FBK0Msa0JBQS9DLEdBQW9FQyxNQUFwRSxHQUE2RSxNQUE3RSxHQUFxRkMsV0FBckYsR0FBbUcsS0FBMUc7QUFDQSxDQUZNOztBQUlRO0FBQ2RULGFBRGM7QUFFZEs7QUFGYyxDQUFmLEU7O0FDUkE7O0FBRU8sSUFBTUssV0FBVztBQUN2QkMsTUFBSyxFQURrQjtBQUV2QkMsUUFBTyxFQUZnQjtBQUd2QkMsT0FBTSxLQUFLYixLQUFLLEVBQVYsR0FBYztBQUhHLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDQTs7SUFFTSxhO0FBQ0wsb0JBQVljLE9BQVosRUFBcUI7QUFBQTs7QUFDcEIsT0FBS0MsWUFBTCxDQUFrQkQsT0FBbEI7QUFDQSxPQUFLRSxZQUFMO0FBQ0E7Ozs7a0NBRWVDLFEsRUFBVTtBQUN6QixPQUFJQyxLQUFLRCxTQUFTQyxFQUFULElBQWVDLFNBQVNDLElBQVQsQ0FBY0MsaUJBQXRDOztBQUVBLE9BQUlDLGlCQUFpQjtBQUNwQmIsa0NBRG9CO0FBRXBCYyxpQkFBYSxVQUFVQyxPQUFPQyxnQkFBUCxDQUF3QlAsRUFBeEIsRUFBNEIsSUFBNUIsRUFBa0MsaUJBQWxDLENBRkgsRUFFeUQ7QUFDN0VRLGFBQVMsSUFBSUMsQ0FBQzNCLEtBQUwsS0FBZSxTQUFmLEdBQTJCLFNBSGhCO0FBSXBCNEIsZUFBVyxDQUpTO0FBS3BCQyxxQkFBaUIsQ0FBQyxnQkFBRCxDQUxHO0FBTXBCQyxZQUFRLElBTlk7QUFPcEJaLFFBQUlBLEVBUGdCO0FBUXBCVixZQUFRVSxHQUFHYSxxQkFBSCxHQUEyQkMsS0FBM0IsR0FBbUMsQ0FSdkI7QUFTcEJDLGtCQUFjLEtBVE07QUFVcEJDLGNBQVU7QUFDVEMscUJBQWdCLDBCQUFNLENBQUUsQ0FEZjtBQUVUQyxrQkFBYSx1QkFBTSxDQUFFLENBRlo7QUFHVEMsa0JBQWEsdUJBQU0sQ0FBRTtBQUhaO0FBVlUsSUFBckI7O0FBaUJBLE9BQUl2QixVQUFVM0IsT0FBT21ELE1BQVAsQ0FBYyxFQUFkLEVBQWtCaEIsY0FBbEIsRUFBa0MsS0FBS1IsT0FBdkMsRUFBZ0RHLFFBQWhELENBQWQ7O0FBRUEsT0FBRyxDQUFDQSxTQUFTc0IsUUFBYixFQUF1QjtBQUN0QnpCLFlBQVF5QixRQUFSLEdBQW1CekIsUUFBUUksRUFBM0I7QUFDQTs7QUFFRCxVQUFPSixPQUFQO0FBQ0E7OzsrQkFFWUEsTyxFQUFTO0FBQ3JCLFFBQUtBLE9BQUwsR0FBZSxLQUFLMEIsZUFBTCxDQUFxQjFCLE9BQXJCLENBQWY7QUFDQSxRQUFLMkIsRUFBTCxHQUFVLEtBQUszQixPQUFMLENBQWFvQixRQUF2QjtBQUNBOzs7aUNBRWM7QUFBQTs7QUFDZGYsWUFBU3VCLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztBQUN6QyxRQUFJLE1BQUs3QixPQUFMLENBQWFtQixZQUFqQixFQUErQjtBQUM5QjtBQUNBO0FBQ0QsUUFBSSxRQUFRdkIsQ0FBQ0UsS0FBVCxLQUFtQitCLEVBQUVDLE9BQXpCLEVBQWtDO0FBQ2pDLFdBQUtDLFFBQUw7QUFDQTs7QUFFRCxRQUFJLFFBQVFuQyxDQUFDRyxJQUFULEtBQWtCOEIsRUFBRUMsT0FBeEIsRUFBaUM7QUFDaEM7QUFDQTtBQUNELElBWEQ7O0FBYUF6QixZQUFTdUIsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzNDLFFBQUksTUFBSzdCLE9BQUwsQ0FBYW1CLFlBQWpCLEVBQStCO0FBQzlCO0FBQ0E7QUFDRCxRQUFJLFFBQVF2QixDQUFDRSxLQUFULEtBQW1CK0IsRUFBRUMsT0FBekIsRUFBa0M7QUFDakMsV0FBS0UsU0FBTDtBQUNBOztBQUVELFFBQUlILEVBQUVJLFFBQUYsSUFBYyxRQUFRckMsQ0FBQ0csSUFBVCxLQUFrQjhCLEVBQUVDLE9BQXRDLEVBQStDO0FBQzlDLFdBQUtJLFNBQUwsQ0FBZUwsQ0FBZjtBQUNBO0FBQ0QsSUFYRDs7QUFhQXhCLFlBQVN1QixnQkFBVCxDQUEwQixXQUExQixFQUF1QyxVQUFDQyxDQUFELEVBQU87QUFDN0MsUUFBSSxNQUFLN0IsT0FBTCxDQUFhbUIsWUFBakIsRUFBK0I7QUFDOUI7QUFDQTtBQUNELFVBQUtnQixNQUFMLENBQVlOLENBQVo7QUFDQSxJQUxEO0FBTUF4QixZQUFTdUIsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsS0FBS1EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQXBDO0FBQ0E7Ozs4QkFFVztBQUNYLE9BQUksS0FBS0MsS0FBVCxFQUFnQjtBQUNmO0FBQ0E7QUFDRCxRQUFLWCxFQUFMLENBQVFMLFdBQVIsQ0FBb0IsRUFBQ2lCLElBQUksSUFBTCxFQUFwQjtBQUNBLFFBQUtELEtBQUwsR0FBYWpDLFNBQVNtQyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQSxRQUFLRixLQUFMLENBQVdHLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLGdCQUF6QjtBQUNBckMsWUFBU0MsSUFBVCxDQUFjcUMsV0FBZCxDQUEwQixLQUFLTCxLQUEvQjtBQUNBLFFBQUtNLE9BQUw7QUFDQTs7OzRCQUUrQjtBQUFBLE9BQXhCcEQsQ0FBd0IsdUVBQXBCLEtBQUtBLENBQWU7QUFBQSxPQUFaQyxDQUFZLHVFQUFSLEtBQUtBLENBQUc7O0FBQy9CLFFBQUtrQyxFQUFMLENBQVFOLGNBQVIsQ0FBdUIsRUFBQzdCLElBQUQsRUFBSUMsSUFBSixFQUF2QjtBQUNBLE9BQUlvRCxXQUFXLElBQUloQyxDQUFDdEIsaUJBQUwsQ0FBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QixLQUFLTyxPQUFsQyxDQUFmO0FBQ0EsUUFBS3NDLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QixPQUF4QixpQ0FDcUJELFFBRHJCLDRDQUU2QkEsUUFGN0IsK0lBU1ksS0FBSzdDLE9BQUwsQ0FBYWdCLE1BVHpCO0FBVUE7Ozs2QkFFVTtBQUNWLFFBQUtXLEVBQUwsQ0FBUUwsV0FBUixDQUFvQixFQUFDaUIsSUFBSSxLQUFMLEVBQXBCO0FBQ0EsUUFBS0QsS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBVzNELE1BQVgsRUFBZDtBQUNBO0FBQ0EsUUFBSzJELEtBQUwsR0FBYSxJQUFiO0FBQ0E7Ozs4QkFFVztBQUFBOztBQUNYLE9BQUksS0FBS1MsS0FBVCxFQUFnQjtBQUNmO0FBQ0E7QUFDRCxRQUFLcEIsRUFBTCxDQUFRSixXQUFSLENBQW9CLEVBQUNnQixJQUFJLElBQUwsRUFBcEI7QUFDQSxRQUFLUSxLQUFMLEdBQWExQyxTQUFTbUMsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsNEJBQUtPLEtBQUwsQ0FBV04sU0FBWCxFQUFxQkMsR0FBckIsNENBQTRCLEtBQUsxQyxPQUFMLENBQWFlLGVBQXpDO0FBQ0EsUUFBS2lDLFlBQUwsR0FBb0IsS0FBS2hELE9BQUwsQ0FBYUksRUFBYixDQUFnQjZDLFNBQWhCLENBQTBCLElBQTFCLENBQXBCO0FBQ0EsUUFBS0QsWUFBTCxDQUFrQlAsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLHdCQUFoQztBQUNBLFFBQUtLLEtBQUwsQ0FBV0QsWUFBWCxDQUF3QixPQUF4QixzQkFDVSxLQUFLOUMsT0FBTCxDQUFhTixNQUFiLEdBQXNCLENBRGhDLDRCQUVXLEtBQUtNLE9BQUwsQ0FBYU4sTUFBYixHQUFzQixDQUZqQztBQVFBLFFBQUtzRCxZQUFMLENBQWtCRixZQUFsQixDQUErQixPQUEvQixzQkFDVSxLQUFLOUMsT0FBTCxDQUFhSSxFQUFiLENBQWdCOEMsV0FEMUIsNEJBRVcsS0FBS2xELE9BQUwsQ0FBYUksRUFBYixDQUFnQitDLFlBRjNCLG9FQUlxQixLQUFLbkQsT0FBTCxDQUFhUyxXQUpsQywyRkFPb0IsS0FBS1QsT0FBTCxDQUFhYyxTQVBqQyw0QkFRYSxLQUFLZCxPQUFMLENBQWFJLEVBQWIsQ0FBZ0JnRCxLQUFoQixDQUFzQkMsUUFSbkMsMkJBU1ksS0FBS3JELE9BQUwsQ0FBYWdCLE1BQWIsR0FBc0IsQ0FUbEM7O0FBWUEsUUFBS2hCLE9BQUwsQ0FBYUksRUFBYixDQUFnQnhCLFVBQWhCLENBQTJCQSxVQUEzQixDQUFzQytELFdBQXRDLENBQWtELEtBQUtJLEtBQXZEO0FBQ0EsUUFBS0EsS0FBTCxDQUFXSixXQUFYLENBQXVCLEtBQUtLLFlBQTVCO0FBQ0EsUUFBS00sTUFBTCxHQUFjLEtBQUt0RCxPQUFMLENBQWFJLEVBQWIsQ0FBZ0JhLHFCQUFoQixFQUFkO0FBQ0EsUUFBSytCLFlBQUwsQ0FBa0JPLFNBQWxCLEdBQThCQyxTQUFTLEtBQUt4RCxPQUFMLENBQWF5QixRQUFiLENBQXNCOEIsU0FBL0IsRUFBMEMsRUFBMUMsQ0FBOUI7QUFDQSxRQUFLUCxZQUFMLENBQWtCUyxVQUFsQixHQUErQkQsU0FBUyxLQUFLeEQsT0FBTCxDQUFheUIsUUFBYixDQUFzQmdDLFVBQS9CLEVBQTJDLEVBQTNDLENBQS9CO0FBQ0EsUUFBS0MsT0FBTDtBQUNBOzs7NEJBRStCO0FBQUEsT0FBeEJsRSxDQUF3Qix1RUFBcEIsS0FBS0EsQ0FBZTtBQUFBLE9BQVpDLENBQVksdUVBQVIsS0FBS0EsQ0FBRzs7QUFDL0IsUUFBS2tDLEVBQUwsQ0FBUU4sY0FBUixDQUF1QjtBQUN0QjdCLFFBRHNCO0FBRXRCQyxRQUZzQjtBQUd0QkMsWUFBUSxLQUFLTSxPQUFMLENBQWFOLE1BSEM7QUFJdEJpRSxXQUFPLEtBQUszRCxPQUFMLENBQWEyRCxLQUpFO0FBS3RCQyxjQUFVLEVBQUNDLEtBQUssS0FBS1AsTUFBTCxDQUFZTyxHQUFsQixFQUF1QkMsTUFBTSxLQUFLUixNQUFMLENBQVlRLElBQXpDO0FBTFksSUFBdkI7QUFPQSxPQUFJSCxRQUFRLEtBQUszRCxPQUFMLENBQWFjLFNBQXpCO0FBQ0EsUUFBS2lDLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQlMsR0FBakIsR0FBMEJwRSxJQUFJLEtBQUtPLE9BQUwsQ0FBYU4sTUFBM0M7QUFDQSxRQUFLcUQsS0FBTCxDQUFXSyxLQUFYLENBQWlCVSxJQUFqQixHQUEyQnRFLElBQUksS0FBS1EsT0FBTCxDQUFhTixNQUE1QztBQUNBLFFBQUtzRCxZQUFMLENBQWtCSSxLQUFsQixDQUF3QlMsR0FBeEIsR0FBaUMsQ0FBRUYsS0FBRixJQUFZbEUsSUFBSSxLQUFLNkQsTUFBTCxDQUFZTyxHQUE1QixJQUFtQyxLQUFLN0QsT0FBTCxDQUFhTixNQUFqRjtBQUNBLFFBQUtzRCxZQUFMLENBQWtCSSxLQUFsQixDQUF3QlUsSUFBeEIsR0FBa0MsQ0FBRUgsS0FBRixJQUFZbkUsSUFBSSxLQUFLOEQsTUFBTCxDQUFZUSxJQUE1QixJQUFvQyxLQUFLOUQsT0FBTCxDQUFhTixNQUFuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs2QkFFVTtBQUNWLFFBQUtpQyxFQUFMLENBQVFKLFdBQVIsQ0FBb0IsRUFBQ2dCLElBQUksS0FBTCxFQUFwQjtBQUNBLFFBQUtRLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdwRSxNQUFYLEVBQWQ7QUFDQSxRQUFLb0UsS0FBTCxHQUFhLElBQWI7QUFDQTs7OzZCQUVVO0FBQ1YsUUFBS08sTUFBTCxHQUFjLEtBQUt0RCxPQUFMLENBQWFJLEVBQWIsQ0FBZ0JhLHFCQUFoQixFQUFkO0FBQ0E7Ozt5QkFFTVksQyxFQUFHO0FBQ1QsUUFBS3JDLENBQUwsR0FBU3FDLEVBQUVrQyxPQUFYO0FBQ0EsUUFBS3RFLENBQUwsR0FBU29DLEVBQUVtQyxPQUFYOztBQUVBLE9BQUksQ0FBQyxLQUFLMUIsS0FBVixFQUFpQjtBQUNoQjtBQUNBOztBQUVELE9BQUksQ0FBQ1QsRUFBRUksUUFBUCxFQUFpQjtBQUNoQixTQUFLRixRQUFMO0FBQ0E7O0FBRUQsT0FBSSxDQUFDRixFQUFFLEtBQUs3QixPQUFMLENBQWFZLE9BQWYsQ0FBRCxJQUE0QixLQUFLbUMsS0FBckMsRUFBNEM7QUFDM0M7QUFDQTs7QUFFRCxRQUFLSCxPQUFMOztBQUVBLE9BQUlmLEVBQUUsS0FBSzdCLE9BQUwsQ0FBYVksT0FBZixDQUFKLEVBQTZCO0FBQzVCLFNBQUs4QyxPQUFMO0FBQ0E7QUFDRCIsImZpbGUiOiJzcG90bGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0XCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIi8vIGZyb206aHR0cHM6Ly9naXRodWIuY29tL2pzZXJ6L2pzX3BpZWNlL2Jsb2IvbWFzdGVyL0RPTS9DaGlsZE5vZGUvcmVtb3ZlKCkvcmVtb3ZlKCkubWRcbihmdW5jdGlvbiAoYXJyKSB7XG5cdGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0aWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ3JlbW92ZScpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAncmVtb3ZlJywge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFyZW50Tm9kZSAhPT0gbnVsbClcblx0XHRcdFx0XHR0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufSkoW0VsZW1lbnQucHJvdG90eXBlLCBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pOyIsImV4cG9ydCBjb25zdCBpc01hYyA9ICgpID0+IHtcblx0cmV0dXJuIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQUMnKSA+PSAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1hc2tCYWNrZ3JvdW5kID0gKHgsIHksIHtyYWRpdXMsIGRpbW1lZENvbG9yfSkgPT4ge1xuXHRyZXR1cm4gJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHRyYW5zcGFyZW50ICcgKyByYWRpdXMgKyAncHgsICcrIGRpbW1lZENvbG9yICsgJyAwKSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aXNNYWMsXG5cdGdldE1hc2tCYWNrZ3JvdW5kXG59IiwiaW1wb3J0IHtpc01hY30gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3QgS0VZX0NPREUgPSB7XG5cdEVTQzogMjcsXG5cdFNISUZUOiAxNixcblx0Q1RSTDogaXNNYWMoKSA/IDkxOiAxN1xufTtcbiIsImltcG9ydCB7S0VZX0NPREV9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IFwiLi9wb2x5ZmlsbFwiXG5cbmNsYXNzIFNwb3RMaWdodCB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHR0aGlzLmNoYW5nZU9wdGlvbihvcHRpb25zKTtcblx0XHR0aGlzLl9hdHRhY2hFdmVudCgpO1xuXHR9XG5cblx0X2NvbXB1dGVPcHRpb25zKF9vcHRpb25zKSB7XG5cdFx0bGV0IGVsID0gX29wdGlvbnMuZWwgfHwgZG9jdW1lbnQuYm9keS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdGxldCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRcdGRpbW1lZENvbG9yOiBgcmdiYSgwLDAsMCwwLjQpYCxcblx0XHRcdHpvb21lZENvbG9yOiAnI2ZmZicgfHwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydiYWNrZ3JvdW5kQ29sb3InXSwgLy/snoTsi5wg7L2U65OcXG5cdFx0XHR6b29tS2V5OiB1dGlsLmlzTWFjKCkgPyAnbWV0YUtleScgOiAnY3RybEtleScsXG5cdFx0XHR6b29tU2NhbGU6IDIsXG5cdFx0XHR6b29tRWxDbGFzc05hbWU6IFsnc3BvdGxpZ2h0LXpvb20nXSxcblx0XHRcdHpJbmRleDogMTAwMCxcblx0XHRcdGVsOiBlbCxcblx0XHRcdHJhZGl1czogZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyA2LFxuXHRcdFx0cHJldmVudEV2ZW50OiBmYWxzZSxcblx0XHRcdGNhbGxiYWNrOiB7XG5cdFx0XHRcdG1vdmVkU3BvdExpZ2h0OiAoKSA9PiB7fSxcblx0XHRcdFx0dG9nZ2xlZE1hc2s6ICgpID0+IHt9LFxuXHRcdFx0XHR0b2dnbGVkWm9vbTogKCkgPT4ge31cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0bGV0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zLCBfb3B0aW9ucyk7XG5cblx0XHRpZighX29wdGlvbnMuc2Nyb2xsRWwpIHtcblx0XHRcdG9wdGlvbnMuc2Nyb2xsRWwgPSBvcHRpb25zLmVsO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cblx0Y2hhbmdlT3B0aW9uKG9wdGlvbnMpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSB0aGlzLl9jb21wdXRlT3B0aW9ucyhvcHRpb25zKTtcblx0XHR0aGlzLmNiID0gdGhpcy5vcHRpb25zLmNhbGxiYWNrO1xuXHR9XG5cblx0X2F0dGFjaEV2ZW50KCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMucHJldmVudEV2ZW50KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHQvLyB0aGlzLnN0b3Bab29tKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMucHJldmVudEV2ZW50KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRNYXNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlLnNoaWZ0S2V5ICYmIEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Wm9vbShlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnByZXZlbnRFdmVudCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm9uTW92ZShlKVxuXHRcdH0pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRzdGFydE1hc2soKSB7XG5cdFx0aWYgKHRoaXMuJG1hc2spIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jYi50b2dnbGVkTWFzayh7b246IHRydWV9KTtcblx0XHR0aGlzLiRtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy4kbWFzay5jbGFzc0xpc3QuYWRkKCdzcG90bGlnaHQtbWFzaycpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy4kbWFzayk7XG5cdFx0dGhpcy5zZXRNYXNrKCk7XG5cdH1cblxuXHRzZXRNYXNrKHggPSB0aGlzLngsIHkgPSB0aGlzLnkpIHtcblx0XHR0aGlzLmNiLm1vdmVkU3BvdExpZ2h0KHt4LCB5fSk7XG5cdFx0bGV0IGltYWdlQ3NzID0gdXRpbC5nZXRNYXNrQmFja2dyb3VuZCh4LCB5LCB0aGlzLm9wdGlvbnMpO1xuXHRcdHRoaXMuJG1hc2suc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6ICR7aW1hZ2VDc3N9OyBcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtJHtpbWFnZUNzc307XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRjdXJzb3I6IG5vbmU7XG5cdFx0XHR6LWluZGV4OiAke3RoaXMub3B0aW9ucy56SW5kZXh9YCk7XG5cdH1cblxuXHRzdG9wTWFzaygpIHtcblx0XHR0aGlzLmNiLnRvZ2dsZWRNYXNrKHtvbjogZmFsc2V9KTtcblx0XHR0aGlzLiRtYXNrICYmIHRoaXMuJG1hc2sucmVtb3ZlKCk7XG5cdFx0Ly8gdGhpcy5zdG9wWm9vbSgpO1xuXHRcdHRoaXMuJG1hc2sgPSBudWxsO1xuXHR9XG5cblx0c3RhcnRab29tKCkge1xuXHRcdGlmICh0aGlzLiR6b29tKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2IudG9nZ2xlZFpvb20oe29uOiB0cnVlfSk7XG5cdFx0dGhpcy4kem9vbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuJHpvb20uY2xhc3NMaXN0LmFkZCguLi50aGlzLm9wdGlvbnMuem9vbUVsQ2xhc3NOYW1lKTtcblx0XHR0aGlzLiR6b29tQ29udGVudCA9IHRoaXMub3B0aW9ucy5lbC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc3BvdGxpZ2h0LXpvb20tY29udGVudCcpO1xuXHRcdHRoaXMuJHpvb20uc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdHdpZHRoOiAke3RoaXMub3B0aW9ucy5yYWRpdXMgKiAyfXB4OyBcblx0XHRcdGhlaWdodDogJHt0aGlzLm9wdGlvbnMucmFkaXVzICogMn1weDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtgXG5cdFx0KTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuXHRcdFx0d2lkdGg6ICR7dGhpcy5vcHRpb25zLmVsLm9mZnNldFdpZHRofXB4OyBcblx0XHRcdGhlaWdodDogJHt0aGlzLm9wdGlvbnMuZWwub2Zmc2V0SGVpZ2h0fXB4O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5vcHRpb25zLnpvb21lZENvbG9yfTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoJHt0aGlzLm9wdGlvbnMuem9vbVNjYWxlfSk7XG5cdFx0XHRvdmVyZmxvdzogJHt0aGlzLm9wdGlvbnMuZWwuc3R5bGUub3ZlcmZsb3d9O1xuXHRcdFx0ei1pbmRleDogJHt0aGlzLm9wdGlvbnMuekluZGV4ICsgMX1gXG5cdFx0KTtcblxuXHRcdHRoaXMub3B0aW9ucy5lbC5wYXJlbnROb2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy4kem9vbSk7XG5cdFx0dGhpcy4kem9vbS5hcHBlbmRDaGlsZCh0aGlzLiR6b29tQ29udGVudCk7XG5cdFx0dGhpcy5lbFJlY3QgPSB0aGlzLm9wdGlvbnMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc2Nyb2xsVG9wID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLnNjcm9sbEVsLnNjcm9sbFRvcCwgMTApO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnNjcm9sbExlZnQgPSBwYXJzZUludCh0aGlzLm9wdGlvbnMuc2Nyb2xsRWwuc2Nyb2xsTGVmdCwgMTApO1xuXHRcdHRoaXMuc2V0Wm9vbSgpO1xuXHR9XG5cblx0c2V0Wm9vbSh4ID0gdGhpcy54LCB5ID0gdGhpcy55KSB7XG5cdFx0dGhpcy5jYi5tb3ZlZFNwb3RMaWdodCh7XG5cdFx0XHR4LFxuXHRcdFx0eSxcblx0XHRcdHJhZGl1czogdGhpcy5vcHRpb25zLnJhZGl1cyxcblx0XHRcdHNjYWxlOiB0aGlzLm9wdGlvbnMuc2NhbGUsXG5cdFx0XHRwb3NpdGlvbjoge3RvcDogdGhpcy5lbFJlY3QudG9wLCBsZWZ0OiB0aGlzLmVsUmVjdC5sZWZ0fVxuXHRcdH0pO1xuXHRcdGxldCBzY2FsZSA9IHRoaXMub3B0aW9ucy56b29tU2NhbGU7XG5cdFx0dGhpcy4kem9vbS5zdHlsZS50b3AgPSBgJHt5IC0gdGhpcy5vcHRpb25zLnJhZGl1cyB9cHhgO1xuXHRcdHRoaXMuJHpvb20uc3R5bGUubGVmdCA9IGAke3ggLSB0aGlzLm9wdGlvbnMucmFkaXVzIH1weGA7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc3R5bGUudG9wID0gYCR7LShzY2FsZSkgKiAoeSAtIHRoaXMuZWxSZWN0LnRvcCkgKyB0aGlzLm9wdGlvbnMucmFkaXVzfXB4YDtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS5sZWZ0ID0gYCR7LShzY2FsZSkgKiAoeCAtIHRoaXMuZWxSZWN0LmxlZnQpICsgdGhpcy5vcHRpb25zLnJhZGl1c31weGA7XG5cdFx0Ly8gdGhpcy4kem9vbUNvbnRlbnQuc3R5bGUudG9wID0gYCR7LShzY2FsZSAtIDEpICogKHkgLSB0aGlzLmVsUmVjdC50b3ApfXB4YDtcblx0XHQvLyB0aGlzLiR6b29tQ29udGVudC5zdHlsZS5sZWZ0ID0gYCR7LShzY2FsZSAtIDEpICogKHggLSB0aGlzLmVsUmVjdC5sZWZ0IC0gdGhpcy5vcHRpb25zLnJhZGl1cyl9cHhgO1xuXHRcdC8vIHRoaXMuJHpvb21Db250ZW50LnN0eWxlLm1hcmdpblRvcCA9IHRoaXMuZWxSZWN0LnRvcCArICdweCc7XG5cdFx0Ly8gdGhpcy4kem9vbUNvbnRlbnQuc3R5bGUubWFyZ2luTGVmdCA9IHRoaXMuZWxSZWN0LmxlZnQgKyAncHgnO1xuXHR9XG5cblx0c3RvcFpvb20oKSB7XG5cdFx0dGhpcy5jYi50b2dnbGVkWm9vbSh7b246IGZhbHNlfSk7XG5cdFx0dGhpcy4kem9vbSAmJiB0aGlzLiR6b29tLnJlbW92ZSgpO1xuXHRcdHRoaXMuJHpvb20gPSBudWxsO1xuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5lbFJlY3QgPSB0aGlzLm9wdGlvbnMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdH1cblxuXHRvbk1vdmUoZSkge1xuXHRcdHRoaXMueCA9IGUuY2xpZW50WDtcblx0XHR0aGlzLnkgPSBlLmNsaWVudFk7XG5cblx0XHRpZiAoIXRoaXMuJG1hc2spIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIWUuc2hpZnRLZXkpIHtcblx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHR9XG5cblx0XHRpZiAoIWVbdGhpcy5vcHRpb25zLnpvb21LZXldICYmIHRoaXMuJHpvb20pIHtcblx0XHRcdC8vIHRoaXMuc3RvcFpvb20oKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldE1hc2soKTtcblxuXHRcdGlmIChlW3RoaXMub3B0aW9ucy56b29tS2V5XSkge1xuXHRcdFx0dGhpcy5zZXRab29tKCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCB7U3BvdExpZ2h0fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==