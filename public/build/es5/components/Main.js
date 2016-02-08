"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Nav = _interopRequire(require("../components/Nav"));

var Footer = _interopRequire(require("../components/Footer"));

var Home = _interopRequire(require("../components/pages/Home"));

var Posts = _interopRequire(require("../components/pages/Posts"));

var Main = (function (_React$Component) {
	function Main() {
		_classCallCheck(this, Main);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Main, _React$Component);

	_prototypeProperties(Main, null, {
		initialState: {
			value: function initialState() {
				return {};
			},
			writable: true,
			configurable: true
		},
		defaultProps: {
			value: function defaultProps() {
				return {};
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var content = null;

				if (this.props.page == "home") {
					content = React.createElement(Home, null);
				}
				if (this.props.page == "posts") {
					content = React.createElement(Posts, null);
				}


				return React.createElement(
					"div",
					null,
					React.createElement(Nav, null),
					content,
					React.createElement(Footer, null)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Main;
})(React.Component);

module.exports = Main;