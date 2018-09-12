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
				zoomElClassName: 'spotlight-zoom',
				zIndex: 1000,
				el: el,
				scrollEl: el,
				radius: options.el.getBoundingClientRect().width / 6
			};

			return Object.assign({}, defaultOptions, options);
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
			if (this.$zoom) {
				return;
			}
			this.$zoom = document.createElement('div');
			this.$zoom.classList.add(this.options.zoomElClassName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYXJyIiwiZm9yRWFjaCIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJFbGVtZW50IiwicHJvdG90eXBlIiwiQ2hhcmFjdGVyRGF0YSIsIkRvY3VtZW50VHlwZSIsImlzTWFjIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImluZGV4T2YiLCJnZXRNYXNrQmFja2dyb3VuZCIsIngiLCJ5IiwicmFkaXVzIiwiZGltbWVkQ29sb3IiLCJLRVlfQ09ERSIsIkVTQyIsIlNISUZUIiwiQ1RSTCIsIm9wdGlvbnMiLCJjaGFuZ2VPcHRpb24iLCJfYXR0YWNoRXZlbnQiLCJlbCIsImRvY3VtZW50IiwiYm9keSIsImZpcnN0RWxlbWVudENoaWxkIiwiZGVmYXVsdE9wdGlvbnMiLCJ6b29tZWRDb2xvciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ6b29tS2V5IiwidXRpbCIsInpvb21TY2FsZSIsInpvb21FbENsYXNzTmFtZSIsInpJbmRleCIsInNjcm9sbEVsIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJhc3NpZ24iLCJfY29tcHV0ZU9wdGlvbnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJzdG9wTWFzayIsInN0b3Bab29tIiwic3RhcnRNYXNrIiwic2hpZnRLZXkiLCJzdGFydFpvb20iLCJvbk1vdmUiLCJiaW5kIiwib25SZXNpemUiLCIkbWFzayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldE1hc2siLCJpbWFnZUNzcyIsInNldEF0dHJpYnV0ZSIsIiR6b29tIiwiJHpvb21Db250ZW50IiwiY2xvbmVOb2RlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm92ZXJmbG93IiwiZWxSZWN0Iiwic2Nyb2xsVG9wIiwicGFyc2VJbnQiLCJzY3JvbGxMZWZ0Iiwic2V0Wm9vbSIsInNjYWxlIiwidG9wIiwibGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJjbGllbnRYIiwiY2xpZW50WSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7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QyxLQUFLVCxNQUFMLENBQVlPLElBQVosR0FBbUIsSUFBeEQ7QUFDQTs7OzZCQUVVO0FBQ1YsUUFBS2QsS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBVzdELE1BQVgsRUFBZDtBQUNBLFFBQUs2RCxLQUFMLEdBQWEsSUFBYjtBQUNBOzs7NkJBRVU7QUFDVixRQUFLTyxNQUFMLEdBQWMsS0FBSy9DLE9BQUwsQ0FBYUcsRUFBYixDQUFnQmMscUJBQWhCLEVBQWQ7QUFDQTs7O3lCQUVNSyxDLEVBQUc7QUFDVCxRQUFLOUIsQ0FBTCxHQUFTOEIsRUFBRW1DLE9BQVg7QUFDQSxRQUFLaEUsQ0FBTCxHQUFTNkIsRUFBRW9DLE9BQVg7O0FBRUEsT0FBRyxDQUFDLEtBQUsxQixLQUFULEVBQWdCO0FBQ2Y7QUFDQTs7QUFFRCxPQUFJLENBQUNWLEVBQUVLLFFBQVAsRUFBaUI7QUFDaEIsU0FBS0gsUUFBTDtBQUNBOztBQUVELE9BQUksQ0FBQ0YsRUFBRSxLQUFLdEIsT0FBTCxDQUFhVyxPQUFmLENBQUQsSUFBNEIsS0FBSzZCLEtBQXJDLEVBQTRDO0FBQzNDLFNBQUtmLFFBQUw7QUFDQTs7QUFFRCxRQUFLWSxPQUFMOztBQUVBLE9BQUlmLEVBQUUsS0FBS3RCLE9BQUwsQ0FBYVcsT0FBZixDQUFKLEVBQTZCO0FBQzVCLFNBQUt3QyxPQUFMO0FBQ0E7QUFDRCIsImZpbGUiOiJzcG90bGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0XCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIi8vIGZyb206aHR0cHM6Ly9naXRodWIuY29tL2pzZXJ6L2pzX3BpZWNlL2Jsb2IvbWFzdGVyL0RPTS9DaGlsZE5vZGUvcmVtb3ZlKCkvcmVtb3ZlKCkubWRcbihmdW5jdGlvbiAoYXJyKSB7XG5cdGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0aWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ3JlbW92ZScpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAncmVtb3ZlJywge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFyZW50Tm9kZSAhPT0gbnVsbClcblx0XHRcdFx0XHR0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufSkoW0VsZW1lbnQucHJvdG90eXBlLCBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pOyIsImV4cG9ydCBjb25zdCBpc01hYyA9ICgpID0+IHtcblx0cmV0dXJuIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQUMnKSA+PSAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1hc2tCYWNrZ3JvdW5kID0gKHgsIHksIHtyYWRpdXMsIGRpbW1lZENvbG9yfSkgPT4ge1xuXHRyZXR1cm4gJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHRyYW5zcGFyZW50ICcgKyByYWRpdXMgKyAncHgsICcrIGRpbW1lZENvbG9yICsgJyAwKSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aXNNYWMsXG5cdGdldE1hc2tCYWNrZ3JvdW5kXG59IiwiaW1wb3J0IHtpc01hY30gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3QgS0VZX0NPREUgPSB7XG5cdEVTQzogMjcsXG5cdFNISUZUOiAxNixcblx0Q1RSTDogaXNNYWMoKSA/IDkxOiAxN1xufTtcbiIsImltcG9ydCB7S0VZX0NPREV9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IFwiLi9wb2x5ZmlsbFwiXG5cbmNsYXNzIFNwb3RMaWdodCB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHR0aGlzLmNoYW5nZU9wdGlvbihvcHRpb25zKTtcblx0XHR0aGlzLl9hdHRhY2hFdmVudCgpO1xuXHR9XG5cblx0X2NvbXB1dGVPcHRpb25zKG9wdGlvbnMpIHtcblx0XHRsZXQgZWwgPSBvcHRpb25zLmVsIHx8IGRvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cblx0XHRsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0XHRkaW1tZWRDb2xvcjogYHJnYmEoMCwwLDAsMC40KWAsXG5cdFx0XHR6b29tZWRDb2xvcjogJyNmZmYnIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVsnYmFja2dyb3VuZENvbG9yJ10sIC8v7J6E7IucIOy9lOuTnFxuXHRcdFx0em9vbUtleTogdXRpbC5pc01hYygpPyAnbWV0YUtleSc6ICdjdHJsS2V5Jyxcblx0XHRcdHpvb21TY2FsZTogMixcblx0XHRcdHpvb21FbENsYXNzTmFtZTogJ3Nwb3RsaWdodC16b29tJyxcblx0XHRcdHpJbmRleDogMTAwMCxcblx0XHRcdGVsOiBlbCxcblx0XHRcdHNjcm9sbEVsOiBlbCxcblx0XHRcdHJhZGl1czogb3B0aW9ucy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDYsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cdH1cblxuXHRjaGFuZ2VPcHRpb24ob3B0aW9ucykge1xuXHRcdHRoaXMub3B0aW9ucyA9IHRoaXMuX2NvbXB1dGVPcHRpb25zKG9wdGlvbnMpO1xuXHR9XG5cblx0X2F0dGFjaEV2ZW50KCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0b3Bab29tKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRNYXNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlLnNoaWZ0S2V5ICYmIEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Wm9vbShlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3ZlLmJpbmQodGhpcykpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW1vdmUoKSB7XG5cblx0fVxuXG5cdHN0YXJ0TWFzaygpIHtcblx0XHRpZih0aGlzLiRtYXNrKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuJG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLiRtYXNrLmNsYXNzTGlzdC5hZGQoJ3Nwb3RsaWdodC1tYXNrJyk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLiRtYXNrKTtcblx0XHR0aGlzLnNldE1hc2soKTtcblx0fVxuXG5cdHNldE1hc2soKSB7XG5cdFx0bGV0IGltYWdlQ3NzID0gdXRpbC5nZXRNYXNrQmFja2dyb3VuZCh0aGlzLngsIHRoaXMueSwgdGhpcy5vcHRpb25zKTtcblx0XHR0aGlzLiRtYXNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiAke2ltYWdlQ3NzfTsgXG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LSR7aW1hZ2VDc3N9O1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0Y3Vyc29yOiBub25lO1xuXHRcdFx0ei1pbmRleDogJHt0aGlzLm9wdGlvbnMuekluZGV4fWApXG5cdH1cblxuXHRzdG9wTWFzaygpIHtcblx0XHR0aGlzLiRtYXNrICYmIHRoaXMuJG1hc2sucmVtb3ZlKCk7XG5cdFx0dGhpcy5zdG9wWm9vbSgpO1xuXHRcdHRoaXMuJG1hc2sgPSBudWxsO1xuXHR9XG5cdHN0YXJ0Wm9vbSgpIHtcblx0XHRpZih0aGlzLiR6b29tKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuJHpvb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLiR6b29tLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLnpvb21FbENsYXNzTmFtZSk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQgPSB0aGlzLm9wdGlvbnMuZWwuY2xvbmVOb2RlKHRydWUpO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3Nwb3RsaWdodC16b29tLWNvbnRlbnQnKTtcblx0XHR0aGlzLiR6b29tLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG5cdFx0XHR3aWR0aDogJHt0aGlzLm9wdGlvbnMucmFkaXVzICogMn1weDsgXG5cdFx0XHRoZWlnaHQ6ICR7dGhpcy5vcHRpb25zLnJhZGl1cyAqIDJ9cHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7YFxuXHRcdCk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdHdpZHRoOiAke3RoaXMub3B0aW9ucy5lbC5vZmZzZXRXaWR0aH1weDsgXG5cdFx0XHRoZWlnaHQ6ICR7dGhpcy5vcHRpb25zLmVsLm9mZnNldEhlaWdodH1weDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5vcHRpb25zLnpvb21lZENvbG9yfTtcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoJHt0aGlzLm9wdGlvbnMuem9vbVNjYWxlfSk7XG5cdFx0XHRvdmVyZmxvdzogJHt0aGlzLm9wdGlvbnMuZWwuc3R5bGUub3ZlcmZsb3d9O1xuXHRcdFx0ei1pbmRleDogJHt0aGlzLm9wdGlvbnMuekluZGV4ICsgMX1gXG5cdFx0KTtcblxuXHRcdHRoaXMub3B0aW9ucy5lbC5wYXJlbnROb2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy4kem9vbSk7XG5cdFx0dGhpcy4kem9vbS5hcHBlbmRDaGlsZCh0aGlzLiR6b29tQ29udGVudCk7XG5cdFx0dGhpcy5lbFJlY3QgPSB0aGlzLm9wdGlvbnMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc2Nyb2xsVG9wID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLnNjcm9sbEVsLnNjcm9sbFRvcCwgMTApO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnNjcm9sbExlZnQgPSBwYXJzZUludCh0aGlzLm9wdGlvbnMuc2Nyb2xsRWwuc2Nyb2xsTGVmdCwgMTApO1xuXHRcdHRoaXMuc2V0Wm9vbSgpO1xuXHR9XG5cblx0c2V0Wm9vbSgpIHtcblx0XHRsZXQgc2NhbGUgPSB0aGlzLm9wdGlvbnMuem9vbVNjYWxlO1xuXHRcdHRoaXMuJHpvb20uc3R5bGUudG9wID0gYCR7dGhpcy55IC0gdGhpcy5vcHRpb25zLnJhZGl1cyB9cHhgO1xuXHRcdHRoaXMuJHpvb20uc3R5bGUubGVmdCA9IGAke3RoaXMueCAtIHRoaXMub3B0aW9ucy5yYWRpdXMgfXB4YDtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS50b3AgPSBgJHstKHNjYWxlLSAxKSAqICh0aGlzLnkgLSB0aGlzLmVsUmVjdC50b3ApfXB4YDtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS5sZWZ0ID0gYCR7LShzY2FsZSAtIDEpICogKHRoaXMueCAtIHRoaXMuZWxSZWN0LmxlZnQpfXB4YDtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSB0aGlzLmVsUmVjdC50b3AgKyAncHgnO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB0aGlzLmVsUmVjdC5sZWZ0ICsgJ3B4Jztcblx0fVxuXG5cdHN0b3Bab29tKCkge1xuXHRcdHRoaXMuJHpvb20gJiYgdGhpcy4kem9vbS5yZW1vdmUoKTtcblx0XHR0aGlzLiR6b29tID0gbnVsbDtcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMuZWxSZWN0ID0gdGhpcy5vcHRpb25zLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHR9XG5cblx0b25Nb3ZlKGUpIHtcblx0XHR0aGlzLnggPSBlLmNsaWVudFg7XG5cdFx0dGhpcy55ID0gZS5jbGllbnRZO1xuXG5cdFx0aWYoIXRoaXMuJG1hc2spIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIWUuc2hpZnRLZXkpIHtcblx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHR9XG5cblx0XHRpZiAoIWVbdGhpcy5vcHRpb25zLnpvb21LZXldICYmIHRoaXMuJHpvb20pIHtcblx0XHRcdHRoaXMuc3RvcFpvb20oKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldE1hc2soKTtcblxuXHRcdGlmIChlW3RoaXMub3B0aW9ucy56b29tS2V5XSkge1xuXHRcdFx0dGhpcy5zZXRab29tKCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCB7U3BvdExpZ2h0fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==