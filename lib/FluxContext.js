"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createReactClass = _interopRequireDefault(require("create-react-class"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _createReactClass["default"])({
  displayName: "FluxContext",
  childContextTypes: {
    flux: _propTypes["default"].object
  },
  getChildContext: function getChildContext() {
    return {
      flux: this.props.flux
    };
  },
  render: function render() {
    return this.props.children;
  }
});

exports["default"] = _default;