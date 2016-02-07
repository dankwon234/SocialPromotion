var express = require('express');
var router = express.Router();
var Profile = require('../models/Profile');

router.get('/:resource', function(req, res, next) {

	var resource = req.params.resource;

	if (resource == 'profile'){
		res.send({
			confirmation:'success',
			resource:resource
		});
	}



});

router.post('/:resource', function(req, res, next) {

	var resource = req.params.resource;

	if (resource == 'profile'){

		var profileInfo = req.body;
		var name = profileInfo.name;
		var parts = name.split(' ');
		var firstName = parts[0];
		var lastName = (parts.length > 1) ? parts[1] : '';
		profileInfo['firstName'] = firstName;
		profileInfo['lastName'] = lastName;

		Profile.create(profileInfo, function(err, profile){
			if (err){
				res.json({
					confirmation:'fail',
					resource: err.message
				});

				return;
			}

			res.json({
				confirmation: 'success',
				resource: profile.summary()				
			});

		});

	}

});

module.exports = router;
