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
        zoomElClassName: 'spotlight-zoom-content',
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
      this.$zoom.classList.add('spotlight-zoom');
      this.$zoomContent = this.options.el.cloneNode(true);
      this.$zoomContent.classList.add(this.options.zoomElClassName);
      this.$zoom.setAttribute('style', "\n\t\t\twidth: ".concat(this.options.radius * 2, "px; \n\t\t\theight: ").concat(this.options.radius * 2, "px;\n\t\t\toverflow: hidden;\n\t\t\tborder-radius: 50%;\n\t\t\tdisplay: block;\n\t\t\tposition: fixed;"));
      this.$zoomContent.setAttribute('style', "\n\t\t\twidth: ".concat(this.options.el.offsetWidth, "px; \n\t\t\theight: ").concat(this.options.el.offsetHeight, "px;\n\t\t\tbackground-color: ").concat(this.options.zoomedColor, ";\n\t\t\tposition: fixed;\n\t\t\ttransform: scale(").concat(this.options.zoomScale, ");\n\t\t\toverflow: ").concat(this.options.el.style.overflow, ";\n\t\t\tz-index: ").concat(this.options.zIndex + 1)); //TODO: 임시코드

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
      this.$zoomContent.style.top = "".concat(this.y - this.options.radius, "px");
      this.$zoomContent.style.left = "".concat(this.x - this.options.radius, "px");
      this.$zoomContent.style.marginTop = -scale * (this.y - this.elRect.top) + this.options.el.offsetHeight * (scale - 1) / 2 + this.options.radius + 'px';
      this.$zoomContent.style.marginLeft = -scale * (this.x - this.elRect.left) + this.options.el.offsetWidth * (scale - 1) / 2 + this.options.radius + 'px';
    }
  }, {
    key: "stopZoom",
    value: function stopZoom() {
      this.$zoom && this.$zoom.remove();
      this.$zoom = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwuanMiXSwibmFtZXMiOlsiaXNNYWMiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInRvVXBwZXJDYXNlIiwiaW5kZXhPZiIsImdldE1hc2tCYWNrZ3JvdW5kIiwieCIsInkiLCJyYWRpdXMiLCJkaW1tZWRDb2xvciIsIktFWV9DT0RFIiwiRVNDIiwiU0hJRlQiLCJDVFJMIiwib3B0aW9ucyIsImNoYW5nZU9wdGlvbiIsIl9hdHRhY2hFdmVudCIsImVsIiwiZG9jdW1lbnQiLCJib2R5IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJkZWZhdWx0T3B0aW9ucyIsInpvb21lZENvbG9yIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInpvb21LZXkiLCJ1dGlsIiwiem9vbVNjYWxlIiwiem9vbUVsQ2xhc3NOYW1lIiwiekluZGV4Iiwic2Nyb2xsRWwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIk9iamVjdCIsImFzc2lnbiIsIl9jb21wdXRlT3B0aW9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInN0b3BNYXNrIiwic3RvcFpvb20iLCJzdGFydE1hc2siLCJzaGlmdEtleSIsInN0YXJ0Wm9vbSIsIm9uTW92ZSIsImJpbmQiLCIkbWFzayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldE1hc2siLCJpbWFnZUNzcyIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsIiR6b29tIiwiJHpvb21Db250ZW50IiwiY2xvbmVOb2RlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm92ZXJmbG93IiwicGFyZW50Tm9kZSIsImVsUmVjdCIsInNjcm9sbFRvcCIsInBhcnNlSW50Iiwic2Nyb2xsTGVmdCIsInNldFpvb20iLCJzY2FsZSIsInRvcCIsImxlZnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiY2xpZW50WCIsImNsaWVudFkiLCJhcnIiLCJmb3JFYWNoIiwiaXRlbSIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsInJlbW92ZUNoaWxkIiwiRWxlbWVudCIsInByb3RvdHlwZSIsIkNoYXJhY3RlckRhdGEiLCJEb2N1bWVudFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRU8sSUFBTUEsUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFDMUIsU0FBT0MsYUFBYUEsVUFBVUMsUUFBVixDQUFtQkMsV0FBbkIsR0FBaUNDLE9BQWpDLENBQXlDLEtBQXpDLEtBQW1ELENBQXZFO0FBQ0EsQ0FGTTtBQUlBLElBQU1D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LFdBQUtXLE9BQUw7O0FBRUEsVUFBSWQsRUFBRSxLQUFLdkIsT0FBTCxDQUFhVyxPQUFmLENBQUosRUFBNkI7QUFDNUIsYUFBSzBDLE9BQUw7QUFDQTtBQUNEOzs7Ozs7Ozs7Ozs7QUMvSkY7QUFDQSxDQUFDLFVBQVVRLEdBQVYsRUFBZTtBQUNmQSxNQUFJQyxPQUFKLENBQVksVUFBVUMsSUFBVixFQUFnQjtBQUMzQixRQUFJQSxLQUFLQyxjQUFMLENBQW9CLFFBQXBCLENBQUosRUFBbUM7QUFDbEM7QUFDQTs7QUFDRDdDLFdBQU84QyxjQUFQLENBQXNCRixJQUF0QixFQUE0QixRQUE1QixFQUFzQztBQUNyQ0csb0JBQWMsSUFEdUI7QUFFckNDLGtCQUFZLElBRnlCO0FBR3JDQyxnQkFBVSxJQUgyQjtBQUlyQ0MsYUFBTyxTQUFTN0IsTUFBVCxHQUFrQjtBQUN4QixZQUFJLEtBQUtRLFVBQUwsS0FBb0IsSUFBeEIsRUFDQyxLQUFLQSxVQUFMLENBQWdCc0IsV0FBaEIsQ0FBNEIsSUFBNUI7QUFDRDtBQVBvQyxLQUF0QztBQVNBLEdBYkQ7QUFjQSxDQWZELEVBZUcsQ0FBQ0MsUUFBUUMsU0FBVCxFQUFvQkMsY0FBY0QsU0FBbEMsRUFBNkNFLGFBQWFGLFNBQTFELENBZkgsRSIsImZpbGUiOiJzcG90bGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgaXNNYWMgPSAoKSA9PiB7XG5cdHJldHVybiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUFDJykgPj0gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNYXNrQmFja2dyb3VuZCA9ICh4LCB5LCB7cmFkaXVzLCBkaW1tZWRDb2xvcn0pID0+IHtcblx0cmV0dXJuICdyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCB0cmFuc3BhcmVudCAnICsgcmFkaXVzICsgJ3B4LCAnKyBkaW1tZWRDb2xvciArICcgMCknO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGlzTWFjLFxuXHRnZXRNYXNrQmFja2dyb3VuZFxufSIsImltcG9ydCB7aXNNYWN9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNvbnN0IEtFWV9DT0RFID0ge1xuXHRFU0M6IDI3LFxuXHRTSElGVDogMTYsXG5cdENUUkw6IGlzTWFjKCkgPyA5MTogMTdcbn07XG4iLCJpbXBvcnQge0tFWV9DT0RFfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBcIi4vcG9seWZpbGxcIlxuXG5jbGFzcyBTcG90TGlnaHQge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0dGhpcy5jaGFuZ2VPcHRpb24ob3B0aW9ucyk7XG5cdFx0dGhpcy5fYXR0YWNoRXZlbnQoKTtcblx0fVxuXG5cdF9jb21wdXRlT3B0aW9ucyhvcHRpb25zKSB7XG5cdFx0bGV0IGVsID0gb3B0aW9ucy5lbCB8fCBkb2N1bWVudC5ib2R5LmZpcnN0RWxlbWVudENoaWxkO1xuXG5cdFx0bGV0IGRlZmF1bHRPcHRpb25zID0ge1xuXHRcdFx0ZGltbWVkQ29sb3I6IGByZ2JhKDAsMCwwLDAuNClgLFxuXHRcdFx0em9vbWVkQ29sb3I6ICcjZmZmJyB8fCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ2JhY2tncm91bmRDb2xvciddLCAvL+yehOyLnCDsvZTrk5xcblx0XHRcdHpvb21LZXk6IHV0aWwuaXNNYWMoKT8gJ21ldGFLZXknOiAnY3RybEtleScsXG5cdFx0XHR6b29tU2NhbGU6IDIsXG5cdFx0XHR6b29tRWxDbGFzc05hbWU6ICdzcG90bGlnaHQtem9vbS1jb250ZW50Jyxcblx0XHRcdHpJbmRleDogMTAwMCxcblx0XHRcdGVsOiBlbCxcblx0XHRcdHNjcm9sbEVsOiBlbCxcblx0XHRcdHJhZGl1czogb3B0aW9ucy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDYsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cdH1cblxuXHRjaGFuZ2VPcHRpb24ob3B0aW9ucykge1xuXHRcdHRoaXMub3B0aW9ucyA9IHRoaXMuX2NvbXB1dGVPcHRpb25zKG9wdGlvbnMpO1xuXHR9XG5cblx0X2F0dGFjaEV2ZW50KCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0b3Bab29tKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRNYXNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlLnNoaWZ0S2V5ICYmIEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Wm9vbShlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3ZlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVtb3ZlKCkge1xuXG5cdH1cblxuXHRzdGFydE1hc2soKSB7XG5cdFx0aWYodGhpcy4kbWFzaykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLiRtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy4kbWFzay5jbGFzc0xpc3QuYWRkKCdzcG90bGlnaHQtbWFzaycpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy4kbWFzayk7XG5cdFx0dGhpcy5zZXRNYXNrKCk7XG5cdH1cblxuXHRzZXRNYXNrKCkge1xuXHRcdGxldCBpbWFnZUNzcyA9IHV0aWwuZ2V0TWFza0JhY2tncm91bmQodGhpcy54LCB0aGlzLnksIHRoaXMub3B0aW9ucyk7XG5cdFx0dGhpcy4kbWFzay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogJHtpbWFnZUNzc307IFxuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC0ke2ltYWdlQ3NzfTtcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGN1cnNvcjogbm9uZTtcblx0XHRcdHotaW5kZXg6ICR7dGhpcy5vcHRpb25zLnpJbmRleH1gKVxuXHR9XG5cblx0c3RvcE1hc2soKSB7XG5cdFx0dGhpcy4kbWFzayAmJiB0aGlzLiRtYXNrLnJlbW92ZSgpO1xuXHRcdHRoaXMuc3RvcFpvb20oKTtcblx0XHR0aGlzLiRtYXNrID0gbnVsbDtcblx0fVxuXHRzdGFydFpvb20oKSB7XG5cdFx0aWYodGhpcy4kem9vbSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLiR6b29tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy4kem9vbS5jbGFzc0xpc3QuYWRkKCdzcG90bGlnaHQtem9vbScpO1xuXHRcdHRoaXMuJHpvb21Db250ZW50ID0gdGhpcy5vcHRpb25zLmVsLmNsb25lTm9kZSh0cnVlKTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy56b29tRWxDbGFzc05hbWUpO1xuXHRcdHRoaXMuJHpvb20uc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdHdpZHRoOiAke3RoaXMub3B0aW9ucy5yYWRpdXMgKiAyfXB4OyBcblx0XHRcdGhlaWdodDogJHt0aGlzLm9wdGlvbnMucmFkaXVzICogMn1weDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtgXG5cdFx0KTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuXHRcdFx0d2lkdGg6ICR7dGhpcy5vcHRpb25zLmVsLm9mZnNldFdpZHRofXB4OyBcblx0XHRcdGhlaWdodDogJHt0aGlzLm9wdGlvbnMuZWwub2Zmc2V0SGVpZ2h0fXB4O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLm9wdGlvbnMuem9vbWVkQ29sb3J9O1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgke3RoaXMub3B0aW9ucy56b29tU2NhbGV9KTtcblx0XHRcdG92ZXJmbG93OiAke3RoaXMub3B0aW9ucy5lbC5zdHlsZS5vdmVyZmxvd307XG5cdFx0XHR6LWluZGV4OiAke3RoaXMub3B0aW9ucy56SW5kZXggKyAxfWBcblx0XHQpO1xuXHRcdC8vVE9ETzog7J6E7Iuc7L2U65OcXG5cdFx0dGhpcy5vcHRpb25zLmVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLiR6b29tKTtcblx0XHR0aGlzLiR6b29tLmFwcGVuZENoaWxkKHRoaXMuJHpvb21Db250ZW50KTtcblx0XHR0aGlzLmVsUmVjdCA9IHRoaXMub3B0aW9ucy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zY3JvbGxUb3AgPSBwYXJzZUludCh0aGlzLm9wdGlvbnMuc2Nyb2xsRWwuc2Nyb2xsVG9wLCAxMCk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc2Nyb2xsTGVmdCA9IHBhcnNlSW50KHRoaXMub3B0aW9ucy5zY3JvbGxFbC5zY3JvbGxMZWZ0LCAxMCk7XG5cdFx0dGhpcy5zZXRab29tKCk7XG5cdH1cblxuXHRzZXRab29tKCkge1xuXHRcdGxldCBzY2FsZSA9IHRoaXMub3B0aW9ucy56b29tU2NhbGU7XG5cdFx0dGhpcy4kem9vbS5zdHlsZS50b3AgPSBgJHt0aGlzLnkgLSB0aGlzLm9wdGlvbnMucmFkaXVzIH1weGA7XG5cdFx0dGhpcy4kem9vbS5zdHlsZS5sZWZ0ID0gYCR7dGhpcy54IC0gdGhpcy5vcHRpb25zLnJhZGl1cyB9cHhgO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLnRvcCA9IGAke3RoaXMueSAtIHRoaXMub3B0aW9ucy5yYWRpdXN9cHhgO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLmxlZnQgPSBgJHt0aGlzLnggLSB0aGlzLm9wdGlvbnMucmFkaXVzfXB4YDtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAtIHNjYWxlICogKHRoaXMueSAtIHRoaXMuZWxSZWN0LnRvcCkgKyB0aGlzLm9wdGlvbnMuZWwub2Zmc2V0SGVpZ2h0ICogKHNjYWxlIC0xKS8yICsgdGhpcy5vcHRpb25zLnJhZGl1cyArICdweCc7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc3R5bGUubWFyZ2luTGVmdCA9IC0gc2NhbGUgKiAodGhpcy54IC0gdGhpcy5lbFJlY3QubGVmdCkgKyB0aGlzLm9wdGlvbnMuZWwub2Zmc2V0V2lkdGggKiAoc2NhbGUgLTEpLzIgKyB0aGlzLm9wdGlvbnMucmFkaXVzICsgJ3B4Jztcblx0fVxuXG5cdHN0b3Bab29tKCkge1xuXHRcdHRoaXMuJHpvb20gJiYgdGhpcy4kem9vbS5yZW1vdmUoKTtcblx0XHR0aGlzLiR6b29tID0gbnVsbDtcblx0fVxuXG5cdG9uTW92ZShlKSB7XG5cdFx0dGhpcy54ID0gZS5jbGllbnRYO1xuXHRcdHRoaXMueSA9IGUuY2xpZW50WTtcblxuXHRcdGlmKCF0aGlzLiRtYXNrKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFlLnNoaWZ0S2V5KSB7XG5cdFx0XHR0aGlzLnN0b3BNYXNrKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFlW3RoaXMub3B0aW9ucy56b29tS2V5XSAmJiB0aGlzLiR6b29tKSB7XG5cdFx0XHR0aGlzLnN0b3Bab29tKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRNYXNrKCk7XG5cblx0XHRpZiAoZVt0aGlzLm9wdGlvbnMuem9vbUtleV0pIHtcblx0XHRcdHRoaXMuc2V0Wm9vbSgpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQge1Nwb3RMaWdodH1cbiIsIi8vIGZyb206aHR0cHM6Ly9naXRodWIuY29tL2pzZXJ6L2pzX3BpZWNlL2Jsb2IvbWFzdGVyL0RPTS9DaGlsZE5vZGUvcmVtb3ZlKCkvcmVtb3ZlKCkubWRcbihmdW5jdGlvbiAoYXJyKSB7XG5cdGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0aWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ3JlbW92ZScpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAncmVtb3ZlJywge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFyZW50Tm9kZSAhPT0gbnVsbClcblx0XHRcdFx0XHR0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufSkoW0VsZW1lbnQucHJvdG90eXBlLCBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pOyJdLCJzb3VyY2VSb290IjoiIn0=