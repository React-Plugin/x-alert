"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _xDialog = require("x-dialog");

var _xDialog2 = _interopRequireDefault(_xDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Visual Studio Code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * github: https://github.com/React-Plugin/x-alert
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2017-05-26
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 20:00:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.state = { isShow: false };
    return _this;
  }

  _createClass(Alert, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.isShow && !this.state.isShow) {
        this.setState({ isShow: true });
      } else if (!newProps.isShow && this.state.isShow) {
        this.setState({ isShow: false });
      }
    }
  }, {
    key: "okCallback",
    value: function okCallback() {
      this.props.okCallback();
      this.setState({ isShow: false });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.type === "alert") {
        this.buttons = _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "button",
            { className: "d-ok", onClick: this.okCallback.bind(this) },
            this.props.btnText || '知道了'
          )
        );
        this.title = this.props.title;
      } else if (this.props.type === "toast") {
        this.buttons = false;
        this.timer = this.props.timer || 2000;
        this.title = undefined;
      } else {
        this.buttons = false;
        this.title = undefined;
        this.timer = this.props.timer || 2000;
      }
      return _react2.default.createElement(
        _xDialog2.default,
        _extends({}, this.props, {
          title: this.title,
          timer: this.timer,
          className: this.props.className + " " + this.props.type,
          isShow: this.state.isShow,
          buttons: this.buttons,
          closeIcon: this.props.closeIcon
        }),
        this.props.children
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.propTypes = {
  msg: _propTypes2.default.string,
  isShow: _propTypes2.default.bool,
  title: _propTypes2.default.node,
  className: _propTypes2.default.string,
  buttons: _propTypes2.default.node,
  type: _propTypes2.default.string,
  closeIcon: _propTypes2.default.string
};
Alert.defaultProps = {
  title: undefined,
  okCallback: function okCallback() {},
  type: "alert",
  closeIcon: "",
  className: ''
};
exports.default = Alert;