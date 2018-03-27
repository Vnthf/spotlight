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
      this.$zoomContent.classList.add('spotlight-zoom-content');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwuanMiXSwibmFtZXMiOlsiaXNNYWMiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInRvVXBwZXJDYXNlIiwiaW5kZXhPZiIsImdldE1hc2tCYWNrZ3JvdW5kIiwieCIsInkiLCJyYWRpdXMiLCJkaW1tZWRDb2xvciIsIktFWV9DT0RFIiwiRVNDIiwiU0hJRlQiLCJDVFJMIiwib3B0aW9ucyIsImNoYW5nZU9wdGlvbiIsIl9hdHRhY2hFdmVudCIsImVsIiwiZG9jdW1lbnQiLCJib2R5IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJkZWZhdWx0T3B0aW9ucyIsInpvb21lZENvbG9yIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInpvb21LZXkiLCJ1dGlsIiwiem9vbVNjYWxlIiwiekluZGV4Iiwic2Nyb2xsRWwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIk9iamVjdCIsImFzc2lnbiIsIl9jb21wdXRlT3B0aW9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInN0b3BNYXNrIiwic3RvcFpvb20iLCJzdGFydE1hc2siLCJzaGlmdEtleSIsInN0YXJ0Wm9vbSIsIm9uTW92ZSIsImJpbmQiLCIkbWFzayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldE1hc2siLCJpbWFnZUNzcyIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsIiR6b29tIiwiJHpvb21Db250ZW50IiwiY2xvbmVOb2RlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm92ZXJmbG93IiwicGFyZW50Tm9kZSIsImVsUmVjdCIsInNjcm9sbFRvcCIsInBhcnNlSW50Iiwic2Nyb2xsTGVmdCIsInNldFpvb20iLCJzY2FsZSIsInRvcCIsImxlZnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiY2xpZW50WCIsImNsaWVudFkiLCJhcnIiLCJmb3JFYWNoIiwiaXRlbSIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsInJlbW92ZUNoaWxkIiwiRWxlbWVudCIsInByb3RvdHlwZSIsIkNoYXJhY3RlckRhdGEiLCJEb2N1bWVudFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRU8sSUFBTUEsUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFDMUIsU0FBT0MsYUFBYUEsVUFBVUMsUUFBVixDQUFtQkMsV0FBbkIsR0FBaUNDLE9BQWpDLENBQXlDLEtBQXpDLEtBQW1ELENBQXZFO0FBQ0EsQ0FGTTtBQUlBLElBQU1DLG9CQUFvQixTQUFwQkEsaUJB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QUE2QjtBQUM1QixhQUFLeUMsT0FBTDtBQUNBO0FBQ0Q7Ozs7Ozs7Ozs7OztBQzlKRjtBQUNBLENBQUMsVUFBVVEsR0FBVixFQUFlO0FBQ2ZBLE1BQUlDLE9BQUosQ0FBWSxVQUFVQyxJQUFWLEVBQWdCO0FBQzNCLFFBQUlBLEtBQUtDLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBSixFQUFtQztBQUNsQztBQUNBOztBQUNEN0MsV0FBTzhDLGNBQVAsQ0FBc0JGLElBQXRCLEVBQTRCLFFBQTVCLEVBQXNDO0FBQ3JDRyxvQkFBYyxJQUR1QjtBQUVyQ0Msa0JBQVksSUFGeUI7QUFHckNDLGdCQUFVLElBSDJCO0FBSXJDQyxhQUFPLFNBQVM3QixNQUFULEdBQWtCO0FBQ3hCLFlBQUksS0FBS1EsVUFBTCxLQUFvQixJQUF4QixFQUNDLEtBQUtBLFVBQUwsQ0FBZ0JzQixXQUFoQixDQUE0QixJQUE1QjtBQUNEO0FBUG9DLEtBQXRDO0FBU0EsR0FiRDtBQWNBLENBZkQsRUFlRyxDQUFDQyxRQUFRQyxTQUFULEVBQW9CQyxjQUFjRCxTQUFsQyxFQUE2Q0UsYUFBYUYsU0FBMUQsQ0FmSCxFIiwiZmlsZSI6InNwb3RsaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0XCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjb25zdCBpc01hYyA9ICgpID0+IHtcblx0cmV0dXJuIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQUMnKSA+PSAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1hc2tCYWNrZ3JvdW5kID0gKHgsIHksIHtyYWRpdXMsIGRpbW1lZENvbG9yfSkgPT4ge1xuXHRyZXR1cm4gJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHRyYW5zcGFyZW50ICcgKyByYWRpdXMgKyAncHgsICcrIGRpbW1lZENvbG9yICsgJyAwKSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aXNNYWMsXG5cdGdldE1hc2tCYWNrZ3JvdW5kXG59IiwiaW1wb3J0IHtpc01hY30gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3QgS0VZX0NPREUgPSB7XG5cdEVTQzogMjcsXG5cdFNISUZUOiAxNixcblx0Q1RSTDogaXNNYWMoKSA/IDkxOiAxN1xufTtcbiIsImltcG9ydCB7S0VZX0NPREV9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IFwiLi9wb2x5ZmlsbFwiXG5cbmNsYXNzIFNwb3RMaWdodCB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHR0aGlzLmNoYW5nZU9wdGlvbihvcHRpb25zKTtcblx0XHR0aGlzLl9hdHRhY2hFdmVudCgpO1xuXHR9XG5cblx0X2NvbXB1dGVPcHRpb25zKG9wdGlvbnMpIHtcblx0XHRsZXQgZWwgPSBvcHRpb25zLmVsIHx8IGRvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cblx0XHRsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0XHRkaW1tZWRDb2xvcjogYHJnYmEoMCwwLDAsMC40KWAsXG5cdFx0XHR6b29tZWRDb2xvcjogJyNmZmYnIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVsnYmFja2dyb3VuZENvbG9yJ10sIC8v7J6E7IucIOy9lOuTnFxuXHRcdFx0em9vbUtleTogdXRpbC5pc01hYygpPyAnbWV0YUtleSc6ICdjdHJsS2V5Jyxcblx0XHRcdHpvb21TY2FsZTogMixcblx0XHRcdHpJbmRleDogMTAwMCxcblx0XHRcdGVsOiBlbCxcblx0XHRcdHNjcm9sbEVsOiBlbCxcblx0XHRcdHJhZGl1czogb3B0aW9ucy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDYsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cdH1cblxuXHRjaGFuZ2VPcHRpb24ob3B0aW9ucykge1xuXHRcdHRoaXMub3B0aW9ucyA9IHRoaXMuX2NvbXB1dGVPcHRpb25zKG9wdGlvbnMpO1xuXHR9XG5cblx0X2F0dGFjaEV2ZW50KCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0b3Bab29tKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChLRVlfQ09ERS5TSElGVCA9PT0gZS5rZXlDb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRNYXNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlLnNoaWZ0S2V5ICYmIEtFWV9DT0RFLkNUUkwgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Wm9vbShlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3ZlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVtb3ZlKCkge1xuXG5cdH1cblxuXHRzdGFydE1hc2soKSB7XG5cdFx0aWYodGhpcy4kbWFzaykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLiRtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy4kbWFzay5jbGFzc0xpc3QuYWRkKCdzcG90bGlnaHQtbWFzaycpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy4kbWFzayk7XG5cdFx0dGhpcy5zZXRNYXNrKCk7XG5cdH1cblxuXHRzZXRNYXNrKCkge1xuXHRcdGxldCBpbWFnZUNzcyA9IHV0aWwuZ2V0TWFza0JhY2tncm91bmQodGhpcy54LCB0aGlzLnksIHRoaXMub3B0aW9ucyk7XG5cdFx0dGhpcy4kbWFzay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogJHtpbWFnZUNzc307IFxuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC0ke2ltYWdlQ3NzfTtcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGN1cnNvcjogbm9uZTtcblx0XHRcdHotaW5kZXg6ICR7dGhpcy5vcHRpb25zLnpJbmRleH1gKVxuXHR9XG5cblx0c3RvcE1hc2soKSB7XG5cdFx0dGhpcy4kbWFzayAmJiB0aGlzLiRtYXNrLnJlbW92ZSgpO1xuXHRcdHRoaXMuc3RvcFpvb20oKTtcblx0XHR0aGlzLiRtYXNrID0gbnVsbDtcblx0fVxuXHRzdGFydFpvb20oKSB7XG5cdFx0aWYodGhpcy4kem9vbSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLiR6b29tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy4kem9vbS5jbGFzc0xpc3QuYWRkKCdzcG90bGlnaHQtem9vbScpO1xuXHRcdHRoaXMuJHpvb21Db250ZW50ID0gdGhpcy5vcHRpb25zLmVsLmNsb25lTm9kZSh0cnVlKTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzcG90bGlnaHQtem9vbS1jb250ZW50Jyk7XG5cdFx0dGhpcy4kem9vbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuXHRcdFx0d2lkdGg6ICR7dGhpcy5vcHRpb25zLnJhZGl1cyAqIDJ9cHg7IFxuXHRcdFx0aGVpZ2h0OiAke3RoaXMub3B0aW9ucy5yYWRpdXMgKiAyfXB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO2Bcblx0XHQpO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG5cdFx0XHR3aWR0aDogJHt0aGlzLm9wdGlvbnMuZWwub2Zmc2V0V2lkdGh9cHg7IFxuXHRcdFx0aGVpZ2h0OiAke3RoaXMub3B0aW9ucy5lbC5vZmZzZXRIZWlnaHR9cHg7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMub3B0aW9ucy56b29tZWRDb2xvcn07XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKCR7dGhpcy5vcHRpb25zLnpvb21TY2FsZX0pO1xuXHRcdFx0b3ZlcmZsb3c6ICR7dGhpcy5vcHRpb25zLmVsLnN0eWxlLm92ZXJmbG93fTtcblx0XHRcdHotaW5kZXg6ICR7dGhpcy5vcHRpb25zLnpJbmRleCArIDF9YFxuXHRcdCk7XG5cdFx0Ly9UT0RPOiDsnoTsi5zsvZTrk5xcblx0XHR0aGlzLm9wdGlvbnMuZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuJHpvb20pO1xuXHRcdHRoaXMuJHpvb20uYXBwZW5kQ2hpbGQodGhpcy4kem9vbUNvbnRlbnQpO1xuXHRcdHRoaXMuZWxSZWN0ID0gdGhpcy5vcHRpb25zLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnNjcm9sbFRvcCA9IHBhcnNlSW50KHRoaXMub3B0aW9ucy5zY3JvbGxFbC5zY3JvbGxUb3AsIDEwKTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zY3JvbGxMZWZ0ID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLnNjcm9sbEVsLnNjcm9sbExlZnQsIDEwKTtcblx0XHR0aGlzLnNldFpvb20oKTtcblx0fVxuXG5cdHNldFpvb20oKSB7XG5cdFx0bGV0IHNjYWxlID0gdGhpcy5vcHRpb25zLnpvb21TY2FsZTtcblx0XHR0aGlzLiR6b29tLnN0eWxlLnRvcCA9IGAke3RoaXMueSAtIHRoaXMub3B0aW9ucy5yYWRpdXMgfXB4YDtcblx0XHR0aGlzLiR6b29tLnN0eWxlLmxlZnQgPSBgJHt0aGlzLnggLSB0aGlzLm9wdGlvbnMucmFkaXVzIH1weGA7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc3R5bGUudG9wID0gYCR7dGhpcy55IC0gdGhpcy5vcHRpb25zLnJhZGl1c31weGA7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc3R5bGUubGVmdCA9IGAke3RoaXMueCAtIHRoaXMub3B0aW9ucy5yYWRpdXN9cHhgO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLm1hcmdpblRvcCA9IC0gc2NhbGUgKiAodGhpcy55IC0gdGhpcy5lbFJlY3QudG9wKSArIHRoaXMub3B0aW9ucy5lbC5vZmZzZXRIZWlnaHQgKiAoc2NhbGUgLTEpLzIgKyB0aGlzLm9wdGlvbnMucmFkaXVzICsgJ3B4Jztcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBzY2FsZSAqICh0aGlzLnggLSB0aGlzLmVsUmVjdC5sZWZ0KSArIHRoaXMub3B0aW9ucy5lbC5vZmZzZXRXaWR0aCAqIChzY2FsZSAtMSkvMiArIHRoaXMub3B0aW9ucy5yYWRpdXMgKyAncHgnO1xuXHR9XG5cblx0c3RvcFpvb20oKSB7XG5cdFx0dGhpcy4kem9vbSAmJiB0aGlzLiR6b29tLnJlbW92ZSgpO1xuXHRcdHRoaXMuJHpvb20gPSBudWxsO1xuXHR9XG5cblx0b25Nb3ZlKGUpIHtcblx0XHR0aGlzLnggPSBlLmNsaWVudFg7XG5cdFx0dGhpcy55ID0gZS5jbGllbnRZO1xuXG5cdFx0aWYoIXRoaXMuJG1hc2spIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIWUuc2hpZnRLZXkpIHtcblx0XHRcdHRoaXMuc3RvcE1hc2soKTtcblx0XHR9XG5cblx0XHRpZiAoIWVbdGhpcy5vcHRpb25zLnpvb21LZXldICYmIHRoaXMuJHpvb20pIHtcblx0XHRcdHRoaXMuc3RvcFpvb20oKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldE1hc2soKTtcblxuXHRcdGlmIChlW3RoaXMub3B0aW9ucy56b29tS2V5XSkge1xuXHRcdFx0dGhpcy5zZXRab29tKCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCB7U3BvdExpZ2h0fVxuIiwiLy8gZnJvbTpodHRwczovL2dpdGh1Yi5jb20vanNlcnovanNfcGllY2UvYmxvYi9tYXN0ZXIvRE9NL0NoaWxkTm9kZS9yZW1vdmUoKS9yZW1vdmUoKS5tZFxuKGZ1bmN0aW9uIChhcnIpIHtcblx0YXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGl0ZW0sICdyZW1vdmUnLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHRcdFx0XHRpZiAodGhpcy5wYXJlbnROb2RlICE9PSBudWxsKVxuXHRcdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59KShbRWxlbWVudC5wcm90b3R5cGUsIENoYXJhY3RlckRhdGEucHJvdG90eXBlLCBEb2N1bWVudFR5cGUucHJvdG90eXBlXSk7Il0sInNvdXJjZVJvb3QiOiIifQ==