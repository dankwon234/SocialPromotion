"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Promise = _interopRequire(require("bluebird"));

var superagent = _interopRequire(require("superagent"));

var SPServerActionCreator = _interopRequire(require("../actions/SPServerActionCreator"));

function urlRequest(method, path, params) {
	return new Promise(function (resolve, reject) {
		if (method.toLowerCase() == "get") {
			superagent.get(path).query(params).set("Accept", "application/json").end(function (err, res) {
				if (err) {
					reject(err);
				} else {
					resolve(res.body);
				}
			});
		}

		if (method.toLowerCase() == "post") {
			superagent.post(path).send(params).set("Accept", "application/json").end(function (err, res) {
				if (err) {
					reject(err);
				} else {
					resolve(res.body);
				}
			});
		}
	});
}

module.exports = {

	registerProfile: function registerProfile(profile) {
		//		console.log('APIUtils - registerProfile: '+JSON.stringify(profile));
		urlRequest("post", "/api/profile", profile).then(function (response) {
			console.log("API UTILS - RESPONSE: " + JSON.stringify(response));
			SPServerActionCreator.profileRegistered(response.profile);
		})["catch"](function (err) {
			console.log("ERROR: " + err.message);
		});
	}
};