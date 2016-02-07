"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var SectionCard = _interopRequire(require("../../components/SectionCard"));

var PostCard = _interopRequire(require("../../components/PostCard"));

var SPActionCreator = _interopRequire(require("../../actions/SPActionCreator"));

var Home = (function (_React$Component) {
	function Home(props, context) {
		_classCallCheck(this, Home);

		//		console.log('Home: constructor');
		_get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this, props, context);
		this.updateVisitor = this.updateVisitor.bind(this);
		this.signUp = this.signUp.bind(this);
		this.selectLocation = this.selectLocation.bind(this);
		this.state = {
			posts: [{ id: 1, type: "Job", title: "Hiring Software Intern", company: "Bedrocket Media", description: "This is the description. This is the description. This is the description. This is the description. This is the description.", location: "NYC", tags: ["programming", "Angular JS"], image: "catherine.png" }, { id: 2, type: "Rental", title: "Apartment Available", company: "", description: "This is the description. This is the description. This is the description. This is the description. This is the description.", location: "NYC", tags: ["programming", "Angular JS"], image: "catherine.png" }, { id: 3, type: "Event", title: "Startup Investing Workshop", company: "Bedrocket Media", description: "This is the description. This is the description. This is the description. This is the description. This is the description.", location: "NYC", tags: ["programming", "Angular JS"], image: "catherine.png" }, { id: 4, type: "General", title: "Software Intern", company: "Bedrocket Media", description: "This is the description. This is the description. This is the description. This is the description. This is the description.", location: "NYC", tags: ["programming", "Angular JS"], image: "catherine.png" }],
			visitor: {
				name: "",
				email: "",
				city: "new york"
			}
		};
	}

	_inherits(Home, _React$Component);

	_prototypeProperties(Home, null, {
		signUp: {
			value: function signUp(event) {
				event.preventDefault();
				console.log("Sign Up: " + JSON.stringify(this.state.visitor));
				if (this.state.visitor.name.length == 0) {
					alert("Please enter your NAME");
					return;
				}

				if (this.state.visitor.email.length == 0) {
					alert("Please enter your EMAIL");
					return;
				}

				SPActionCreator.registerProfile(this.state.visitor);
			},
			writable: true,
			configurable: true
		},
		selectLocation: {
			value: function selectLocation(event) {
				this.state.visitor.location = event.target.value;
				console.log("Select Location: " + JSON.stringify(this.state.visitor));
			},
			writable: true,
			configurable: true
		},
		updateVisitor: {
			value: function updateVisitor(event) {
				this.state.visitor[event.target.id] = event.target.value;
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var sections = this.state.posts.map(function (post) {
					return React.createElement(PostCard, { key: post.id, post: post });
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
											{ style: { color: "#fff", fontSize: 36 } },
											"Curated Professional Network"
										),
										React.createElement("hr", null),
										React.createElement(
											"p",
											{ style: { color: "#fff", marginTop: 12, fontSize: 14 } },
											"Social Promotion is a curated platform for young professionals, creatives, and high performing students. Find your next job, business partner, apartment, and more on Social Promotion."
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
											"Apply"
										),
										React.createElement("hr", null),
										"Apply for our beta and be among the first on the platform when we launch in Spring.",
										React.createElement("input", { onChange: this.updateVisitor, id: "name", type: "text", placeholder: "Name", style: { background: "#f9f9f9", borderRadius: 3, marginTop: 14 }, className: "form-control" }),
										React.createElement("input", { onChange: this.updateVisitor, id: "email", type: "text", placeholder: "Email", style: { background: "#f9f9f9", borderRadius: 3, marginTop: 9 }, className: "form-control" }),
										React.createElement(
											"select",
											{ onChange: this.selectLocation, className: "form-control", style: { background: "#f9f9f9", height: 36, marginBottom: 32 } },
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
											"a",
											{ onClick: this.signUp, href: "#", className: "btn-primary btn btn-small button btn-round xs-margin-bottom-five" },
											"Submit"
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
										"h1",
										{ style: { color: "#444" } },
										"Exclusive Opportunities"
									),
									React.createElement("hr", null),
									React.createElement(
										"p",
										null,
										"Social Promotion will be a closed platform for exclusive job listings, business partnerships, events, rentals and more. By curating our membership, we ensure that all content on SP is a legitimate opportunity with high performing individuals."
									),
									React.createElement(
										"div",
										{ className: "front-panel" },
										React.createElement(
											"h2",
											null,
											"Apply"
										),
										React.createElement("hr", null),
										"Apply for our beta and be among the first on the platform when we launch in Spring.",
										React.createElement("input", { onChange: this.updateVisitor, id: "name", type: "text", placeholder: "Name", style: { background: "#f9f9f9", borderRadius: 3, marginTop: 14 }, className: "form-control" }),
										React.createElement("input", { onChange: this.updateVisitor, id: "email", type: "text", placeholder: "Email", style: { background: "#f9f9f9", borderRadius: 3, marginTop: 9 }, className: "form-control" }),
										React.createElement(
											"select",
											{ onChange: this.selectLocation, className: "form-control", style: { background: "#f9f9f9", height: 36, marginBottom: 32 } },
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
											"a",
											{ onClick: this.signUp, href: "#", className: "btn-primary btn btn-small button btn-round xs-margin-bottom-five" },
											"Submit"
										)
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