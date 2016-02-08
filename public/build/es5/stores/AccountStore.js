"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Dispatcher = _interopRequire(require("../dispatcher/Dispatcher"));

var assign = _interopRequire(require("object-assign"));

var Events = _interopRequire(require("events"));

var CHANGE_EVENT = "change";

var user = {
	id: null
};

var AccountStore = assign({}, Events.EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	/** @param {function} callback   */
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getCurrentUser: function () {
		return user;
	}

});

AccountStore.dispatchToken = Dispatcher.register(function (action) {
	switch (action.type) {

		case "USER_LOGGED_IN":
			user = action.rawUser;
			AccountStore.emitChange();
			break;

		case "PROFILE_REGISTERED":
			user = action.rawUser;
			AccountStore.emitChange();
			break;

		default:
		// do nothing
	}
});

module.exports = AccountStore;