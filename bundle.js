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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Component = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      callback: _this.inc1,
      destroy: false,
      enabled: false,
      timeout: 200,
      count: 0
    }, _this.onChangeTimeout = function (_ref2) {
      var value = _ref2.target.value;

      _this.setState({ timeout: parseInt(value, 10) });
    }, _this.onToggleCallback = function () {
      var callback = _this.state.callback;


      _this.setState({ callback: callback === _this.inc1 ? _this.inc10 : _this.inc1 });
    }, _this.onToggleDestroy = function () {
      var destroy = _this.state.destroy;


      _this.setState({ destroy: !destroy });
    }, _this.onToggleInterval = function () {
      var enabled = _this.state.enabled;


      _this.setState({ enabled: !enabled });
    }, _this.inc1 = function () {
      var count = _this.state.count;


      _this.setState({ count: count + 1 });
    }, _this.inc10 = function () {
      var count = _this.state.count;


      _this.setState({ count: count + 10 });
    }, _temp), _possibleConstructorReturn(_this, _ret);
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


      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'h1',
          null,
          'react-interval'
        ),
        _react2.default.createElement(
          'div',
          { style: { background: destroy ? '#f1f2f3' : '#f1fef3', padding: 10 } },
          destroy ? null : _react2.default.createElement(_Component.ReactInterval, { timeout: timeout, enabled: enabled, callback: callback }),
          _react2.default.createElement('input', {
            max: '5000',
            min: '200',
            onChange: this.onChangeTimeout,
            step: '200',
            type: 'number',
            value: timeout }),
          '\xA0',
          _react2.default.createElement(
            'button',
            { disabled: callback === this.inc1, onClick: this.onToggleCallback },
            '+1'
          ),
          '\xA0',
          _react2.default.createElement(
            'button',
            { disabled: callback === this.inc10, onClick: this.onToggleCallback },
            '+10'
          ),
          '\xA0',
          _react2.default.createElement(
            'button',
            { disabled: enabled, onClick: this.onToggleInterval },
            'Start'
          ),
          '\xA0',
          _react2.default.createElement(
            'button',
            { disabled: !enabled, onClick: this.onToggleInterval },
            'Stop'
          ),
          '\xA0',
          count
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { onClick: this.onToggleDestroy },
          destroy ? 'Create Interval' : 'Destroy Interval'
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(1);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */

var appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
_reactDom2.default.render(_react2.default.createElement(_App.App, null), appRoot);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactInterval = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactInterval = exports.ReactInterval = function (_React$Component) {
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
  }, {
    key: 'render',
    value: function render() {
      return false;
    }
  }]);

  return ReactInterval;
}(_react2.default.Component);

ReactInterval.defaultProps = {
  enabled: false,
  timeout: 1000
};

/***/ })
/******/ ]);