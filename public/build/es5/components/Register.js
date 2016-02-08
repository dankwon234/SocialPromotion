"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var SPActionCreator = _interopRequire(require("../actions/SPActionCreator"));

var AccountStore = _interopRequire(require("../stores/AccountStore"));

var Register = (function (_React$Component) {
	function Register(props, context) {
		_classCallCheck(this, Register);

		_get(Object.getPrototypeOf(Register.prototype), "constructor", this).call(this, props, context);
		this.updateVisitor = this.updateVisitor.bind(this);
		this.signUp = this.signUp.bind(this);
		this.refreshData = this.refreshData.bind(this);
		this.selectLocation = this.selectLocation.bind(this);
		this.state = {
			visitor: {
				name: "",
				email: "",
				city: "new york"
			}
		};
	}

	_inherits(Register, _React$Component);

	_prototypeProperties(Register, null, {
		componentDidMount: {
			value: function componentDidMount() {
				//		console.log('componentDidMount')
				AccountStore.addChangeListener(this.refreshData);
			},
			writable: true,
			configurable: true
		},
		refreshData: {
			value: function refreshData() {
				var currentUser = AccountStore.getCurrentUser();
				console.log("REFRESH DATA: " + JSON.stringify(currentUser));
				if (currentUser.id != null) window.location.href = "/posts";
			},
			writable: true,
			configurable: true
		},
		signUp: {
			value: function signUp(event) {
				event.preventDefault();
				//		console.log('Sign Up: '+JSON.stringify(this.state.visitor));
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
				//		console.log('Select Location: '+JSON.stringify(this.state.visitor));
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
				return React.createElement(
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
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Register;
})(React.Component);

module.exports = Register;