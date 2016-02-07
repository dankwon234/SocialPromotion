"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Dispatcher = _interopRequire(require("../dispatcher/Dispatcher"));

module.exports = {

	profileRegistered: function profileRegistered(profile) {
		Dispatcher.dispatch({
			type: "PROFILE_REGISTERED",
			rawUser: profile
		});
	}




};