'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestWrapper = function (_React$Component) {
  _inherits(TestWrapper, _React$Component);

  function TestWrapper(props) {
    _classCallCheck(this, TestWrapper);

    var _this = _possibleConstructorReturn(this, (TestWrapper.__proto__ || Object.getPrototypeOf(TestWrapper)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(TestWrapper, [{
    key: 'onClick',
    value: function onClick() {
      this.setState({ show: !this.state.show });
    }
  }, {
    key: 'render',
    value: function render() {
      var show = this.state.show;

      var _props = this.props,
          children = _props.children,
          other = _objectWithoutProperties(_props, ['children']);

      var child = _react2.default.Children.only(children);
      var ChildComponent = _react2.default.cloneElement(child, _extends({ show: show }, other));

      return _react2.default.createElement(
        'div',
        null,
        ChildComponent,
        _react2.default.createElement(
          'button',
          { onClick: this.onClick },
          'Toggle Show'
        )
      );
    }
  }]);

  return TestWrapper;
}(_react2.default.Component);

TestWrapper.propTypes = {
  children: _react2.default.PropTypes.element
};

exports.default = TestWrapper;