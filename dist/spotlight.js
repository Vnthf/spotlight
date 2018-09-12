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
		value: function _computeOptions(options) {
			var el = options.el || document.body.firstElementChild;

			var defaultOptions = {
				dimmedColor: "rgba(0,0,0,0.4)",
				zoomedColor: '#fff' || window.getComputedStyle(el, null)['backgroundColor'], //임시 코드
				zoomKey: util.isMac() ? 'metaKey' : 'ctrlKey',
				zoomScale: 2,
				zoomElClassName: ['spotlight-zoom'],
				zIndex: 1000,
				el: el,
				scrollEl: el,
				radius: options.el.getBoundingClientRect().width / 6
			};

			return Object.assign({}, defaultOptions, this.options, options);
		}
	}, {
		key: "changeOption",
		value: function changeOption(options) {
			this.options = this._computeOptions(options);
		}
	}, {
		key: "_attachEvent",
		value: function _attachEvent() {
			var _this = this;

			document.addEventListener('keyup', function (e) {
				if (KEY_CODE.SHIFT === e.keyCode) {
					_this.stopMask();
				}

				if (KEY_CODE.CTRL === e.keyCode) {
					_this.stopZoom();
				}
			});

			document.addEventListener('keydown', function (e) {
				if (KEY_CODE.SHIFT === e.keyCode) {
					_this.startMask();
				}

				if (e.shiftKey && KEY_CODE.CTRL === e.keyCode) {
					_this.startZoom(e);
				}
			});

			document.addEventListener('mousemove', this.onMove.bind(this));
			document.addEventListener('resize', this.onResize.bind(this));
		}
	}, {
		key: "remove",
		value: function remove() {}
	}, {
		key: "startMask",
		value: function startMask() {
			if (this.$mask) {
				return;
			}
			this.$mask = document.createElement('div');
			this.$mask.classList.add('spotlight-mask');
			document.body.appendChild(this.$mask);
			this.setMask();
		}
	}, {
		key: "setMask",
		value: function setMask() {
			var imageCss = util.getMaskBackground(this.x, this.y, this.options);
			this.$mask.setAttribute('style', "\n\t\t\tbackground-image: " + imageCss + "; \n\t\t\tbackground-image: -webkit-" + imageCss + ";\n\t\t\tposition: fixed;\n\t\t\tleft: 0;\n\t\t\ttop: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tcursor: none;\n\t\t\tz-index: " + this.options.zIndex);
		}
	}, {
		key: "stopMask",
		value: function stopMask() {
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
			this.$zoom = document.createElement('div');
			(_$zoom$classList = this.$zoom.classList).add.apply(_$zoom$classList, _toConsumableArray(this.options.zoomElClassName));
			this.$zoomContent = this.options.el.cloneNode(true);
			this.$zoomContent.classList.add('spotlight-zoom-content');
			this.$zoom.setAttribute('style', "\n\t\t\twidth: " + this.options.radius * 2 + "px; \n\t\t\theight: " + this.options.radius * 2 + "px;\n\t\t\toverflow: hidden;\n\t\t\tborder-radius: 50%;\n\t\t\tdisplay: block;\n\t\t\tposition: fixed;");
			this.$zoomContent.setAttribute('style', "\n\t\t\twidth: " + this.options.el.offsetWidth + "px; \n\t\t\theight: " + this.options.el.offsetHeight + "px;\n\t\t\tbackground-color: " + this.options.zoomedColor + ";\n\t\t\tposition: fixed;\n\t\t\ttransform-origin: 0 0;\n\t\t\ttransform: scale(" + this.options.zoomScale + ");\n\t\t\toverflow: " + this.options.el.style.overflow + ";\n\t\t\tz-index: " + (this.options.zIndex + 1));

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
			var scale = this.options.zoomScale;
			this.$zoom.style.top = this.y - this.options.radius + "px";
			this.$zoom.style.left = this.x - this.options.radius + "px";
			this.$zoomContent.style.top = -(scale - 1) * (this.y - this.elRect.top) + "px";
			this.$zoomContent.style.left = -(scale - 1) * (this.x - this.elRect.left) + "px";
			this.$zoomContent.style.marginTop = this.elRect.top + 'px';
			this.$zoomContent.style.marginLeft = this.elRect.left + 'px';
		}
	}, {
		key: "stopZoom",
		value: function stopZoom() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYXJyIiwiZm9yRWFjaCIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJFbGVtZW50IiwicHJvdG90eXBlIiwiQ2hhcmFjdGVyRGF0YSIsIkRvY3VtZW50VHlwZSIsImlzTWFjIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImluZGV4T2YiLCJnZXRNYXNrQmFja2dyb3VuZCIsIngiLCJ5IiwicmFkaXVzIiwiZGltbWVkQ29sb3IiLCJLRVlfQ09ERSIsIkVTQyIsIlNISUZUIiwiQ1RSTCIsIm9wdGlvbnMiLCJjaGFuZ2VPcHRpb24iLCJfYXR0YWNoRXZlbnQiLCJlbCIsImRvY3VtZW50IiwiYm9keSIsImZpcnN0RWxlbWVudENoaWxkIiwiZGVmYXVsdE9wdGlvbnMiLCJ6b29tZWRDb2xvciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ6b29tS2V5IiwidXRpbCIsInpvb21TY2FsZSIsInpvb21FbENsYXNzTmFtZSIsInpJbmRleCIsInNjcm9sbEVsIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJhc3NpZ24iLCJfY29tcHV0ZU9wdGlvbnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJzdG9wTWFzayIsInN0b3Bab29tIiwic3RhcnRNYXNrIiwic2hpZnRLZXkiLCJzdGFydFpvb20iLCJvbk1vdmUiLCJiaW5kIiwib25SZXNpemUiLCIkbWFzayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldE1hc2siLCJpbWFnZUNzcyIsInNldEF0dHJpYnV0ZSIsIiR6b29tIiwiJHpvb21Db250ZW50IiwiY2xvbmVOb2RlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm92ZXJmbG93IiwiZWxSZWN0Iiwic2Nyb2xsVG9wIiwicGFyc2VJbnQiLCJzY3JvbGxMZWZ0Iiwic2V0Wm9vbSIsInNjYWxlIiwidG9wIiwibGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJjbGllbnRYIiwiY2xpZW50WSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7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S1osWUFBTCxDQUFrQkksS0FBbEIsQ0FBd0JXLFVBQXhCLEdBQXFDLEtBQUtULE1BQUwsQ0FBWU8sSUFBWixHQUFtQixJQUF4RDtBQUNBOzs7NkJBRVU7QUFDVixRQUFLZCxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXN0QsTUFBWCxFQUFkO0FBQ0EsUUFBSzZELEtBQUwsR0FBYSxJQUFiO0FBQ0E7Ozs2QkFFVTtBQUNWLFFBQUtPLE1BQUwsR0FBYyxLQUFLL0MsT0FBTCxDQUFhRyxFQUFiLENBQWdCYyxxQkFBaEIsRUFBZDtBQUNBOzs7eUJBRU1LLEMsRUFBRztBQUNULFFBQUs5QixDQUFMLEdBQVM4QixFQUFFbUMsT0FBWDtBQUNBLFFBQUtoRSxDQUFMLEdBQVM2QixFQUFFb0MsT0FBWDs7QUFFQSxPQUFHLENBQUMsS0FBSzFCLEtBQVQsRUFBZ0I7QUFDZjtBQUNBOztBQUVELE9BQUksQ0FBQ1YsRUFBRUssUUFBUCxFQUFpQjtBQUNoQixTQUFLSCxRQUFMO0FBQ0E7O0FBRUQsT0FBSSxDQUFDRixFQUFFLEtBQUt0QixPQUFMLENBQWFXLE9BQWYsQ0FBRCxJQUE0QixLQUFLNkIsS0FBckMsRUFBNEM7QUFDM0MsU0FBS2YsUUFBTDtBQUNBOztBQUVELFFBQUtZLE9BQUw7O0FBRUEsT0FBSWYsRUFBRSxLQUFLdEIsT0FBTCxDQUFhVyxPQUFmLENBQUosRUFBNkI7QUFDNUIsU0FBS3dDLE9BQUw7QUFDQTtBQUNEIiwiZmlsZSI6InNwb3RsaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3RcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiLy8gZnJvbTpodHRwczovL2dpdGh1Yi5jb20vanNlcnovanNfcGllY2UvYmxvYi9tYXN0ZXIvRE9NL0NoaWxkTm9kZS9yZW1vdmUoKS9yZW1vdmUoKS5tZFxuKGZ1bmN0aW9uIChhcnIpIHtcblx0YXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGl0ZW0sICdyZW1vdmUnLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHRcdFx0XHRpZiAodGhpcy5wYXJlbnROb2RlICE9PSBudWxsKVxuXHRcdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59KShbRWxlbWVudC5wcm90b3R5cGUsIENoYXJhY3RlckRhdGEucHJvdG90eXBlLCBEb2N1bWVudFR5cGUucHJvdG90eXBlXSk7IiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCkgPT4ge1xuXHRyZXR1cm4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01BQycpID49IDA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWFza0JhY2tncm91bmQgPSAoeCwgeSwge3JhZGl1cywgZGltbWVkQ29sb3J9KSA9PiB7XG5cdHJldHVybiAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgdHJhbnNwYXJlbnQgJyArIHJhZGl1cyArICdweCwgJysgZGltbWVkQ29sb3IgKyAnIDApJztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpc01hYyxcblx0Z2V0TWFza0JhY2tncm91bmRcbn0iLCJpbXBvcnQge2lzTWFjfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBLRVlfQ09ERSA9IHtcblx0RVNDOiAyNyxcblx0U0hJRlQ6IDE2LFxuXHRDVFJMOiBpc01hYygpID8gOTE6IDE3XG59O1xuIiwiaW1wb3J0IHtLRVlfQ09ERX0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgXCIuL3BvbHlmaWxsXCJcblxuY2xhc3MgU3BvdExpZ2h0IHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdHRoaXMuY2hhbmdlT3B0aW9uKG9wdGlvbnMpO1xuXHRcdHRoaXMuX2F0dGFjaEV2ZW50KCk7XG5cdH1cblxuXHRfY29tcHV0ZU9wdGlvbnMob3B0aW9ucykge1xuXHRcdGxldCBlbCA9IG9wdGlvbnMuZWwgfHwgZG9jdW1lbnQuYm9keS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdGxldCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRcdGRpbW1lZENvbG9yOiBgcmdiYSgwLDAsMCwwLjQpYCxcblx0XHRcdHpvb21lZENvbG9yOiAnI2ZmZicgfHwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydiYWNrZ3JvdW5kQ29sb3InXSwgLy/snoTsi5wg7L2U65OcXG5cdFx0XHR6b29tS2V5OiB1dGlsLmlzTWFjKCk/ICdtZXRhS2V5JzogJ2N0cmxLZXknLFxuXHRcdFx0em9vbVNjYWxlOiAyLFxuXHRcdFx0em9vbUVsQ2xhc3NOYW1lOiBbJ3Nwb3RsaWdodC16b29tJ10sXG5cdFx0XHR6SW5kZXg6IDEwMDAsXG5cdFx0XHRlbDogZWwsXG5cdFx0XHRzY3JvbGxFbDogZWwsXG5cdFx0XHRyYWRpdXM6IG9wdGlvbnMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyA2LFxuXHRcdH07XG5cblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cdH1cblxuXHRjaGFuZ2VPcHRpb24ob3B0aW9ucykge1xuXHRcdHRoaXMub3B0aW9ucyA9IHRoaXMuX2NvbXB1dGVPcHRpb25zKG9wdGlvbnMpO1xuXHR9XG5cblx0X2F0dGFjaEV2ZW50KCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0b3Bab29tKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRNYXNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlLnNoaWZ0S2V5ICYmIEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Wm9vbShlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3ZlLmJpbmQodGhpcykpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW1vdmUoKSB7XG5cblx0fVxuXG5cdHN0YXJ0TWFzaygpIHtcblx0XHRpZih0aGlzLiRtYXNrKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuJG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLiRtYXNrLmNsYXNzTGlzdC5hZGQoJ3Nwb3RsaWdodC1tYXNrJyk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLiRtYXNrKTtcblx0XHR0aGlzLnNldE1hc2soKTtcblx0fVxuXG5cdHNldE1hc2soKSB7XG5cdFx0bGV0IGltYWdlQ3NzID0gdXRpbC5nZXRNYXNrQmFja2dyb3VuZCh0aGlzLngsIHRoaXMueSwgdGhpcy5vcHRpb25zKTtcblx0XHR0aGlzLiRtYXNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiAke2ltYWdlQ3NzfTsgXG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LSR7aW1hZ2VDc3N9O1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0Y3Vyc29yOiBub25lO1xuXHRcdFx0ei1pbmRleDogJHt0aGlzLm9wdGlvbnMuekluZGV4fWApXG5cdH1cblxuXHRzdG9wTWFzaygpIHtcblx0XHR0aGlzLiRtYXNrICYmIHRoaXMuJG1hc2sucmVtb3ZlKCk7XG5cdFx0dGhpcy5zdG9wWm9vbSgpO1xuXHRcdHRoaXMuJG1hc2sgPSBudWxsO1xuXHR9XG5cdHN0YXJ0Wm9vbSgpIHtcblx0XHRpZih0aGlzLiR6b29tKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuJHpvb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLiR6b29tLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5vcHRpb25zLnpvb21FbENsYXNzTmFtZSk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQgPSB0aGlzLm9wdGlvbnMuZWwuY2xvbmVOb2RlKHRydWUpO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3Nwb3RsaWdodC16b29tLWNvbnRlbnQnKTtcblx0XHR0aGlzLiR6b29tLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG5cdFx0XHR3aWR0aDogJHt0aGlzLm9wdGlvbnMucmFkaXVzICogMn1weDsgXG5cdFx0XHRoZWlnaHQ6ICR7dGhpcy5vcHRpb25zLnJhZGl1cyAqIDJ9cHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7YFxuXHRcdCk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdHdpZHRoOiAke3RoaXMub3B0aW9ucy5lbC5vZmZzZXRXaWR0aH1weDsgXG5cdFx0XHRoZWlnaHQ6ICR7dGhpcy5vcHRpb25zLmVsLm9mZnNldEhlaWdodH1weDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5vcHRpb25zLnpvb21lZENvbG9yfTtcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoJHt0aGlzLm9wdGlvbnMuem9vbVNjYWxlfSk7XG5cdFx0XHRvdmVyZmxvdzogJHt0aGlzLm9wdGlvbnMuZWwuc3R5bGUub3ZlcmZsb3d9O1xuXHRcdFx0ei1pbmRleDogJHt0aGlzLm9wdGlvbnMuekluZGV4ICsgMX1gXG5cdFx0KTtcblxuXHRcdHRoaXMub3B0aW9ucy5lbC5wYXJlbnROb2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy4kem9vbSk7XG5cdFx0dGhpcy4kem9vbS5hcHBlbmRDaGlsZCh0aGlzLiR6b29tQ29udGVudCk7XG5cdFx0dGhpcy5lbFJlY3QgPSB0aGlzLm9wdGlvbnMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc2Nyb2xsVG9wID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLnNjcm9sbEVsLnNjcm9sbFRvcCwgMTApO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnNjcm9sbExlZnQgPSBwYXJzZUludCh0aGlzLm9wdGlvbnMuc2Nyb2xsRWwuc2Nyb2xsTGVmdCwgMTApO1xuXHRcdHRoaXMuc2V0Wm9vbSgpO1xuXHR9XG5cblx0c2V0Wm9vbSgpIHtcblx0XHRsZXQgc2NhbGUgPSB0aGlzLm9wdGlvbnMuem9vbVNjYWxlO1xuXHRcdHRoaXMuJHpvb20uc3R5bGUudG9wID0gYCR7dGhpcy55IC0gdGhpcy5vcHRpb25zLnJhZGl1cyB9cHhgO1xuXHRcdHRoaXMuJHpvb20uc3R5bGUubGVmdCA9IGAke3RoaXMueCAtIHRoaXMub3B0aW9ucy5yYWRpdXMgfXB4YDtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS50b3AgPSBgJHstKHNjYWxlLSAxKSAqICh0aGlzLnkgLSB0aGlzLmVsUmVjdC50b3ApfXB4YDtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS5sZWZ0ID0gYCR7LShzY2FsZSAtIDEpICogKHRoaXMueCAtIHRoaXMuZWxSZWN0LmxlZnQpfXB4YDtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSB0aGlzLmVsUmVjdC50b3AgKyAncHgnO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB0aGlzLmVsUmVjdC5sZWZ0ICsgJ3B4Jztcblx0fVxuXG5cdHN0b3Bab29tKCkge1xuXHRcdHRoaXMuJHpvb20gJiYgdGhpcy4kem9vbS5yZW1vdmUoKTtcblx0XHR0aGlzLiR6b29tID0gbnVsbDtcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMuZWxSZWN0ID0gdGhpcy5vcHRpb25zLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHR9XG5cblx0b25Nb3ZlKGUpIHtcblx0XHR0aGlzLnggPSBlLmNsaWVudFg7XG5cdFx0dGhpcy55ID0gZS5jbGllbnRZO1xuXG5cdFx0aWYoIXRoaXMuJG1hc2spIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIWUuc2hpZnRLZXkpIHtcblx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHR9XG5cblx0XHRpZiAoIWVbdGhpcy5vcHRpb25zLnpvb21LZXldICYmIHRoaXMuJHpvb20pIHtcblx0XHRcdHRoaXMuc3RvcFpvb20oKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldE1hc2soKTtcblxuXHRcdGlmIChlW3RoaXMub3B0aW9ucy56b29tS2V5XSkge1xuXHRcdFx0dGhpcy5zZXRab29tKCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCB7U3BvdExpZ2h0fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==