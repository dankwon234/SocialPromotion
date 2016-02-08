"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var PostCard = _interopRequire(require("../../components/PostCard"));

var Posts = (function (_React$Component) {
	function Posts(props, context) {
		_classCallCheck(this, Posts);

		_get(Object.getPrototypeOf(Posts.prototype), "constructor", this).call(this, props, context);
		this.state = {
			posts: [{ id: 1, type: "Job", title: "Hiring Software Intern", company: "Bedrocket Media", description: "This is the description. This is the description. This is the description. This is the description. This is the description.", location: "NYC", tags: ["programming", "Angular JS"], image: "catherine.png" }, { id: 2, type: "Rental", title: "Apartment Available", company: "", description: "This is the description. This is the description. This is the description. This is the description. This is the description.", location: "NYC", tags: ["programming", "Angular JS"], image: "catherine.png" }, { id: 3, type: "Event", title: "Startup Investing Workshop", company: "Bedrocket Media", description: "This is the description. This is the description. This is the description. This is the description. This is the description.", location: "NYC", tags: ["programming", "Angular JS"], image: "catherine.png" }, { id: 4, type: "Misc", title: "Software Intern", company: "Bedrocket Media", description: "This is the description. This is the description. This is the description. This is the description. This is the description.", location: "NYC", tags: ["programming", "Angular JS"], image: "catherine.png" }]
		};
	}

	_inherits(Posts, _React$Component);

	_prototypeProperties(Posts, null, {
		render: {
			value: function render() {
				var sections = this.state.posts.map(function (post) {
					return React.createElement(PostCard, { key: post.id, post: post });
				});

				return React.createElement(
					"section",
					null,
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "col-md-4 col-sm-6 bg-gray career-form xs-margin-top-ten" },
								React.createElement(
									"div",
									{ style: { textAlign: "center" } },
									React.createElement(
										"p",
										{ className: "title-small text-uppercase black-text" },
										React.createElement(
											"strong",
											null,
											"Instructor"
										)
									),
									React.createElement("img", { style: { width: 120, borderRadius: 60, marginBottom: 24, border: "1px solid #ddd" }, src: "/images/dankwon.jpg" }),
									React.createElement(
										"p",
										{ className: "text-large black-text letter-spacing-2 no-margin-bottom" },
										"Dan Kwon"
									),
									React.createElement(
										"p",
										{ className: "margin-one", style: { textAlign: "left" } },
										"This is the bio"
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
										{ className: "row" },
										React.createElement(
											"div",
											{ className: "col-md-12 col-sm-12" },
											React.createElement(
												"ul",
												{ className: "nav nav-tabs nav-tabs-light text-left" },
												React.createElement(
													"li",
													{ className: "active" },
													React.createElement(
														"a",
														{ href: "#tab_sec1", "data-toggle": "tab" },
														"Opportunities"
													)
												),
												React.createElement(
													"li",
													null,
													React.createElement(
														"a",
														{ href: "#tab_sec2", "data-toggle": "tab" },
														"Marketplace"
													)
												),
												React.createElement(
													"li",
													null,
													React.createElement(
														"a",
														{ href: "#tab_sec3", "data-toggle": "tab" },
														"Events"
													)
												)
											)
										)
									),
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
										),
										React.createElement(
											"div",
											{ className: "tab-pane fade in", id: "tab_sec2" },
											React.createElement(
												"div",
												{ className: "row" },
												React.createElement(
													"div",
													{ className: "col-md-12 col-sm-12" },
													React.createElement("div", { className: "panel-group toggles-style3" })
												)
											)
										),
										React.createElement(
											"div",
											{ className: "tab-pane fade in", id: "tab_sec3" },
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
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Posts;
})(React.Component);

module.exports = Posts;