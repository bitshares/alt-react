"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createReactClass = _interopRequireDefault(require("create-react-class"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(flux) {
  return function (Component) {
    return (0, _createReactClass["default"])({
      childContextTypes: {
        flux: _propTypes["default"].object
      },
      getChildContext: function getChildContext() {
        return {
          flux: flux
        };
      },
      render: function render() {
        return /*#__PURE__*/_react["default"].createElement(Component, this.props);
      }
    });
  };
};

exports["default"] = _default;