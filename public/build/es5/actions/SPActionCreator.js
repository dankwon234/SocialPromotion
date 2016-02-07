"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Dispatcher = _interopRequire(require("../dispatcher/Dispatcher"));

var APIUtils = _interopRequire(require("../utils/APIUtils"));

module.exports = {

	registerProfile: function registerProfile(profile) {
		//		console.log('registerProfile: '+JSON.stringify(profile));
		APIUtils.registerProfile(profile);
	}



};