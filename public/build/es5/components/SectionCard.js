"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var SectionCard = (function (_React$Component) {
	function SectionCard() {
		_classCallCheck(this, SectionCard);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(SectionCard, _React$Component);

	_prototypeProperties(SectionCard, null, {
		render: {
			value: function render() {
				var interests = this.props.profile.interests.map(function (interest) {
					return React.createElement(
						"span",
						{ key: interest, className: "tag" },
						interest
					);
				});


				return React.createElement(
					"div",
					{ className: "panel panel-default", style: { paddingTop: 24, background: "#fff" } },
					React.createElement(
						"div",
						{ id: "collapse-three-link1", className: "panel-collapse collapse in" },
						React.createElement(
							"div",
							{ className: "panel-body" },
							React.createElement(
								"div",
								{ className: "col-md-2 col-sm-2 col-xs-6 no-padding xs-margin-bottom-five" },
								React.createElement("img", { src: "/images/" + this.props.profile.image, alt: "", style: { border: "1px solid #ddd" }, className: "white-round-border spa-packages-img" })
							),
							React.createElement(
								"div",
								{ className: "col-md-9 col-sm-9 col-xs-12 sm-pull-right col-md-offset-1 no-padding" },
								React.createElement(
									"h2",
									null,
									this.props.profile.name
								),
								React.createElement(
									"p",
									null,
									"NYC | Angular JS Developer"
								),
								interests
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return SectionCard;
})(React.Component);

module.exports = SectionCard;