/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__app_css__);
/* global document */






var appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* App */], null), appRoot);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Component__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.onChangeTimeout = function (_ref) {
      var value = _ref.target.value;

      _this.setState({ timeout: parseInt(value, 10) });
    };

    _this.onToggleCallback = function () {
      var callback = _this.state.callback;


      _this.setState({ callback: callback === _this.inc1 ? _this.inc10 : _this.inc1 });
    };

    _this.onToggleDestroy = function () {
      var destroy = _this.state.destroy;


      _this.setState({ destroy: !destroy });
    };

    _this.onToggleInterval = function () {
      var enabled = _this.state.enabled;


      _this.setState({ enabled: !enabled });
    };

    _this.inc1 = function () {
      var count = _this.state.count;


      _this.setState({ count: count + 1 });
    };

    _this.inc10 = function () {
      var count = _this.state.count;


      _this.setState({ count: count + 10 });
    };

    _this.state = {
      callback: _this.inc1,
      destroy: false,
      enabled: false,
      timeout: 200,
      count: 0
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          destroy = _state.destroy,
          callback = _state.callback,
          timeout = _state.timeout,
          enabled = _state.enabled,
          count = _state.count;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'react-interval'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { background: destroy ? '#f1f2f3' : '#f1fef3', padding: 10 } },
          destroy ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_Component__["a" /* ReactInterval */], { timeout: timeout, enabled: enabled, callback: callback }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            max: '5000',
            min: '200',
            onChange: this.onChangeTimeout,
            step: '200',
            type: 'number',
            value: timeout }),
          '\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { disabled: callback === this.inc1, onClick: this.onToggleCallback },
            '+1'
          ),
          '\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { disabled: callback === this.inc10, onClick: this.onToggleCallback },
            '+10'
          ),
          '\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { disabled: enabled, onClick: this.onToggleInterval },
            'Start'
          ),
          '\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { disabled: !enabled, onClick: this.onToggleInterval },
            'Stop'
          ),
          '\xA0',
          count
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.onToggleDestroy },
          destroy ? 'Create Interval' : 'Destroy Interval'
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactInterval; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ReactInterval = function (_React$Component) {
  _inherits(ReactInterval, _React$Component);

  function ReactInterval() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactInterval);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactInterval.__proto__ || Object.getPrototypeOf(ReactInterval)).call.apply(_ref, [this].concat(args))), _this), _this.callback = function () {
      if (_this.timer) {
        _this.props.callback();
        _this.start();
      }
    }, _this.start = function () {
      _this.stop();
      _this.timer = setTimeout(_this.callback, _this.props.timeout);
    }, _this.stop = function () {
      clearTimeout(_this.timer);
      _this.timer = null;
    }, _this.render = function () {
      return false;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactInterval, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.enabled) {
        this.start();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref2) {
      var timeout = _ref2.timeout,
          callback = _ref2.callback,
          enabled = _ref2.enabled;

      return this.props.timeout !== timeout || this.props.callback !== callback || this.props.enabled !== enabled;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_ref3) {
      var enabled = _ref3.enabled;

      if (this.props.enabled !== enabled) {
        if (this.props.enabled) {
          this.start();
        } else {
          this.stop();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }]);

  return ReactInterval;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
ReactInterval.defaultProps = {
  enabled: false,
  timeout: 1000
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);