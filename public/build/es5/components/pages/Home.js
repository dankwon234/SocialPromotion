"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var SectionCard = _interopRequire(require("../../components/SectionCard"));

var Home = (function (_React$Component) {
	function Home(props, context) {
		_classCallCheck(this, Home);

		//		console.log('Home: constructor');
		_get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this, props, context);
		this.updateVisitor = this.updateVisitor.bind(this);
		this.state = {
			sections: [{ title: "First Section", description: "This is the description", image: "node.png" }, { title: "Second Section", description: "This is the description", image: "ios.jpg" }, { title: "Third Section", description: "This is the description", image: "node.png" }],
			visitor: {
				name: "",
				email: "",
				city: ""
			}
		};
	}

	_inherits(Home, _React$Component);

	_prototypeProperties(Home, null, {
		signUp: {
			value: function signUp(event) {
				event.preventDefault();
				console.log("Sign Up");
			},
			writable: true,
			configurable: true
		},
		updateVisitor: {
			value: function updateVisitor(event) {
				console.log("updateVisitor: " + event.target.value);
				this.state.visitor[event.target.id] = event.target.value;
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var sections = this.state.sections.map(function (section) {
					return React.createElement(SectionCard, { section: section });
				});

				return React.createElement(
					"div",
					{ className: "bg-gray" },
					React.createElement(
						"div",
						{ style: { background: "url(/images/bg-city.jpg)", backgroundRepeat: "no-repeat", paddingBottom: 12 } },
						React.createElement(
							"div",
							{ className: "container", style: { paddingTop: 140 } },
							React.createElement(
								"div",
								{ className: "row" },
								React.createElement(
									"div",
									{ className: "col-md-5" },
									React.createElement(
										"div",
										{ style: { padding: 36, textAlign: "center" } },
										React.createElement(
											"h2",
											{ style: { color: "#fff" } },
											"iOS Development Immersive"
										)
									)
								),
								React.createElement(
									"div",
									{ className: "col-md-4 col-md-push-3" },
									React.createElement(
										"div",
										{ className: "front-panel" },
										React.createElement(
											"h2",
											null,
											"Sign Up"
										),
										"The Full Stack 10-week coding bootcamp builds real projects for launch",
										React.createElement("input", { onChange: this.updateVisitor, id: "name", type: "text", placeholder: "Name", style: { background: "#f9f9f9", borderRadius: 3, marginTop: 9 }, className: "form-control" }),
										React.createElement("input", { type: "text", placeholder: "Email", style: { background: "#f9f9f9", borderRadius: 3, marginTop: 9 }, className: "form-control" }),
										React.createElement(
											"select",
											{ className: "form-control", style: { background: "#f9f9f9", height: 36 } },
											React.createElement(
												"option",
												null,
												"New York"
											),
											React.createElement(
												"option",
												null,
												"Boston"
											),
											React.createElement(
												"option",
												null,
												"San Francisco"
											)
										),
										React.createElement(
											"h3",
											{ style: { marginBottom: 12 } },
											"Next Cohort Begins March 7th"
										),
										React.createElement(
											"a",
											{ onClick: this.signUp, href: "#", className: "btn-primary btn btn-small button btn-round xs-margin-bottom-five" },
											"Learn More"
										)
									)
								)
							)
						)
					),
					React.createElement(
						"section",
						{ className: "bg-gray" },
						React.createElement(
							"div",
							{ className: "container" },
							React.createElement(
								"div",
								{ className: "row" },
								React.createElement(
									"div",
									{ className: "col-md-4" },
									React.createElement(
										"span",
										{ className: "title-large text-uppercase letter-spacing-1 font-weight-600 black-text" },
										"Cutting Edge Courses"
									),
									React.createElement("div", { className: "separator-line-thick bg-fast-pink no-margin-lr" }),
									React.createElement(
										"p",
										null,
										"The Full Stack conducts development courses that are relevant in the startup and tech world today. We focus on the most up-to-date frameworks and libraries such as React, Angular, and Node JS. Our students are always prepared for rapid changes in the industry and are ready to work in tech after a course."
									),
									React.createElement(
										"p",
										null,
										"Our courses come in three varieties: part time, online, and immersive. The part time courses are designed for busy professionals who are looking to become more well-versed in technology. The online courses are for those who learn at their own pace. The immersive courses are for those who aim to change careers and become professional programmers."
									),
									React.createElement(
										"a",
										{ href: "/courses", className: "btn-success btn btn-small button btn-round xs-margin-bottom-five" },
										"View All Courses"
									)
								),
								React.createElement(
									"div",
									{ className: "col-md-7 col-md-offset-1" },
									React.createElement(
										"div",
										{ className: "tab-style1" },
										React.createElement(
											"div",
											{ className: "tab-content" },
											React.createElement(
												"div",
												{ className: "tab-pane med-text fade in active", id: "tab_sec1" },
												React.createElement(
													"div",
													{ className: "row" },
													React.createElement(
														"div",
														{ className: "col-md-12 col-sm-12" },
														React.createElement(
															"div",
															{ className: "panel-group toggles-style3" },
															sections
														)
													)
												)
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

	return Home;
})(React.Component);

module.exports = Home;