"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Main = _interopRequire(require("./components/Main"));

var App = (function (_React$Component) {
	function App() {
		_classCallCheck(this, App);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(App, _React$Component);

	_prototypeProperties(App, null, {
		render: {
			value: function render() {
				return React.createElement(Main, { page: this.props.page });
			},
			writable: true,
			configurable: true
		}
	});

	return App;
})(React.Component);

module.exports = App;