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
				scrollEl: el,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYXJyIiwiZm9yRWFjaCIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJFbGVtZW50IiwicHJvdG90eXBlIiwiQ2hhcmFjdGVyRGF0YSIsIkRvY3VtZW50VHlwZSIsImlzTWFjIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImluZGV4T2YiLCJnZXRNYXNrQmFja2dyb3VuZCIsIngiLCJ5IiwicmFkaXVzIiwiZGltbWVkQ29sb3IiLCJLRVlfQ09ERSIsIkVTQyIsIlNISUZUIiwiQ1RSTCIsIm9wdGlvbnMiLCJjaGFuZ2VPcHRpb24iLCJfYXR0YWNoRXZlbnQiLCJfb3B0aW9ucyIsImVsIiwiZG9jdW1lbnQiLCJib2R5IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJkZWZhdWx0T3B0aW9ucyIsInpvb21lZENvbG9yIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInpvb21LZXkiLCJ1dGlsIiwiem9vbVNjYWxlIiwiem9vbUVsQ2xhc3NOYW1lIiwiekluZGV4Iiwic2Nyb2xsRWwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInByZXZlbnRFdmVudCIsImNhbGxiYWNrIiwibW92ZWRTcG90TGlnaHQiLCJ0b2dnbGVkTWFzayIsInRvZ2dsZWRab29tIiwiYXNzaWduIiwiX2NvbXB1dGVPcHRpb25zIiwiY2IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJzdG9wTWFzayIsInN0b3Bab29tIiwic3RhcnRNYXNrIiwic2hpZnRLZXkiLCJzdGFydFpvb20iLCJvbk1vdmUiLCJvblJlc2l6ZSIsImJpbmQiLCIkbWFzayIsIm9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwic2V0TWFzayIsImltYWdlQ3NzIiwic2V0QXR0cmlidXRlIiwiJHpvb20iLCIkem9vbUNvbnRlbnQiLCJjbG9uZU5vZGUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwib3ZlcmZsb3ciLCJlbFJlY3QiLCJzY3JvbGxUb3AiLCJwYXJzZUludCIsInNjcm9sbExlZnQiLCJzZXRab29tIiwic2NhbGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiY2xpZW50WCIsImNsaWVudFkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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b250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3RcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiLy8gZnJvbTpodHRwczovL2dpdGh1Yi5jb20vanNlcnovanNfcGllY2UvYmxvYi9tYXN0ZXIvRE9NL0NoaWxkTm9kZS9yZW1vdmUoKS9yZW1vdmUoKS5tZFxuKGZ1bmN0aW9uIChhcnIpIHtcblx0YXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGl0ZW0sICdyZW1vdmUnLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHRcdFx0XHRpZiAodGhpcy5wYXJlbnROb2RlICE9PSBudWxsKVxuXHRcdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59KShbRWxlbWVudC5wcm90b3R5cGUsIENoYXJhY3RlckRhdGEucHJvdG90eXBlLCBEb2N1bWVudFR5cGUucHJvdG90eXBlXSk7IiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCkgPT4ge1xuXHRyZXR1cm4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01BQycpID49IDA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWFza0JhY2tncm91bmQgPSAoeCwgeSwge3JhZGl1cywgZGltbWVkQ29sb3J9KSA9PiB7XG5cdHJldHVybiAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgdHJhbnNwYXJlbnQgJyArIHJhZGl1cyArICdweCwgJysgZGltbWVkQ29sb3IgKyAnIDApJztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpc01hYyxcblx0Z2V0TWFza0JhY2tncm91bmRcbn0iLCJpbXBvcnQge2lzTWFjfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBLRVlfQ09ERSA9IHtcblx0RVNDOiAyNyxcblx0U0hJRlQ6IDE2LFxuXHRDVFJMOiBpc01hYygpID8gOTE6IDE3XG59O1xuIiwiaW1wb3J0IHtLRVlfQ09ERX0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgXCIuL3BvbHlmaWxsXCJcblxuY2xhc3MgU3BvdExpZ2h0IHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdHRoaXMuY2hhbmdlT3B0aW9uKG9wdGlvbnMpO1xuXHRcdHRoaXMuX2F0dGFjaEV2ZW50KCk7XG5cdH1cblxuXHRfY29tcHV0ZU9wdGlvbnMoX29wdGlvbnMpIHtcblx0XHRsZXQgZWwgPSBfb3B0aW9ucy5lbCB8fCBkb2N1bWVudC5ib2R5LmZpcnN0RWxlbWVudENoaWxkO1xuXG5cdFx0bGV0IGRlZmF1bHRPcHRpb25zID0ge1xuXHRcdFx0ZGltbWVkQ29sb3I6IGByZ2JhKDAsMCwwLDAuNClgLFxuXHRcdFx0em9vbWVkQ29sb3I6ICcjZmZmJyB8fCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ2JhY2tncm91bmRDb2xvciddLCAvL+yehOyLnCDsvZTrk5xcblx0XHRcdHpvb21LZXk6IHV0aWwuaXNNYWMoKSA/ICdtZXRhS2V5JyA6ICdjdHJsS2V5Jyxcblx0XHRcdHpvb21TY2FsZTogMixcblx0XHRcdHpvb21FbENsYXNzTmFtZTogWydzcG90bGlnaHQtem9vbSddLFxuXHRcdFx0ekluZGV4OiAxMDAwLFxuXHRcdFx0ZWw6IGVsLFxuXHRcdFx0c2Nyb2xsRWw6IGVsLFxuXHRcdFx0cmFkaXVzOiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDYsXG5cdFx0XHRwcmV2ZW50RXZlbnQ6IGZhbHNlLFxuXHRcdFx0Y2FsbGJhY2s6IHtcblx0XHRcdFx0bW92ZWRTcG90TGlnaHQ6ICgpID0+IHt9LFxuXHRcdFx0XHR0b2dnbGVkTWFzazogKCkgPT4ge30sXG5cdFx0XHRcdHRvZ2dsZWRab29tOiAoKSA9PiB7fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsZXQgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMsIF9vcHRpb25zKTtcblxuXHRcdGlmKCFvcHRpb25zLnNjcm9sbEVsKSB7XG5cdFx0XHRvcHRpb25zLnNjcm9sbEVsID0gb3B0aW9ucy5lbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fVxuXG5cdGNoYW5nZU9wdGlvbihvcHRpb25zKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gdGhpcy5fY29tcHV0ZU9wdGlvbnMob3B0aW9ucyk7XG5cdFx0dGhpcy5jYiA9IHRoaXMub3B0aW9ucy5jYWxsYmFjaztcblx0fVxuXG5cdF9hdHRhY2hFdmVudCgpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnByZXZlbnRFdmVudCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoS0VZX0NPREUuU0hJRlQgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0b3BNYXNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChLRVlfQ09ERS5DVFJMID09PSBlLmtleUNvZGUpIHtcblx0XHRcdFx0dGhpcy5zdG9wWm9vbSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnByZXZlbnRFdmVudCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoS0VZX0NPREUuU0hJRlQgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0TWFzaygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZS5zaGlmdEtleSAmJiBLRVlfQ09ERS5DVFJMID09PSBlLmtleUNvZGUpIHtcblx0XHRcdFx0dGhpcy5zdGFydFpvb20oZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50RXZlbnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5vbk1vdmUoZSlcblx0XHR9KTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXHR9XG5cblx0c3RhcnRNYXNrKCkge1xuXHRcdGlmICh0aGlzLiRtYXNrKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2IudG9nZ2xlZE1hc2soe29uOiB0cnVlfSk7XG5cdFx0dGhpcy4kbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuJG1hc2suY2xhc3NMaXN0LmFkZCgnc3BvdGxpZ2h0LW1hc2snKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuJG1hc2spO1xuXHRcdHRoaXMuc2V0TWFzaygpO1xuXHR9XG5cblx0c2V0TWFzayh4ID0gdGhpcy54LCB5ID0gdGhpcy55KSB7XG5cdFx0dGhpcy5jYi5tb3ZlZFNwb3RMaWdodCh7eCwgeX0pO1xuXHRcdGxldCBpbWFnZUNzcyA9IHV0aWwuZ2V0TWFza0JhY2tncm91bmQoeCwgeSwgdGhpcy5vcHRpb25zKTtcblx0XHR0aGlzLiRtYXNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiAke2ltYWdlQ3NzfTsgXG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LSR7aW1hZ2VDc3N9O1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0Y3Vyc29yOiBub25lO1xuXHRcdFx0ei1pbmRleDogJHt0aGlzLm9wdGlvbnMuekluZGV4fWApO1xuXHR9XG5cblx0c3RvcE1hc2soKSB7XG5cdFx0dGhpcy5jYi50b2dnbGVkTWFzayh7b246IGZhbHNlfSk7XG5cdFx0dGhpcy4kbWFzayAmJiB0aGlzLiRtYXNrLnJlbW92ZSgpO1xuXHRcdHRoaXMuc3RvcFpvb20oKTtcblx0XHR0aGlzLiRtYXNrID0gbnVsbDtcblx0fVxuXG5cdHN0YXJ0Wm9vbSgpIHtcblx0XHRpZiAodGhpcy4kem9vbSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmNiLnRvZ2dsZWRab29tKHtvbjogdHJ1ZX0pO1xuXHRcdHRoaXMuJHpvb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLiR6b29tLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5vcHRpb25zLnpvb21FbENsYXNzTmFtZSk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQgPSB0aGlzLm9wdGlvbnMuZWwuY2xvbmVOb2RlKHRydWUpO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3Nwb3RsaWdodC16b29tLWNvbnRlbnQnKTtcblx0XHR0aGlzLiR6b29tLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG5cdFx0XHR3aWR0aDogJHt0aGlzLm9wdGlvbnMucmFkaXVzICogMn1weDsgXG5cdFx0XHRoZWlnaHQ6ICR7dGhpcy5vcHRpb25zLnJhZGl1cyAqIDJ9cHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7YFxuXHRcdCk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdHdpZHRoOiAke3RoaXMub3B0aW9ucy5lbC5vZmZzZXRXaWR0aH1weDsgXG5cdFx0XHRoZWlnaHQ6ICR7dGhpcy5vcHRpb25zLmVsLm9mZnNldEhlaWdodH1weDtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMub3B0aW9ucy56b29tZWRDb2xvcn07XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKCR7dGhpcy5vcHRpb25zLnpvb21TY2FsZX0pO1xuXHRcdFx0b3ZlcmZsb3c6ICR7dGhpcy5vcHRpb25zLmVsLnN0eWxlLm92ZXJmbG93fTtcblx0XHRcdHotaW5kZXg6ICR7dGhpcy5vcHRpb25zLnpJbmRleCArIDF9YFxuXHRcdCk7XG5cblx0XHR0aGlzLm9wdGlvbnMuZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuJHpvb20pO1xuXHRcdHRoaXMuJHpvb20uYXBwZW5kQ2hpbGQodGhpcy4kem9vbUNvbnRlbnQpO1xuXHRcdHRoaXMuZWxSZWN0ID0gdGhpcy5vcHRpb25zLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnNjcm9sbFRvcCA9IHBhcnNlSW50KHRoaXMub3B0aW9ucy5zY3JvbGxFbC5zY3JvbGxUb3AsIDEwKTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zY3JvbGxMZWZ0ID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLnNjcm9sbEVsLnNjcm9sbExlZnQsIDEwKTtcblx0XHR0aGlzLnNldFpvb20oKTtcblx0fVxuXG5cdHNldFpvb20oeCA9IHRoaXMueCwgeSA9IHRoaXMueSkge1xuXHRcdHRoaXMuY2IubW92ZWRTcG90TGlnaHQoe1xuXHRcdFx0eCxcblx0XHRcdHksXG5cdFx0XHRyYWRpdXM6IHRoaXMub3B0aW9ucy5yYWRpdXMsXG5cdFx0XHRzY2FsZTogdGhpcy5vcHRpb25zLnNjYWxlLFxuXHRcdFx0cG9zaXRpb246IHt0b3A6IHRoaXMuZWxSZWN0LnRvcCwgbGVmdDogdGhpcy5lbFJlY3QubGVmdH1cblx0XHR9KTtcblx0XHRsZXQgc2NhbGUgPSB0aGlzLm9wdGlvbnMuem9vbVNjYWxlO1xuXHRcdHRoaXMuJHpvb20uc3R5bGUudG9wID0gYCR7eSAtIHRoaXMub3B0aW9ucy5yYWRpdXMgfXB4YDtcblx0XHR0aGlzLiR6b29tLnN0eWxlLmxlZnQgPSBgJHt4IC0gdGhpcy5vcHRpb25zLnJhZGl1cyB9cHhgO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLnRvcCA9IGAkey0oc2NhbGUgLSAxKSAqICh5IC0gdGhpcy5lbFJlY3QudG9wKX1weGA7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc3R5bGUubGVmdCA9IGAkey0oc2NhbGUgLSAxKSAqICh4IC0gdGhpcy5lbFJlY3QubGVmdCl9cHhgO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLm1hcmdpblRvcCA9IHRoaXMuZWxSZWN0LnRvcCArICdweCc7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc3R5bGUubWFyZ2luTGVmdCA9IHRoaXMuZWxSZWN0LmxlZnQgKyAncHgnO1xuXHR9XG5cblx0c3RvcFpvb20oKSB7XG5cdFx0dGhpcy5jYi50b2dnbGVkWm9vbSh7b246IGZhbHNlfSk7XG5cdFx0dGhpcy4kem9vbSAmJiB0aGlzLiR6b29tLnJlbW92ZSgpO1xuXHRcdHRoaXMuJHpvb20gPSBudWxsO1xuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5lbFJlY3QgPSB0aGlzLm9wdGlvbnMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdH1cblxuXHRvbk1vdmUoZSkge1xuXHRcdHRoaXMueCA9IGUuY2xpZW50WDtcblx0XHR0aGlzLnkgPSBlLmNsaWVudFk7XG5cblx0XHRpZiAoIXRoaXMuJG1hc2spIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIWUuc2hpZnRLZXkpIHtcblx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHR9XG5cblx0XHRpZiAoIWVbdGhpcy5vcHRpb25zLnpvb21LZXldICYmIHRoaXMuJHpvb20pIHtcblx0XHRcdHRoaXMuc3RvcFpvb20oKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldE1hc2soKTtcblxuXHRcdGlmIChlW3RoaXMub3B0aW9ucy56b29tS2V5XSkge1xuXHRcdFx0dGhpcy5zZXRab29tKCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCB7U3BvdExpZ2h0fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==