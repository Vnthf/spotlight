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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
var polyfill = __webpack_require__(1);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotLight", function() { return src_SpotLight; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var src_SpotLight =
/*#__PURE__*/
function () {
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
        zoomedColor: '#fff' || window.getComputedStyle(el, null)['backgroundColor'],
        //임시 코드
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
      this.$mask.setAttribute('style', "\n\t\t\tbackground-image: ".concat(imageCss, "; \n\t\t\tbackground-image: -webkit-").concat(imageCss, ";\n\t\t\tposition: fixed;\n\t\t\tleft: 0;\n\t\t\ttop: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tcursor: none;\n\t\t\tz-index: ").concat(this.options.zIndex));
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
      this.$zoom.setAttribute('style', "\n\t\t\twidth: ".concat(this.options.radius * 2, "px; \n\t\t\theight: ").concat(this.options.radius * 2, "px;\n\t\t\toverflow: hidden;\n\t\t\tborder-radius: 50%;\n\t\t\tdisplay: block;\n\t\t\tposition: fixed;"));
      this.$zoomContent.setAttribute('style', "\n\t\t\twidth: ".concat(this.options.el.offsetWidth, "px; \n\t\t\theight: ").concat(this.options.el.offsetHeight, "px;\n\t\t\tbackground-color: ").concat(this.options.zoomedColor, ";\n\t\t\tposition: fixed;\n\t\t\ttransform-origin: 0 0;\n\t\t\ttransform: scale(").concat(this.options.zoomScale, ");\n\t\t\toverflow: ").concat(this.options.el.style.overflow, ";\n\t\t\tz-index: ").concat(this.options.zIndex + 1));
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
      this.$zoom.style.top = "".concat(this.y - this.options.radius, "px");
      this.$zoom.style.left = "".concat(this.x - this.options.radius, "px");
      this.$zoomContent.style.top = "".concat(-(scale - 1) * (this.y - this.elRect.top), "px");
      this.$zoomContent.style.left = "".concat(-(scale - 1) * (this.x - this.elRect.left), "px");
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



/***/ }),
/* 1 */
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwuanMiXSwibmFtZXMiOlsiaXNNYWMiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInRvVXBwZXJDYXNlIiwiaW5kZXhPZiIsImdldE1hc2tCYWNrZ3JvdW5kIiwieCIsInkiLCJyYWRpdXMiLCJkaW1tZWRDb2xvciIsIktFWV9DT0RFIiwiRVNDIiwiU0hJRlQiLCJDVFJMIiwib3B0aW9ucyIsImNoYW5nZU9wdGlvbiIsIl9hdHRhY2hFdmVudCIsImVsIiwiZG9jdW1lbnQiLCJib2R5IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJkZWZhdWx0T3B0aW9ucyIsInpvb21lZENvbG9yIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInpvb21LZXkiLCJ1dGlsIiwiem9vbVNjYWxlIiwiem9vbUVsQ2xhc3NOYW1lIiwiekluZGV4Iiwic2Nyb2xsRWwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIk9iamVjdCIsImFzc2lnbiIsIl9jb21wdXRlT3B0aW9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInN0b3BNYXNrIiwic3RvcFpvb20iLCJzdGFydE1hc2siLCJzaGlmdEtleSIsInN0YXJ0Wm9vbSIsIm9uTW92ZSIsImJpbmQiLCJvblJlc2l6ZSIsIiRtYXNrIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwic2V0TWFzayIsImltYWdlQ3NzIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiJHpvb20iLCIkem9vbUNvbnRlbnQiLCJjbG9uZU5vZGUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwib3ZlcmZsb3ciLCJwYXJlbnROb2RlIiwiZWxSZWN0Iiwic2Nyb2xsVG9wIiwicGFyc2VJbnQiLCJzY3JvbGxMZWZ0Iiwic2V0Wm9vbSIsInNjYWxlIiwidG9wIiwibGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImFyciIsImZvckVhY2giLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwicmVtb3ZlQ2hpbGQiLCJFbGVtZW50IiwicHJvdG90eXBlIiwiQ2hhcmFjdGVyRGF0YSIsIkRvY3VtZW50VHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7OztBQ25FTyxJQUFNQSxRQUFRLFNBQVJBLEtBQVEsR0FBTTtBQUMxQixTQUFPQyxhQUFhQSxVQUFVQyxRQUFWLENBQW1CQyxXQUFuQixHQUFpQ0MsT0FBakMsQ0FBeUMsS0FBekMsS0FBbUQsQ0FBdkU7QUFDQSxDQUZN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QUsyQyxPQUFMO0FBQ0E7QUFDRDs7Ozs7Ozs7Ozs7O0FDcktGO0FBQ0EsQ0FBQyxVQUFVUSxHQUFWLEVBQWU7QUFDZkEsTUFBSUMsT0FBSixDQUFZLFVBQVVDLElBQVYsRUFBZ0I7QUFDM0IsUUFBSUEsS0FBS0MsY0FBTCxDQUFvQixRQUFwQixDQUFKLEVBQW1DO0FBQ2xDO0FBQ0E7O0FBQ0Q5QyxXQUFPK0MsY0FBUCxDQUFzQkYsSUFBdEIsRUFBNEIsUUFBNUIsRUFBc0M7QUFDckNHLG9CQUFjLElBRHVCO0FBRXJDQyxrQkFBWSxJQUZ5QjtBQUdyQ0MsZ0JBQVUsSUFIMkI7QUFJckNDLGFBQU8sU0FBUzdCLE1BQVQsR0FBa0I7QUFDeEIsWUFBSSxLQUFLUSxVQUFMLEtBQW9CLElBQXhCLEVBQ0MsS0FBS0EsVUFBTCxDQUFnQnNCLFdBQWhCLENBQTRCLElBQTVCO0FBQ0Q7QUFQb0MsS0FBdEM7QUFTQSxHQWJEO0FBY0EsQ0FmRCxFQWVHLENBQUNDLFFBQVFDLFNBQVQsRUFBb0JDLGNBQWNELFNBQWxDLEVBQTZDRSxhQUFhRixTQUExRCxDQWZILEUiLCJmaWxlIjoic3BvdGxpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3RcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCkgPT4ge1xuXHRyZXR1cm4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01BQycpID49IDA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWFza0JhY2tncm91bmQgPSAoeCwgeSwge3JhZGl1cywgZGltbWVkQ29sb3J9KSA9PiB7XG5cdHJldHVybiAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgdHJhbnNwYXJlbnQgJyArIHJhZGl1cyArICdweCwgJysgZGltbWVkQ29sb3IgKyAnIDApJztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpc01hYyxcblx0Z2V0TWFza0JhY2tncm91bmRcbn0iLCJpbXBvcnQge2lzTWFjfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBLRVlfQ09ERSA9IHtcblx0RVNDOiAyNyxcblx0U0hJRlQ6IDE2LFxuXHRDVFJMOiBpc01hYygpID8gOTE6IDE3XG59O1xuIiwiaW1wb3J0IHtLRVlfQ09ERX0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgXCIuL3BvbHlmaWxsXCJcblxuY2xhc3MgU3BvdExpZ2h0IHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdHRoaXMuY2hhbmdlT3B0aW9uKG9wdGlvbnMpO1xuXHRcdHRoaXMuX2F0dGFjaEV2ZW50KCk7XG5cdH1cblxuXHRfY29tcHV0ZU9wdGlvbnMob3B0aW9ucykge1xuXHRcdGxldCBlbCA9IG9wdGlvbnMuZWwgfHwgZG9jdW1lbnQuYm9keS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdGxldCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRcdGRpbW1lZENvbG9yOiBgcmdiYSgwLDAsMCwwLjQpYCxcblx0XHRcdHpvb21lZENvbG9yOiAnI2ZmZicgfHwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydiYWNrZ3JvdW5kQ29sb3InXSwgLy/snoTsi5wg7L2U65OcXG5cdFx0XHR6b29tS2V5OiB1dGlsLmlzTWFjKCk/ICdtZXRhS2V5JzogJ2N0cmxLZXknLFxuXHRcdFx0em9vbVNjYWxlOiAyLFxuXHRcdFx0em9vbUVsQ2xhc3NOYW1lOiAnc3BvdGxpZ2h0LXpvb20nLFxuXHRcdFx0ekluZGV4OiAxMDAwLFxuXHRcdFx0ZWw6IGVsLFxuXHRcdFx0c2Nyb2xsRWw6IGVsLFxuXHRcdFx0cmFkaXVzOiBvcHRpb25zLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gNixcblx0XHR9O1xuXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblx0fVxuXG5cdGNoYW5nZU9wdGlvbihvcHRpb25zKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gdGhpcy5fY29tcHV0ZU9wdGlvbnMob3B0aW9ucyk7XG5cdH1cblxuXHRfYXR0YWNoRXZlbnQoKSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuXHRcdFx0aWYgKEtFWV9DT0RFLlNISUZUID09PSBlLmtleUNvZGUpIHtcblx0XHRcdFx0dGhpcy5zdG9wTWFzaygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoS0VZX0NPREUuQ1RSTCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RvcFpvb20oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKEtFWV9DT0RFLlNISUZUID09PSBlLmtleUNvZGUpIHtcblx0XHRcdFx0dGhpcy5zdGFydE1hc2soKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGUuc2hpZnRLZXkgJiYgS0VZX0NPREUuQ1RSTCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRab29tKGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdmUuYmluZCh0aGlzKSk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHJlbW92ZSgpIHtcblxuXHR9XG5cblx0c3RhcnRNYXNrKCkge1xuXHRcdGlmKHRoaXMuJG1hc2spIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy4kbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuJG1hc2suY2xhc3NMaXN0LmFkZCgnc3BvdGxpZ2h0LW1hc2snKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuJG1hc2spO1xuXHRcdHRoaXMuc2V0TWFzaygpO1xuXHR9XG5cblx0c2V0TWFzaygpIHtcblx0XHRsZXQgaW1hZ2VDc3MgPSB1dGlsLmdldE1hc2tCYWNrZ3JvdW5kKHRoaXMueCwgdGhpcy55LCB0aGlzLm9wdGlvbnMpO1xuXHRcdHRoaXMuJG1hc2suc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6ICR7aW1hZ2VDc3N9OyBcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtJHtpbWFnZUNzc307XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRjdXJzb3I6IG5vbmU7XG5cdFx0XHR6LWluZGV4OiAke3RoaXMub3B0aW9ucy56SW5kZXh9YClcblx0fVxuXG5cdHN0b3BNYXNrKCkge1xuXHRcdHRoaXMuJG1hc2sgJiYgdGhpcy4kbWFzay5yZW1vdmUoKTtcblx0XHR0aGlzLnN0b3Bab29tKCk7XG5cdFx0dGhpcy4kbWFzayA9IG51bGw7XG5cdH1cblx0c3RhcnRab29tKCkge1xuXHRcdGlmKHRoaXMuJHpvb20pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy4kem9vbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuJHpvb20uY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMuem9vbUVsQ2xhc3NOYW1lKTtcblx0XHR0aGlzLiR6b29tQ29udGVudCA9IHRoaXMub3B0aW9ucy5lbC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc3BvdGxpZ2h0LXpvb20tY29udGVudCcpO1xuXHRcdHRoaXMuJHpvb20uc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdHdpZHRoOiAke3RoaXMub3B0aW9ucy5yYWRpdXMgKiAyfXB4OyBcblx0XHRcdGhlaWdodDogJHt0aGlzLm9wdGlvbnMucmFkaXVzICogMn1weDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtgXG5cdFx0KTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuXHRcdFx0d2lkdGg6ICR7dGhpcy5vcHRpb25zLmVsLm9mZnNldFdpZHRofXB4OyBcblx0XHRcdGhlaWdodDogJHt0aGlzLm9wdGlvbnMuZWwub2Zmc2V0SGVpZ2h0fXB4O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLm9wdGlvbnMuem9vbWVkQ29sb3J9O1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgke3RoaXMub3B0aW9ucy56b29tU2NhbGV9KTtcblx0XHRcdG92ZXJmbG93OiAke3RoaXMub3B0aW9ucy5lbC5zdHlsZS5vdmVyZmxvd307XG5cdFx0XHR6LWluZGV4OiAke3RoaXMub3B0aW9ucy56SW5kZXggKyAxfWBcblx0XHQpO1xuXG5cdFx0dGhpcy5vcHRpb25zLmVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLiR6b29tKTtcblx0XHR0aGlzLiR6b29tLmFwcGVuZENoaWxkKHRoaXMuJHpvb21Db250ZW50KTtcblx0XHR0aGlzLmVsUmVjdCA9IHRoaXMub3B0aW9ucy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zY3JvbGxUb3AgPSBwYXJzZUludCh0aGlzLm9wdGlvbnMuc2Nyb2xsRWwuc2Nyb2xsVG9wLCAxMCk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc2Nyb2xsTGVmdCA9IHBhcnNlSW50KHRoaXMub3B0aW9ucy5zY3JvbGxFbC5zY3JvbGxMZWZ0LCAxMCk7XG5cdFx0dGhpcy5zZXRab29tKCk7XG5cdH1cblxuXHRzZXRab29tKCkge1xuXHRcdGxldCBzY2FsZSA9IHRoaXMub3B0aW9ucy56b29tU2NhbGU7XG5cdFx0dGhpcy4kem9vbS5zdHlsZS50b3AgPSBgJHt0aGlzLnkgLSB0aGlzLm9wdGlvbnMucmFkaXVzIH1weGA7XG5cdFx0dGhpcy4kem9vbS5zdHlsZS5sZWZ0ID0gYCR7dGhpcy54IC0gdGhpcy5vcHRpb25zLnJhZGl1cyB9cHhgO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLnRvcCA9IGAkey0oc2NhbGUtIDEpICogKHRoaXMueSAtIHRoaXMuZWxSZWN0LnRvcCl9cHhgO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLmxlZnQgPSBgJHstKHNjYWxlIC0gMSkgKiAodGhpcy54IC0gdGhpcy5lbFJlY3QubGVmdCl9cHhgO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLm1hcmdpblRvcCA9IHRoaXMuZWxSZWN0LnRvcCArICdweCc7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc3R5bGUubWFyZ2luTGVmdCA9IHRoaXMuZWxSZWN0LmxlZnQgKyAncHgnO1xuXHR9XG5cblx0c3RvcFpvb20oKSB7XG5cdFx0dGhpcy4kem9vbSAmJiB0aGlzLiR6b29tLnJlbW92ZSgpO1xuXHRcdHRoaXMuJHpvb20gPSBudWxsO1xuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5lbFJlY3QgPSB0aGlzLm9wdGlvbnMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdH1cblxuXHRvbk1vdmUoZSkge1xuXHRcdHRoaXMueCA9IGUuY2xpZW50WDtcblx0XHR0aGlzLnkgPSBlLmNsaWVudFk7XG5cblx0XHRpZighdGhpcy4kbWFzaykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghZS5zaGlmdEtleSkge1xuXHRcdFx0dGhpcy5zdG9wTWFzaygpO1xuXHRcdH1cblxuXHRcdGlmICghZVt0aGlzLm9wdGlvbnMuem9vbUtleV0gJiYgdGhpcy4kem9vbSkge1xuXHRcdFx0dGhpcy5zdG9wWm9vbSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0TWFzaygpO1xuXG5cdFx0aWYgKGVbdGhpcy5vcHRpb25zLnpvb21LZXldKSB7XG5cdFx0XHR0aGlzLnNldFpvb20oKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHtTcG90TGlnaHR9XG4iLCIvLyBmcm9tOmh0dHBzOi8vZ2l0aHViLmNvbS9qc2Vyei9qc19waWVjZS9ibG9iL21hc3Rlci9ET00vQ2hpbGROb2RlL3JlbW92ZSgpL3JlbW92ZSgpLm1kXG4oZnVuY3Rpb24gKGFycikge1xuXHRhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdGlmIChpdGVtLmhhc093blByb3BlcnR5KCdyZW1vdmUnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXRlbSwgJ3JlbW92ZScsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhcmVudE5vZGUgIT09IG51bGwpXG5cdFx0XHRcdFx0dGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn0pKFtFbGVtZW50LnByb3RvdHlwZSwgQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsIERvY3VtZW50VHlwZS5wcm90b3R5cGVdKTsiXSwic291cmNlUm9vdCI6IiJ9