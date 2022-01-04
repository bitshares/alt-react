"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Connect = /*#__PURE__*/function (_React$Component) {
  _inherits(Connect, _React$Component);

  var _super = _createSuper(Connect);

  function Connect() {
    _classCallCheck(this, Connect);

    return _super.apply(this, arguments);
  }

  _createClass(Connect, [{
    key: "setConnections",
    value: function setConnections(props, context) {
      var _this = this;

      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.flux = props.flux || context.flux;
      this.stores = this.flux ? this.flux.stores : {};
      this.config = typeof config === 'function' ? config(this.stores, this.flux) : config;

      this.cb = function () {
        _this.forceUpdate();
      };
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.config.willMount) this.call(this.config.willMount);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var stores = this.config.listenTo ? this.call(this.config.listenTo) : [];
      stores.forEach(function (store) {
        store.listen(_this2.cb);
      });
      if (this.config.didMount) this.call(this.config.didMount);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      var stores = this.config.listenTo ? this.call(this.config.listenTo) : [];
      stores.forEach(function (store) {
        return store.unlisten(_this3.cb);
      });
      if (this.config.willUnmount) this.call(this.config.willUnmount);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.config.willReceiveProps) this.call(this.config.willReceiveProps);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.config.shouldComponentUpdate ? this.call(this.config.shouldComponentUpdate, nextProps) : true;
    }
  }, {
    key: "getNextProps",
    value: function getNextProps() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return this.config.getProps ? this.call(this.config.getProps, nextProps) : nextProps;
    }
  }, {
    key: "call",
    value: function call(f) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
      return f(props, this.context, this.flux);
    }
  }, {
    key: "render",
    value: function render() {
      throw new Error('Render should be defined in your own class');
    }
  }]);

  return Connect;
}(_react["default"].Component);

exports["default"] = Connect;

_defineProperty(Connect, "contextTypes", {
  flux: _propTypes["default"].object
});