"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Nav = (function (_React$Component) {
	function Nav() {
		_classCallCheck(this, Nav);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Nav, _React$Component);

	_prototypeProperties(Nav, null, {
		render: {
			value: function render() {
				return React.createElement(
					"nav",
					{ className: "navbar navbar-default navbar-fixed-top nav-transparent overlay-nav sticky-nav nav-white nav-dark-transparent static-sticky", role: "navigation" },
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "col-md-2 pull-left" },
								React.createElement(
									"a",
									{ className: "logo-light", href: "/" },
									React.createElement("img", { style: { maxWidth: 200 }, alt: "", src: "/images/logo-white.png" })
								)
							),
							React.createElement(
								"div",
								{ className: "navbar-header col-sm-8 col-xs-2 pull-right" },
								React.createElement(
									"button",
									{ type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-collapse" },
									" ",
									React.createElement(
										"span",
										{ className: "sr-only" },
										"Toggle navigation"
									),
									" ",
									React.createElement("span", { className: "icon-bar" }),
									" ",
									React.createElement("span", { className: "icon-bar" }),
									" ",
									React.createElement("span", { className: "icon-bar" }),
									" "
								)
							),
							React.createElement(
								"div",
								{ className: "col-md-10 no-padding-right accordion-menu text-right" },
								React.createElement(
									"div",
									{ className: "navbar-collapse collapse" },
									React.createElement(
										"ul",
										{ id: "accordion", className: "nav navbar-nav navbar-right panel-group" },
										React.createElement(
											"li",
											{ className: "dropdown panel" },
											React.createElement(
												"a",
												{ href: "/about", className: "dropdown-toggle collapsed" },
												"About"
											)
										),
										React.createElement(
											"li",
											{ className: "dropdown panel" },
											React.createElement(
												"a",
												{ href: "/join", className: "dropdown-toggle collapsed" },
												"Join"
											)
										),
										React.createElement(
											"li",
											{ className: "dropdown panel" },
											React.createElement(
												"a",
												{ onClick: this.openModal, href: "#", className: "dropdown-toggle collapsed" },
												"Login"
											)
										)
									)
								)
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Nav;
})(React.Component);

module.exports = Nav;