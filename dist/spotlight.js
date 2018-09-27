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

			if (!options.scrollEl) {
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
					_this.stopZoom();
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
			this.stopZoom();
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
			this.$zoomContent.setAttribute('style', "\n\t\t\twidth: " + this.options.el.offsetWidth + "px; \n\t\t\theight: " + this.options.el.offsetHeight + "px;\n\t\t\tbox-sizing: border-box;\n\t\t\tbackground-color: " + this.options.zoomedColor + ";\n\t\t\tposition: fixed;\n\t\t\ttransform-origin: 0 0;\n\t\t\ttransform: scale(" + this.options.zoomScale + ");\n\t\t\toverflow: " + this.options.el.style.overflow + ";\n\t\t\tz-index: " + (this.options.zIndex + 1));

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
			this.$zoomContent.style.top = -(scale - 1) * (y - this.elRect.top) + "px";
			this.$zoomContent.style.left = -(scale - 1) * (x - this.elRect.left) + "px";
			this.$zoomContent.style.marginTop = this.elRect.top + 'px';
			this.$zoomContent.style.marginLeft = this.elRect.left + 'px';
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
				this.stopZoom();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYXJyIiwiZm9yRWFjaCIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJFbGVtZW50IiwicHJvdG90eXBlIiwiQ2hhcmFjdGVyRGF0YSIsIkRvY3VtZW50VHlwZSIsImlzTWFjIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImluZGV4T2YiLCJnZXRNYXNrQmFja2dyb3VuZCIsIngiLCJ5IiwicmFkaXVzIiwiZGltbWVkQ29sb3IiLCJLRVlfQ09ERSIsIkVTQyIsIlNISUZUIiwiQ1RSTCIsIm9wdGlvbnMiLCJjaGFuZ2VPcHRpb24iLCJfYXR0YWNoRXZlbnQiLCJfb3B0aW9ucyIsImVsIiwiZG9jdW1lbnQiLCJib2R5IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJkZWZhdWx0T3B0aW9ucyIsInpvb21lZENvbG9yIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInpvb21LZXkiLCJ1dGlsIiwiem9vbVNjYWxlIiwiem9vbUVsQ2xhc3NOYW1lIiwiekluZGV4IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJwcmV2ZW50RXZlbnQiLCJjYWxsYmFjayIsIm1vdmVkU3BvdExpZ2h0IiwidG9nZ2xlZE1hc2siLCJ0b2dnbGVkWm9vbSIsImFzc2lnbiIsInNjcm9sbEVsIiwiX2NvbXB1dGVPcHRpb25zIiwiY2IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJzdG9wTWFzayIsInN0b3Bab29tIiwic3RhcnRNYXNrIiwic2hpZnRLZXkiLCJzdGFydFpvb20iLCJvbk1vdmUiLCJvblJlc2l6ZSIsImJpbmQiLCIkbWFzayIsIm9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwic2V0TWFzayIsImltYWdlQ3NzIiwic2V0QXR0cmlidXRlIiwiJHpvb20iLCIkem9vbUNvbnRlbnQiLCJjbG9uZU5vZGUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwib3ZlcmZsb3ciLCJlbFJlY3QiLCJzY3JvbGxUb3AiLCJwYXJzZUludCIsInNjcm9sbExlZnQiLCJzZXRab29tIiwic2NhbGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiY2xpZW50WCIsImNsaWVudFkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7O0FDbEZBO0FBQ0EsQ0FBQyxVQUFVQSxHQUFWLEVBQWU7QUFDZkEsS0FBSUMsT0FBSixDQUFZLFVBQVVDLElBQVYsRUFBZ0I7QUFDM0IsTUFBSUEsS0FBS0MsY0FBTCxDQUFvQixRQUFwQixDQUFKLEVBQW1DO0FBQ2xDO0FBQ0E7QUFDREMsU0FBT0MsY0FBUCxDQUFzQkgsSUFBdEIsRUFBNEIsUUFBNUIsRUFBc0M7QUFDckNJLGlCQUFjLElBRHVCO0FBRXJDQyxlQUFZLElBRnlCO0FBR3JDQyxhQUFVLElBSDJCO0FBSXJDQyxVQUFPLFNBQVNDLE1BQVQsR0FBa0I7QUFDeEIsUUFBSSxLQUFLQyxVQUFMLEtBQW9CLElBQXhCLEVBQ0MsS0FBS0EsVUFBTCxDQUFnQkMsV0FBaEIsQ0FBNEIsSUFBNUI7QUFDRDtBQVBvQyxHQUF0QztBQVNBLEVBYkQ7QUFjQSxDQWZELEVBZUcsQ0FBQ0MsUUFBUUMsU0FBVCxFQUFvQkMsY0FBY0QsU0FBbEMsRUFBNkNFLGFBQWFGLFNBQTFELENBZkgsRTs7Ozs7Ozs7OztBQ0RPLElBQU1HLFFBQVEsU0FBUkEsS0FBUSxHQUFNO0FBQzFCLFFBQU9DLGFBQWFBLFVBQVVDLFFBQVYsQ0FBbUJDLFdBQW5CLEdBQWlDQyxPQUFqQyxDQUF5QyxLQUF6QyxLQUFtRCxDQUF2RTtBQUNBLENBRk07O0FBSUEsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLFFBQWlDO0FBQUEsS0FBekJDLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLEtBQWpCQyxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQ2pFLFFBQU8sK0JBQStCSCxDQUEvQixHQUFtQyxLQUFuQyxHQUEyQ0MsQ0FBM0MsR0FBK0Msa0JBQS9DLEdBQW9FQyxNQUFwRSxHQUE2RSxNQUE3RSxHQUFxRkMsV0FBckYsR0FBbUcsS0FBMUc7QUFDQSxDQUZNOztBQUlRO0FBQ2RULGFBRGM7QUFFZEs7QUFGYyxDQUFmLEU7O0FDUkE7O0FBRU8sSUFBTUssV0FBVztBQUN2QkMsTUFBSyxFQURrQjtBQUV2QkMsUUFBTyxFQUZnQjtBQUd2QkMsT0FBTSxLQUFLYixLQUFLLEVBQVYsR0FBYztBQUhHLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDQTs7SUFFTSxhO0FBQ0wsb0JBQVljLE9BQVosRUFBcUI7QUFBQTs7QUFDcEIsT0FBS0MsWUFBTCxDQUFrQkQsT0FBbEI7QUFDQSxPQUFLRSxZQUFMO0FBQ0E7Ozs7a0NBRWVDLFEsRUFBVTtBQUN6QixPQUFJQyxLQUFLRCxTQUFTQyxFQUFULElBQWVDLFNBQVNDLElBQVQsQ0FBY0MsaUJBQXRDOztBQUVBLE9BQUlDLGlCQUFpQjtBQUNwQmIsa0NBRG9CO0FBRXBCYyxpQkFBYSxVQUFVQyxPQUFPQyxnQkFBUCxDQUF3QlAsRUFBeEIsRUFBNEIsSUFBNUIsRUFBa0MsaUJBQWxDLENBRkgsRUFFeUQ7QUFDN0VRLGFBQVMsSUFBSUMsQ0FBQzNCLEtBQUwsS0FBZSxTQUFmLEdBQTJCLFNBSGhCO0FBSXBCNEIsZUFBVyxDQUpTO0FBS3BCQyxxQkFBaUIsQ0FBQyxnQkFBRCxDQUxHO0FBTXBCQyxZQUFRLElBTlk7QUFPcEJaLFFBQUlBLEVBUGdCO0FBUXBCVixZQUFRVSxHQUFHYSxxQkFBSCxHQUEyQkMsS0FBM0IsR0FBbUMsQ0FSdkI7QUFTcEJDLGtCQUFjLEtBVE07QUFVcEJDLGNBQVU7QUFDVEMscUJBQWdCLDBCQUFNLENBQUUsQ0FEZjtBQUVUQyxrQkFBYSx1QkFBTSxDQUFFLENBRlo7QUFHVEMsa0JBQWEsdUJBQU0sQ0FBRTtBQUhaO0FBVlUsSUFBckI7O0FBaUJBLE9BQUl2QixVQUFVM0IsT0FBT21ELE1BQVAsQ0FBYyxFQUFkLEVBQWtCaEIsY0FBbEIsRUFBa0MsS0FBS1IsT0FBdkMsRUFBZ0RHLFFBQWhELENBQWQ7O0FBRUEsT0FBRyxDQUFDSCxRQUFReUIsUUFBWixFQUFzQjtBQUNyQnpCLFlBQVF5QixRQUFSLEdBQW1CekIsUUFBUUksRUFBM0I7QUFDQTs7QUFFRCxVQUFPSixPQUFQO0FBQ0E7OzsrQkFFWUEsTyxFQUFTO0FBQ3JCLFFBQUtBLE9BQUwsR0FBZSxLQUFLMEIsZUFBTCxDQUFxQjFCLE9BQXJCLENBQWY7QUFDQSxRQUFLMkIsRUFBTCxHQUFVLEtBQUszQixPQUFMLENBQWFvQixRQUF2QjtBQUNBOzs7aUNBRWM7QUFBQTs7QUFDZGYsWUFBU3VCLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztBQUN6QyxRQUFJLE1BQUs3QixPQUFMLENBQWFtQixZQUFqQixFQUErQjtBQUM5QjtBQUNBO0FBQ0QsUUFBSSxRQUFRdkIsQ0FBQ0UsS0FBVCxLQUFtQitCLEVBQUVDLE9BQXpCLEVBQWtDO0FBQ2pDLFdBQUtDLFFBQUw7QUFDQTs7QUFFRCxRQUFJLFFBQVFuQyxDQUFDRyxJQUFULEtBQWtCOEIsRUFBRUMsT0FBeEIsRUFBaUM7QUFDaEMsV0FBS0UsUUFBTDtBQUNBO0FBQ0QsSUFYRDs7QUFhQTNCLFlBQVN1QixnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDQyxDQUFELEVBQU87QUFDM0MsUUFBSSxNQUFLN0IsT0FBTCxDQUFhbUIsWUFBakIsRUFBK0I7QUFDOUI7QUFDQTtBQUNELFFBQUksUUFBUXZCLENBQUNFLEtBQVQsS0FBbUIrQixFQUFFQyxPQUF6QixFQUFrQztBQUNqQyxXQUFLRyxTQUFMO0FBQ0E7O0FBRUQsUUFBSUosRUFBRUssUUFBRixJQUFjLFFBQVF0QyxDQUFDRyxJQUFULEtBQWtCOEIsRUFBRUMsT0FBdEMsRUFBK0M7QUFDOUMsV0FBS0ssU0FBTCxDQUFlTixDQUFmO0FBQ0E7QUFDRCxJQVhEOztBQWFBeEIsWUFBU3VCLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLFVBQUNDLENBQUQsRUFBTztBQUM3QyxRQUFJLE1BQUs3QixPQUFMLENBQWFtQixZQUFqQixFQUErQjtBQUM5QjtBQUNBO0FBQ0QsVUFBS2lCLE1BQUwsQ0FBWVAsQ0FBWjtBQUNBLElBTEQ7QUFNQXhCLFlBQVN1QixnQkFBVCxDQUEwQixRQUExQixFQUFvQyxLQUFLUyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBcEM7QUFDQTs7OzhCQUVXO0FBQ1gsT0FBSSxLQUFLQyxLQUFULEVBQWdCO0FBQ2Y7QUFDQTtBQUNELFFBQUtaLEVBQUwsQ0FBUUwsV0FBUixDQUFvQixFQUFDa0IsSUFBSSxJQUFMLEVBQXBCO0FBQ0EsUUFBS0QsS0FBTCxHQUFhbEMsU0FBU29DLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLFFBQUtGLEtBQUwsQ0FBV0csU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsZ0JBQXpCO0FBQ0F0QyxZQUFTQyxJQUFULENBQWNzQyxXQUFkLENBQTBCLEtBQUtMLEtBQS9CO0FBQ0EsUUFBS00sT0FBTDtBQUNBOzs7NEJBRStCO0FBQUEsT0FBeEJyRCxDQUF3Qix1RUFBcEIsS0FBS0EsQ0FBZTtBQUFBLE9BQVpDLENBQVksdUVBQVIsS0FBS0EsQ0FBRzs7QUFDL0IsUUFBS2tDLEVBQUwsQ0FBUU4sY0FBUixDQUF1QixFQUFDN0IsSUFBRCxFQUFJQyxJQUFKLEVBQXZCO0FBQ0EsT0FBSXFELFdBQVcsSUFBSWpDLENBQUN0QixpQkFBTCxDQUF1QkMsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCLEtBQUtPLE9BQWxDLENBQWY7QUFDQSxRQUFLdUMsS0FBTCxDQUFXUSxZQUFYLENBQXdCLE9BQXhCLGlDQUNxQkQsUUFEckIsNENBRTZCQSxRQUY3QiwrSUFTWSxLQUFLOUMsT0FBTCxDQUFhZ0IsTUFUekI7QUFVQTs7OzZCQUVVO0FBQ1YsUUFBS1csRUFBTCxDQUFRTCxXQUFSLENBQW9CLEVBQUNrQixJQUFJLEtBQUwsRUFBcEI7QUFDQSxRQUFLRCxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXNUQsTUFBWCxFQUFkO0FBQ0EsUUFBS3FELFFBQUw7QUFDQSxRQUFLTyxLQUFMLEdBQWEsSUFBYjtBQUNBOzs7OEJBRVc7QUFBQTs7QUFDWCxPQUFJLEtBQUtTLEtBQVQsRUFBZ0I7QUFDZjtBQUNBO0FBQ0QsUUFBS3JCLEVBQUwsQ0FBUUosV0FBUixDQUFvQixFQUFDaUIsSUFBSSxJQUFMLEVBQXBCO0FBQ0EsUUFBS1EsS0FBTCxHQUFhM0MsU0FBU29DLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLDRCQUFLTyxLQUFMLENBQVdOLFNBQVgsRUFBcUJDLEdBQXJCLDRDQUE0QixLQUFLM0MsT0FBTCxDQUFhZSxlQUF6QztBQUNBLFFBQUtrQyxZQUFMLEdBQW9CLEtBQUtqRCxPQUFMLENBQWFJLEVBQWIsQ0FBZ0I4QyxTQUFoQixDQUEwQixJQUExQixDQUFwQjtBQUNBLFFBQUtELFlBQUwsQ0FBa0JQLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyx3QkFBaEM7QUFDQSxRQUFLSyxLQUFMLENBQVdELFlBQVgsQ0FBd0IsT0FBeEIsc0JBQ1UsS0FBSy9DLE9BQUwsQ0FBYU4sTUFBYixHQUFzQixDQURoQyw0QkFFVyxLQUFLTSxPQUFMLENBQWFOLE1BQWIsR0FBc0IsQ0FGakM7QUFRQSxRQUFLdUQsWUFBTCxDQUFrQkYsWUFBbEIsQ0FBK0IsT0FBL0Isc0JBQ1UsS0FBSy9DLE9BQUwsQ0FBYUksRUFBYixDQUFnQitDLFdBRDFCLDRCQUVXLEtBQUtuRCxPQUFMLENBQWFJLEVBQWIsQ0FBZ0JnRCxZQUYzQixvRUFJcUIsS0FBS3BELE9BQUwsQ0FBYVMsV0FKbEMsd0ZBT29CLEtBQUtULE9BQUwsQ0FBYWMsU0FQakMsNEJBUWEsS0FBS2QsT0FBTCxDQUFhSSxFQUFiLENBQWdCaUQsS0FBaEIsQ0FBc0JDLFFBUm5DLDJCQVNZLEtBQUt0RCxPQUFMLENBQWFnQixNQUFiLEdBQXNCLENBVGxDOztBQVlBLFFBQUtoQixPQUFMLENBQWFJLEVBQWIsQ0FBZ0J4QixVQUFoQixDQUEyQkEsVUFBM0IsQ0FBc0NnRSxXQUF0QyxDQUFrRCxLQUFLSSxLQUF2RDtBQUNBLFFBQUtBLEtBQUwsQ0FBV0osV0FBWCxDQUF1QixLQUFLSyxZQUE1QjtBQUNBLFFBQUtNLE1BQUwsR0FBYyxLQUFLdkQsT0FBTCxDQUFhSSxFQUFiLENBQWdCYSxxQkFBaEIsRUFBZDtBQUNBLFFBQUtnQyxZQUFMLENBQWtCTyxTQUFsQixHQUE4QkMsU0FBUyxLQUFLekQsT0FBTCxDQUFheUIsUUFBYixDQUFzQitCLFNBQS9CLEVBQTBDLEVBQTFDLENBQTlCO0FBQ0EsUUFBS1AsWUFBTCxDQUFrQlMsVUFBbEIsR0FBK0JELFNBQVMsS0FBS3pELE9BQUwsQ0FBYXlCLFFBQWIsQ0FBc0JpQyxVQUEvQixFQUEyQyxFQUEzQyxDQUEvQjtBQUNBLFFBQUtDLE9BQUw7QUFDQTs7OzRCQUUrQjtBQUFBLE9BQXhCbkUsQ0FBd0IsdUVBQXBCLEtBQUtBLENBQWU7QUFBQSxPQUFaQyxDQUFZLHVFQUFSLEtBQUtBLENBQUc7O0FBQy9CLFFBQUtrQyxFQUFMLENBQVFOLGNBQVIsQ0FBdUI7QUFDdEI3QixRQURzQjtBQUV0QkMsUUFGc0I7QUFHdEJDLFlBQVEsS0FBS00sT0FBTCxDQUFhTixNQUhDO0FBSXRCa0UsV0FBTyxLQUFLNUQsT0FBTCxDQUFhNEQsS0FKRTtBQUt0QkMsY0FBVSxFQUFDQyxLQUFLLEtBQUtQLE1BQUwsQ0FBWU8sR0FBbEIsRUFBdUJDLE1BQU0sS0FBS1IsTUFBTCxDQUFZUSxJQUF6QztBQUxZLElBQXZCO0FBT0EsT0FBSUgsUUFBUSxLQUFLNUQsT0FBTCxDQUFhYyxTQUF6QjtBQUNBLFFBQUtrQyxLQUFMLENBQVdLLEtBQVgsQ0FBaUJTLEdBQWpCLEdBQTBCckUsSUFBSSxLQUFLTyxPQUFMLENBQWFOLE1BQTNDO0FBQ0EsUUFBS3NELEtBQUwsQ0FBV0ssS0FBWCxDQUFpQlUsSUFBakIsR0FBMkJ2RSxJQUFJLEtBQUtRLE9BQUwsQ0FBYU4sTUFBNUM7QUFDQSxRQUFLdUQsWUFBTCxDQUFrQkksS0FBbEIsQ0FBd0JTLEdBQXhCLEdBQWlDLEVBQUVGLFFBQVEsQ0FBVixLQUFnQm5FLElBQUksS0FBSzhELE1BQUwsQ0FBWU8sR0FBaEMsQ0FBakM7QUFDQSxRQUFLYixZQUFMLENBQWtCSSxLQUFsQixDQUF3QlUsSUFBeEIsR0FBa0MsRUFBRUgsUUFBUSxDQUFWLEtBQWdCcEUsSUFBSSxLQUFLK0QsTUFBTCxDQUFZUSxJQUFoQyxDQUFsQztBQUNBLFFBQUtkLFlBQUwsQ0FBa0JJLEtBQWxCLENBQXdCVyxTQUF4QixHQUFvQyxLQUFLVCxNQUFMLENBQVlPLEdBQVosR0FBa0IsSUFBdEQ7QUFDQSxRQUFLYixZQUFMLENBQWtCSSxLQUFsQixDQUF3QlksVUFBeEIsR0FBcUMsS0FBS1YsTUFBTCxDQUFZUSxJQUFaLEdBQW1CLElBQXhEO0FBQ0E7Ozs2QkFFVTtBQUNWLFFBQUtwQyxFQUFMLENBQVFKLFdBQVIsQ0FBb0IsRUFBQ2lCLElBQUksS0FBTCxFQUFwQjtBQUNBLFFBQUtRLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdyRSxNQUFYLEVBQWQ7QUFDQSxRQUFLcUUsS0FBTCxHQUFhLElBQWI7QUFDQTs7OzZCQUVVO0FBQ1YsUUFBS08sTUFBTCxHQUFjLEtBQUt2RCxPQUFMLENBQWFJLEVBQWIsQ0FBZ0JhLHFCQUFoQixFQUFkO0FBQ0E7Ozt5QkFFTVksQyxFQUFHO0FBQ1QsUUFBS3JDLENBQUwsR0FBU3FDLEVBQUVxQyxPQUFYO0FBQ0EsUUFBS3pFLENBQUwsR0FBU29DLEVBQUVzQyxPQUFYOztBQUVBLE9BQUksQ0FBQyxLQUFLNUIsS0FBVixFQUFpQjtBQUNoQjtBQUNBOztBQUVELE9BQUksQ0FBQ1YsRUFBRUssUUFBUCxFQUFpQjtBQUNoQixTQUFLSCxRQUFMO0FBQ0E7O0FBRUQsT0FBSSxDQUFDRixFQUFFLEtBQUs3QixPQUFMLENBQWFZLE9BQWYsQ0FBRCxJQUE0QixLQUFLb0MsS0FBckMsRUFBNEM7QUFDM0MsU0FBS2hCLFFBQUw7QUFDQTs7QUFFRCxRQUFLYSxPQUFMOztBQUVBLE9BQUloQixFQUFFLEtBQUs3QixPQUFMLENBQWFZLE9BQWYsQ0FBSixFQUE2QjtBQUM1QixTQUFLK0MsT0FBTDtBQUNBO0FBQ0QiLCJmaWxlIjoic3BvdGxpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvLyBmcm9tOmh0dHBzOi8vZ2l0aHViLmNvbS9qc2Vyei9qc19waWVjZS9ibG9iL21hc3Rlci9ET00vQ2hpbGROb2RlL3JlbW92ZSgpL3JlbW92ZSgpLm1kXG4oZnVuY3Rpb24gKGFycikge1xuXHRhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdGlmIChpdGVtLmhhc093blByb3BlcnR5KCdyZW1vdmUnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXRlbSwgJ3JlbW92ZScsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhcmVudE5vZGUgIT09IG51bGwpXG5cdFx0XHRcdFx0dGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn0pKFtFbGVtZW50LnByb3RvdHlwZSwgQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsIERvY3VtZW50VHlwZS5wcm90b3R5cGVdKTsiLCJleHBvcnQgY29uc3QgaXNNYWMgPSAoKSA9PiB7XG5cdHJldHVybiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUFDJykgPj0gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNYXNrQmFja2dyb3VuZCA9ICh4LCB5LCB7cmFkaXVzLCBkaW1tZWRDb2xvcn0pID0+IHtcblx0cmV0dXJuICdyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCB0cmFuc3BhcmVudCAnICsgcmFkaXVzICsgJ3B4LCAnKyBkaW1tZWRDb2xvciArICcgMCknO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGlzTWFjLFxuXHRnZXRNYXNrQmFja2dyb3VuZFxufSIsImltcG9ydCB7aXNNYWN9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNvbnN0IEtFWV9DT0RFID0ge1xuXHRFU0M6IDI3LFxuXHRTSElGVDogMTYsXG5cdENUUkw6IGlzTWFjKCkgPyA5MTogMTdcbn07XG4iLCJpbXBvcnQge0tFWV9DT0RFfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBcIi4vcG9seWZpbGxcIlxuXG5jbGFzcyBTcG90TGlnaHQge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0dGhpcy5jaGFuZ2VPcHRpb24ob3B0aW9ucyk7XG5cdFx0dGhpcy5fYXR0YWNoRXZlbnQoKTtcblx0fVxuXG5cdF9jb21wdXRlT3B0aW9ucyhfb3B0aW9ucykge1xuXHRcdGxldCBlbCA9IF9vcHRpb25zLmVsIHx8IGRvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cblx0XHRsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0XHRkaW1tZWRDb2xvcjogYHJnYmEoMCwwLDAsMC40KWAsXG5cdFx0XHR6b29tZWRDb2xvcjogJyNmZmYnIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVsnYmFja2dyb3VuZENvbG9yJ10sIC8v7J6E7IucIOy9lOuTnFxuXHRcdFx0em9vbUtleTogdXRpbC5pc01hYygpID8gJ21ldGFLZXknIDogJ2N0cmxLZXknLFxuXHRcdFx0em9vbVNjYWxlOiAyLFxuXHRcdFx0em9vbUVsQ2xhc3NOYW1lOiBbJ3Nwb3RsaWdodC16b29tJ10sXG5cdFx0XHR6SW5kZXg6IDEwMDAsXG5cdFx0XHRlbDogZWwsXG5cdFx0XHRyYWRpdXM6IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gNixcblx0XHRcdHByZXZlbnRFdmVudDogZmFsc2UsXG5cdFx0XHRjYWxsYmFjazoge1xuXHRcdFx0XHRtb3ZlZFNwb3RMaWdodDogKCkgPT4ge30sXG5cdFx0XHRcdHRvZ2dsZWRNYXNrOiAoKSA9PiB7fSxcblx0XHRcdFx0dG9nZ2xlZFpvb206ICgpID0+IHt9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGxldCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucywgX29wdGlvbnMpO1xuXG5cdFx0aWYoIW9wdGlvbnMuc2Nyb2xsRWwpIHtcblx0XHRcdG9wdGlvbnMuc2Nyb2xsRWwgPSBvcHRpb25zLmVsO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cblx0Y2hhbmdlT3B0aW9uKG9wdGlvbnMpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSB0aGlzLl9jb21wdXRlT3B0aW9ucyhvcHRpb25zKTtcblx0XHR0aGlzLmNiID0gdGhpcy5vcHRpb25zLmNhbGxiYWNrO1xuXHR9XG5cblx0X2F0dGFjaEV2ZW50KCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMucHJldmVudEV2ZW50KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0b3Bab29tKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMucHJldmVudEV2ZW50KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRNYXNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlLnNoaWZ0S2V5ICYmIEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Wm9vbShlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnByZXZlbnRFdmVudCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm9uTW92ZShlKVxuXHRcdH0pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRzdGFydE1hc2soKSB7XG5cdFx0aWYgKHRoaXMuJG1hc2spIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jYi50b2dnbGVkTWFzayh7b246IHRydWV9KTtcblx0XHR0aGlzLiRtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy4kbWFzay5jbGFzc0xpc3QuYWRkKCdzcG90bGlnaHQtbWFzaycpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy4kbWFzayk7XG5cdFx0dGhpcy5zZXRNYXNrKCk7XG5cdH1cblxuXHRzZXRNYXNrKHggPSB0aGlzLngsIHkgPSB0aGlzLnkpIHtcblx0XHR0aGlzLmNiLm1vdmVkU3BvdExpZ2h0KHt4LCB5fSk7XG5cdFx0bGV0IGltYWdlQ3NzID0gdXRpbC5nZXRNYXNrQmFja2dyb3VuZCh4LCB5LCB0aGlzLm9wdGlvbnMpO1xuXHRcdHRoaXMuJG1hc2suc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6ICR7aW1hZ2VDc3N9OyBcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtJHtpbWFnZUNzc307XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRjdXJzb3I6IG5vbmU7XG5cdFx0XHR6LWluZGV4OiAke3RoaXMub3B0aW9ucy56SW5kZXh9YCk7XG5cdH1cblxuXHRzdG9wTWFzaygpIHtcblx0XHR0aGlzLmNiLnRvZ2dsZWRNYXNrKHtvbjogZmFsc2V9KTtcblx0XHR0aGlzLiRtYXNrICYmIHRoaXMuJG1hc2sucmVtb3ZlKCk7XG5cdFx0dGhpcy5zdG9wWm9vbSgpO1xuXHRcdHRoaXMuJG1hc2sgPSBudWxsO1xuXHR9XG5cblx0c3RhcnRab29tKCkge1xuXHRcdGlmICh0aGlzLiR6b29tKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2IudG9nZ2xlZFpvb20oe29uOiB0cnVlfSk7XG5cdFx0dGhpcy4kem9vbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuJHpvb20uY2xhc3NMaXN0LmFkZCguLi50aGlzLm9wdGlvbnMuem9vbUVsQ2xhc3NOYW1lKTtcblx0XHR0aGlzLiR6b29tQ29udGVudCA9IHRoaXMub3B0aW9ucy5lbC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc3BvdGxpZ2h0LXpvb20tY29udGVudCcpO1xuXHRcdHRoaXMuJHpvb20uc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdHdpZHRoOiAke3RoaXMub3B0aW9ucy5yYWRpdXMgKiAyfXB4OyBcblx0XHRcdGhlaWdodDogJHt0aGlzLm9wdGlvbnMucmFkaXVzICogMn1weDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtgXG5cdFx0KTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuXHRcdFx0d2lkdGg6ICR7dGhpcy5vcHRpb25zLmVsLm9mZnNldFdpZHRofXB4OyBcblx0XHRcdGhlaWdodDogJHt0aGlzLm9wdGlvbnMuZWwub2Zmc2V0SGVpZ2h0fXB4O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5vcHRpb25zLnpvb21lZENvbG9yfTtcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoJHt0aGlzLm9wdGlvbnMuem9vbVNjYWxlfSk7XG5cdFx0XHRvdmVyZmxvdzogJHt0aGlzLm9wdGlvbnMuZWwuc3R5bGUub3ZlcmZsb3d9O1xuXHRcdFx0ei1pbmRleDogJHt0aGlzLm9wdGlvbnMuekluZGV4ICsgMX1gXG5cdFx0KTtcblxuXHRcdHRoaXMub3B0aW9ucy5lbC5wYXJlbnROb2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy4kem9vbSk7XG5cdFx0dGhpcy4kem9vbS5hcHBlbmRDaGlsZCh0aGlzLiR6b29tQ29udGVudCk7XG5cdFx0dGhpcy5lbFJlY3QgPSB0aGlzLm9wdGlvbnMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc2Nyb2xsVG9wID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLnNjcm9sbEVsLnNjcm9sbFRvcCwgMTApO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnNjcm9sbExlZnQgPSBwYXJzZUludCh0aGlzLm9wdGlvbnMuc2Nyb2xsRWwuc2Nyb2xsTGVmdCwgMTApO1xuXHRcdHRoaXMuc2V0Wm9vbSgpO1xuXHR9XG5cblx0c2V0Wm9vbSh4ID0gdGhpcy54LCB5ID0gdGhpcy55KSB7XG5cdFx0dGhpcy5jYi5tb3ZlZFNwb3RMaWdodCh7XG5cdFx0XHR4LFxuXHRcdFx0eSxcblx0XHRcdHJhZGl1czogdGhpcy5vcHRpb25zLnJhZGl1cyxcblx0XHRcdHNjYWxlOiB0aGlzLm9wdGlvbnMuc2NhbGUsXG5cdFx0XHRwb3NpdGlvbjoge3RvcDogdGhpcy5lbFJlY3QudG9wLCBsZWZ0OiB0aGlzLmVsUmVjdC5sZWZ0fVxuXHRcdH0pO1xuXHRcdGxldCBzY2FsZSA9IHRoaXMub3B0aW9ucy56b29tU2NhbGU7XG5cdFx0dGhpcy4kem9vbS5zdHlsZS50b3AgPSBgJHt5IC0gdGhpcy5vcHRpb25zLnJhZGl1cyB9cHhgO1xuXHRcdHRoaXMuJHpvb20uc3R5bGUubGVmdCA9IGAke3ggLSB0aGlzLm9wdGlvbnMucmFkaXVzIH1weGA7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc3R5bGUudG9wID0gYCR7LShzY2FsZSAtIDEpICogKHkgLSB0aGlzLmVsUmVjdC50b3ApfXB4YDtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS5sZWZ0ID0gYCR7LShzY2FsZSAtIDEpICogKHggLSB0aGlzLmVsUmVjdC5sZWZ0KX1weGA7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gdGhpcy5lbFJlY3QudG9wICsgJ3B4Jztcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gdGhpcy5lbFJlY3QubGVmdCArICdweCc7XG5cdH1cblxuXHRzdG9wWm9vbSgpIHtcblx0XHR0aGlzLmNiLnRvZ2dsZWRab29tKHtvbjogZmFsc2V9KTtcblx0XHR0aGlzLiR6b29tICYmIHRoaXMuJHpvb20ucmVtb3ZlKCk7XG5cdFx0dGhpcy4kem9vbSA9IG51bGw7XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLmVsUmVjdCA9IHRoaXMub3B0aW9ucy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0fVxuXG5cdG9uTW92ZShlKSB7XG5cdFx0dGhpcy54ID0gZS5jbGllbnRYO1xuXHRcdHRoaXMueSA9IGUuY2xpZW50WTtcblxuXHRcdGlmICghdGhpcy4kbWFzaykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghZS5zaGlmdEtleSkge1xuXHRcdFx0dGhpcy5zdG9wTWFzaygpO1xuXHRcdH1cblxuXHRcdGlmICghZVt0aGlzLm9wdGlvbnMuem9vbUtleV0gJiYgdGhpcy4kem9vbSkge1xuXHRcdFx0dGhpcy5zdG9wWm9vbSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0TWFzaygpO1xuXG5cdFx0aWYgKGVbdGhpcy5vcHRpb25zLnpvb21LZXldKSB7XG5cdFx0XHR0aGlzLnNldFpvb20oKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHtTcG90TGlnaHR9XG4iXSwic291cmNlUm9vdCI6IiJ9